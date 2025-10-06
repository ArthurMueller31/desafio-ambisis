import { Info } from "lucide-react";
import prisma from "../../../../lib/prisma";
import { redirect } from "next/navigation";

export default function RegisterFieldsAndLicenses() {
  async function createCompany(formData: FormData) {
    "use server";

    // make sure that it is a string (and to use trim), and remove any unnecessary spaces
    const razaoSocial = formData.get("razaoSocial")!.toString().trim();
    const cnpj = formData.get("cnpj")!.toString().trim();
    const cep = formData.get("cep")!.toString().trim();
    const cidade = formData.get("cidade")!.toString().trim();
    const estado = formData.get("estado")!.toString().trim();
    const bairro = formData.get("bairro")!.toString().trim();
    const complemento = formData.get("complemento")!.toString().trim();

    const empresa = await prisma.empresa.create({
      data: {
        razaoSocial,
        cnpj,
        cep,
        cidade,
        estado,
        bairro,
        complemento
      }
    });

    // if user clicks on "Add license", he's redirected to /cadastrar-licenca
    const concludeOrRedirect =
      (formData.get("redirect") as string) || "conclude";

    if (concludeOrRedirect === "redirect") {
      redirect(`/cadastrar-licenca?empresaId=${empresa.id}`);
    }

    // if "conclude", redirects to /home
    redirect(`/home`);
  }

  return (
    <form action={createCompany} className="space-y-4" autoComplete="off">
      <div className="flex flex-col w-full">
        <label htmlFor="razaoSocial">Razão Social</label>
        <input
          type="text"
          id="razaoSocial"
          name="razaoSocial"
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
          placeholder="Digite o complemento"
          className="border p-2 rounded"
          required
        />
      </div>

      <div className="flex text-gray-500 text-sm items-center gap-2">
        <Info color="gray" size={20} className="shrink-0 min-w-4 min-h-4" />
        <span>
          Ao pressionar &quot;Adicionar licença&quot;, os dados da empresa
          inseridos acima são salvos.
        </span>
      </div>

      <div className="relative flex flex-col h-auto w-full mt-4 justify-between  overflow-x-hidden border-t border-t-gray-300">
        <h2 className="text-xl font-medium mt-3">Licenças Ambientais</h2>

        <button
          className="bg-gray-300 rounded mt-4 p-2 w-full cursor-pointer text-center font-semibold"
          type="submit"
          name="redirect"
          value={"redirect"}
        >
          Adicionar licença
        </button>

        <div className="my-4 flex items-center gap-4">
          <hr className="w-full border-gray-300" />
          <p className="text-sm text-center">ou</p>
          <hr className="w-full border-gray-300" />
        </div>

        <div className="flex justify-end mb-6 gap-4">
          <button
            className="px-3 py-2 bg-blue-600 text-white rounded cursor-pointer"
            type="submit"
            name="redirect"
            value={"conclude"}
          >
            Concluir cadastro
          </button>
        </div>
      </div>
    </form>
  );
}
