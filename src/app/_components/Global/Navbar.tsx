import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-transparent">
        {/* Container controla o espaçamento lateral para toda a largura do conteúdo */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-12 flex items-center justify-between">
          {/* Logo: se quiser margem extra só no logo, adicione ml-4 mr-6 por exemplo */}
          <Link
            href="/"
            className="text-gray-900 font-semibold text-lg tracking-tight"
          >
            LOGO
          </Link>

          {/* Exemplos de links (desktop) */}
          <nav>
            <ul className="hidden md:flex items-center gap-6">
              <li>
                <Link href="/empresas" className="text-sm hover:underline">
                  Empresas
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-sm hover:underline">
                  Licenças
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="h-14"></div>
    </>
  );
}
