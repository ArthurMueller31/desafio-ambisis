import { ChevronRight } from "lucide-react";

export default function CompaniesList() {
  return (
    <div className="relative flex h-auto w-full flex-col justify-between  overflow-x-hidden px-6">
      <div className="flex items-center min-h-[68px] justify-between cursor-pointer hover:bg-slate-50 transition-all duration-100">
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
      <div className="flex items-center min-h-[68px] justify-between border-t border-t-gray-200 cursor-pointer hover:bg-slate-50 transition-all duration-100">
        <div className="flex flex-col justify-center">
          <p className="font-medium leading-normal line-clamp-1">
            Verde Futuro S.A.
          </p>
          <p className="text-[#4d6a99] text-sm font-normal leading-normal line-clamp-2">
            CNPJ: 98.765.432/0001-01
          </p>
        </div>

        <ChevronRight color="gray" />
      </div>
      <div className="flex items-center min-h-[68px] justify-between border-t border-t-gray-200 cursor-pointer hover:bg-slate-50 transition-all duration-100">
        <div className="flex flex-col justify-center">
          <p className="font-medium leading-normal line-clamp-1">
            EcoSoluções Ambientais Ltda.
          </p>
          <p className="text-[#4d6a99] text-sm font-normal leading-normal line-clamp-2">
            CNPJ: 56.789.012/0001-34
          </p>
        </div>

        <ChevronRight color="gray" />
      </div>

      <div className="flex items-center min-h-[68px] justify-between border-t border-t-gray-200 cursor-pointer hover:bg-slate-50 transition-all duration-100">
        <div className="flex flex-col justify-center">
          <p className="font-medium leading-normal line-clamp-1">
            BioTech Inovações S.A.
          </p>
          <p className="text-[#4d6a99] text-sm font-normal leading-normal line-clamp-2">
            CNPJ: 34.567.890/0001-67
          </p>
        </div>

        <ChevronRight color="gray" />
      </div>
      <div className="flex items-center min-h-[68px] justify-between border-t border-t-gray-200 cursor-pointer hover:bg-slate-50 transition-all duration-100">
        <div className="flex flex-col justify-center">
          <p className="font-medium leading-normal line-clamp-1">
            Recicla Brasil Ltda.
          </p>
          <p className="text-[#4d6a99] text-sm font-normal leading-normal line-clamp-2">
            CNPJ: 78.901.234/0001-90
          </p>
        </div>

        <ChevronRight color="gray" />
      </div>
    </div>
  );
}
