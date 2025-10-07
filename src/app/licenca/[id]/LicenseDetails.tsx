import { redirect } from "next/navigation";
import prisma from "../../../../lib/prisma";

export default async function LicenseDetails({
  licenseIDString
}: {
  licenseIDString: string;
}) {
  const id = parseInt(licenseIDString, 10);

  // make sure it complies with the prisma format for dates
  function formatDateForInput(date: Date) {
    return new Date(date).toISOString().slice(0, 10);
  }

  // fetch license details
  const licenca = await prisma.licenca.findUnique({
    where: { id },
    include: {
      empresa: { select: { id: true, razaoSocial: true, cnpj: true } }
    }
  });

  if (!licenca) {
    return (
      <div className="text-gray-500 text-center">
        <h1>Licença não encontrada.</h1>
      </div>
    );
  }

  async function updateLicense(formData: FormData) {
    "use server";

    const licenseID = Number(formData.get("id")!.toString().trim());

    // make sure that it is a string (and to use trim), and remove any unnecessary spaces
    const numero = formData.get("numero")!.toString().trim();
    const orgaoAmbiental = formData.get("orgaoAmbiental")!.toString().trim();
    const emissao = new Date(formData.get("emissao")!.toString().trim());
    const validade = new Date(formData.get("validade")!.toString().trim());

    await prisma.licenca.update({
      where: { id: licenseID },
      data: { numero, orgaoAmbiental, emissao, validade }
    });

    // after updating, redirect
    return redirect(`/empresa/${licenca!.empresaId}`);
  }

  async function deleteLicense(formData: FormData) {
    "use server";

    const licenseID = Number(formData.get("id")!.toString().trim());

    await prisma.licenca.findUnique({
      where: { id: licenseID },
      select: { empresaId: true }
    });

    await prisma.licenca.delete({ where: { id: licenseID } });

    // after delete, redirect
    return redirect(`/empresa/${licenca!.empresaId}`);
  }

  return (
    <main>
      <form
        id="updateForm"
        action={updateLicense}
        className="space-y-4"
        autoComplete="off"
      >
        <input type="hidden" name="id" value={licenca.id} />
        <input type="hidden" name="empresaId" value={licenca.empresaId} />

        <div className="flex flex-col w-full">
          <label>Empresa (razão social) </label>
          <input
            type="text"
            defaultValue={licenca.empresa!.razaoSocial}
            className="border p-2 rounded cursor-not-allowed bg-gray-100"
            title="Esta licença está atrelada à essa empresa."
            disabled
            readOnly
          />
        </div>

        <div className="flex flex-col w-full ">
          <label>Número</label>
          <input
            type="text"
            name="numero"
            defaultValue={licenca.numero}
            className="border p-2 rounded"
            required
          />
        </div>

        <div className="flex flex-col w-full">
          <label>Órgão Ambiental</label>
          <input
            type="text"
            name="orgaoAmbiental"
            defaultValue={licenca.orgaoAmbiental}
            className="border p-2 rounded"
            required
          />
        </div>

        <div className="flex flex-col w-full">
          <label>Emissão</label>
          <input
            type="date"
            name="emissao"
            defaultValue={formatDateForInput(licenca.emissao)}
            className="border p-2 rounded"
            required
          />
        </div>

        <div className="flex flex-col w-full">
          <label>Validade</label>
          <input
            type="date"
            name="validade"
            defaultValue={formatDateForInput(licenca.validade)}
            className="border p-2 rounded"
            required
          />
        </div>
      </form>

      <div className="flex justify-end my-6 gap-4">
        <form action={deleteLicense}>
          <input type="hidden" name="id" value={licenca.id} />
          <button
            type="submit"
            className="px-3 py-2 bg-red-500 text-white rounded cursor-pointer"
          >
            Excluir licença
          </button>
        </form>

        <button
          type="submit"
          form="updateForm"
          className="px-3 py-2 bg-blue-500 text-white rounded cursor-pointer"
        >
          Salvar mudanças
        </button>
      </div>
    </main>
  );
}
