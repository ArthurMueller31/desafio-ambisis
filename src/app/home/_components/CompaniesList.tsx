import Link from "next/link";
import prisma from "../../../../lib/prisma";
import { ChevronRight } from "lucide-react";

export default async function CompaniesList() {
  // finds all companies previously registered
  const companies = await prisma.empresa.findMany();

  return (
    <div className="relative flex h-auto w-full flex-col justify-between overflow-x-hidden divide-y divide-gray-200">

      {/* "loops" all companies and displays "razaoSocial" and "CNPJ" */}
      {companies.map((empresa) => (
        <Link key={empresa.id} href={`/empresa/${empresa.id}`}>
          <div
            key={empresa.id}
            className="flex items-center min-h-[68px] justify-between cursor-pointer hover:bg-slate-50 hover:rounded transition-all duration-100 "
          >
            <div className="flex flex-col justify-center">
              <p className="font-medium leading-normal line-clamp-1">
                {empresa.razaoSocial}
              </p>
              <p className="text-[#4d6a99] text-sm font-normal leading-normal line-clamp-2">
                CNPJ: {empresa.cnpj}
              </p>
            </div>

            <ChevronRight color="gray" />
          </div>
        </Link>
      ))}
    </div>
  );
}
