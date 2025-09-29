export default function Header() {
  return (
    <main className="flex items-center justify-center py-2 mb-2">
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-medium leading-tight tracking-[-0.015em] flex-1 text-center pb-3">
          Cadastro de Empresa
        </h2>

        <p className="text-[#4d6a99]">
          Preencha os campos abaixo para cadastrar uma nova empresa.
        </p>
      </div>

      {/* <div className="w-full h-52 relative">
        <Image src={"/images/building.png"} fill alt="building-image" className="rounded object-cover" />
      </div> */}
    </main>
  );
}
