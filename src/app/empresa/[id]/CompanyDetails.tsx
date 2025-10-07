import Link from "next/link";
import prisma from "../../../../lib/prisma";
import { ChevronRight } from "lucide-react";
import { redirect } from "next/navigation";

export default async function CompanyDetails({
  companyID
}: {
  companyID: string;
}) {
  const id = parseInt(companyID, 10); // convert to Int in base 10 (decimal)

  const empresa = await prisma.empresa.findUnique({
    where: { id },
    include: {
      licencas: {
        select: {
          id: true,
          numero: true,
          orgaoAmbiental: true
        }
      }
    }
  });

  async function updateCompany(formData: FormData) {
    "use server";

    // make sure that it is a string (and to use trim), and remove any unnecessary spaces
    const companyString = formData.get("id")!.toString().trim();
    const companyID = Number(companyString);
    const razaoSocial = formData.get("razaoSocial")!.toString().trim();
    const cnpj = formData.get("cnpj")!.toString().trim();
    const cep = formData.get("cep")!.toString().trim();
    const estado = formData.get("estado")!.toString().trim();
    const cidade = formData.get("cidade")!.toString().trim();
    const bairro = formData.get("bairro")!.toString().trim();
    const complemento = formData.get("complemento")!.toString().trim();

    await prisma.empresa.update({
      where: { id: companyID },
      data: { razaoSocial, cnpj, cep, estado, cidade, bairro, complemento }
    });

    return redirect("/home");
  }

  async function deleteCompany(formData: FormData) {
    "use server";

    const companyID = Number(formData.get("id")!.toString().trim());
    await prisma.empresa.delete({ where: { id: companyID } });

    redirect("/home");
  }

  if (!empresa) {
    return (
      <div className="text-gray-500 text-center">
        <h1>Empresa não encontrada.</h1>
      </div>
    );
  }

  return (
    <main>
      <form className="space-y-4" autoComplete="off" action={updateCompany}>
        <input type="hidden" name="id" value={String(empresa.id)} />

        <div className="flex flex-col w-full">
          <label htmlFor="razaoSocial">Razão Social</label>
          <input
            type="text"
            id="razaoSocial"
            name="razaoSocial"
            defaultValue={empresa.razaoSocial}
            placeholder="Digite a razão social"
            className="border p-2 rounded"
            required
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="cnpj">CNPJ</label>
          <input
            type="text"
            id="cnpj"
            name="cnpj"
            defaultValue={empresa.cnpj}
            placeholder="Digite o CNPJ"
            className="border p-2 rounded"
            required
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="cep">CEP</label>
          <input
            type="text"
            id="cep"
            name="cep"
            defaultValue={empresa.cep}
            placeholder="Digite o CEP"
            className="border p-2 rounded"
            required
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="cidade">Cidade</label>
          <input
            type="text"
            id="cidade"
            name="cidade"
            defaultValue={empresa.cidade}
            placeholder="Digite a cidade"
            className="border p-2 rounded"
            required
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="estado">Estado</label>
          <input
            type="text"
            id="estado"
            name="estado"
            defaultValue={empresa.estado}
            placeholder="Digite o estado"
            className="border p-2 rounded"
            required
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="bairro">Bairro</label>
          <input
            type="text"
            id="bairro"
            name="bairro"
            defaultValue={empresa.bairro}
            placeholder="Digite o bairro"
            className="border p-2 rounded"
            required
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="complemento">Complemento</label>
          <input
            type="text"
            id="complemento"
            name="complemento"
            defaultValue={empresa.complemento}
            placeholder="Digite o complemento"
            className="border p-2 rounded"
            required
          />
        </div>

        <div className="flex mb-6 justify-end gap-4">
          <button
            className="px-3 py-2 bg-blue-600 text-white rounded cursor-pointer"
            type="submit"
          >
            Salvar alterações
          </button>
        </div>
      </form>

      <div className="relative flex flex-col h-auto w-full mt-4 justify-between  overflow-x-hidden border-t border-gray-300">
        <h2 className="text-xl font-medium mt-3">Licenças Ambientais</h2>

        <div className="divide-y divide-gray-300">
          {empresa.licencas && empresa.licencas.length > 0 ? (
            empresa.licencas.map((licenca) => (
              <Link
                key={licenca.id}
                href={`/licenca/${licenca.id}`}
                className="flex items-center min-h-[68px] justify-between transition-all duration-100"
              >
                <div className="flex flex-col justify-center">
                  <p className="font-medium leading-normal line-clamp-1">
                    {licenca.orgaoAmbiental}
                  </p>
                  <p className="text-[#4d6a99] text-sm font-normal leading-normal line-clamp-2">
                    {licenca.numero}
                  </p>
                </div>

                <ChevronRight color="gray" />
              </Link>
            ))
          ) : (
            <p className="my-2 text-gray-500">Nenhuma licença adicionada.</p>
          )}
        </div>

        <Link
          href={`/cadastrar-licenca?empresaId=${empresa.id}`}
          className="bg-gray-300 rounded mt-2 p-2 w-full cursor-pointer text-center font-semibold"
        >
          Adicionar licença
        </Link>

        <div className="my-4 flex items-center gap-4">
          <hr className="w-full border-gray-300" />
          <p className="text-sm text-center">ou</p>
          <hr className="w-full border-gray-300" />
        </div>

        <div className="flex justify-end mb-6 gap-4">
          <form action={deleteCompany}>
            <input type="hidden" name="id" value={String(empresa.id)} />
            <button className="px-3 py-2 bg-red-500 text-white rounded cursor-pointer">
              Excluir empresa
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
