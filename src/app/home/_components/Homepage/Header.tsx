import { Building2, Plus } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <main className="flex items-center px-6 justify-between py-2">
      <div className="flex items-center">
        <Building2 />
        <h2 className="text-[#0e131b] text-xl font-medium leading-tight tracking-[-0.015em] flex-1 text-center pl-2">
          Empresas
        </h2>
      </div>
      <div className="flex w-12 items-center justify-end">
        <Link
          href={"/cadastrar-empresa"}
          className="flex cursor-pointer items-center bg-black px-2 py-1 rounded"
        >
          <Plus color="white" className="mr-1" />
          <p className="text-white">Cadastrar</p>
        </Link>
      </div>
    </main>
  );
}
