import prisma from "../../../../lib/prisma";
import { redirect } from "next/navigation";

export default function RegisterLicense({
  empresa,
  empresaId
}: {
  empresa?: { id: number; razaoSocial: string } | null;
  empresaId?: number;
}) {
  async function createLicense(formData: FormData) {
    "use server";

    // make sure that it is a string (and to use trim), and remove any unnecessary spaces
    const numero = formData.get("numero")!.toString().trim();
    const orgaoAmbiental = formData.get("orgaoAmbiental")!.toString().trim();
    const emissao = new Date(formData.get("emissao")!.toString().trim());
    const validade = new Date(formData.get("validade")!.toString().trim());
    const empresaID = Number(formData.get("empresaId")!.toString().trim());

    // creates license attached to the company
    await prisma.licenca.create({
      data: {
        numero,
        orgaoAmbiental,
        emissao,
        validade,
        empresa: { connect: { id: empresaID } }
      }
    });

    // checks for the value in forms; "conclude" sends user to /empresa/id; "addAnother" saves
    // license and resets fields to add another
    const addAnotherLicenseOrConclude =
      formData.get("addAnotherOrConclude")!.toString().trim() ?? "conclude";

    if (addAnotherLicenseOrConclude === "addAnother") {
      redirect(`/cadastrar-licenca?empresaId=${empresaID}`);
    }

    redirect(`/empresa/${empresaID}`);
  }

  return (
    <form action={createLicense} className="space-y-4" autoComplete="off">
      <div className="flex flex-col w-full">
        <label>Empresa</label>
        <input
          type="text"
          placeholder="Empresa"
          className="border p-2 rounded cursor-not-allowed bg-gray-100"
          title="Esta licença está atrelada à essa empresa."
          disabled
          value={empresa!.razaoSocial}
          readOnly
        />
        <input type="hidden" name="empresaId" value={empresaId ?? ""} />
      </div>

      <div className="flex flex-col w-full ">
        <label>Número</label>
        <input
          type="text"
          name="numero"
          id="numero"
          placeholder="Digite o número da licença"
          className="border p-2 rounded"
          required
        />
      </div>

      <div className="flex flex-col w-full">
        <label>Órgão Ambiental</label>
        <input
          type="text"
          name="orgaoAmbiental"
          id="orgaoAmbiental"
          placeholder="Digite o órgão ambiental"
          className="border p-2 rounded"
          required
        />
      </div>

      <div className="flex flex-col w-full">
        <label>Emissão</label>
        <input
          type="date"
          name="emissao"
          id="emissao"
          className="border p-2 rounded"
          required
        />
      </div>

      <div className="flex flex-col w-full">
        <label>Validade</label>
        <input
          type="date"
          name="validade"
          id="validade"
          className="border p-2 rounded"
          required
        />
      </div>

      <div className="flex justify-end my-6 gap-4">
        <button
          type="submit"
          name="addAnotherOrConclude"
          value="addAnother"
          className="px-3 py-2 bg-gray-500 text-white rounded cursor-pointer"
        >
          Salvar e adicionar outra
        </button>

        <button
          type="submit"
          name="addAnotherOrConclude"
          value="conclude"
          className="px-3 py-2 bg-blue-500 text-white rounded cursor-pointer"
        >
          Concluir
        </button>
      </div>
    </form>
  );
}
