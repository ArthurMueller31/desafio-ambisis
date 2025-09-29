import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function EnvironmentalLicensesList() {
  return (
    <div className="relative flex flex-col h-auto w-full mt-6 justify-between  overflow-x-hidden">
      <h2 className="text-xl font-medium">Licenças Ambientais</h2>
      <div className="flex items-center min-h-[68px] justify-between cursor-pointer transition-all duration-100">
        <div className="flex flex-col justify-center">
          <p className="font-medium leading-normal line-clamp-1">
            Empresa Sustentável Ltda.
          </p>
          <p className="text-[#4d6a99] text-sm font-normal leading-normal line-clamp-2">
            CNPJ: 12.345.678/0001-90
          </p>
        </div>

        <ChevronRight color="gray" />
      </div>

      <div className="flex items-center min-h-[68px] border-t border-t-gray-200 justify-between cursor-pointer transition-all duration-100">
        <div className="flex flex-col justify-center">
          <p className="font-medium leading-normal line-clamp-1">
            Empresa 2 teste
          </p>
          <p className="text-[#4d6a99] text-sm font-normal leading-normal line-clamp-2">
            CNPJ: 12.345.678/0001-90
          </p>
        </div>

        <ChevronRight color="gray" />
      </div>

      <Link
        href={"/cadastrar-licenca"}
        className="bg-gray-300 rounded mt-2 p-2 w-full cursor-pointer text-center font-semibold"
      >
        Adicionar licença
      </Link>

      <div className="flex justify-end my-6 gap-4">
        <button className="px-3 py-2 bg-gray-200 rounded">Cancelar</button>
        <button disabled className="px-3 py-2 bg-blue-500 text-white rounded">
          Concluir cadastro
        </button>
      </div>
    </div>
  );
}
