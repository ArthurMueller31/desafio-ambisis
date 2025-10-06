export default function Header() {
  return (
    <main className="flex items-center justify-center py-2 mb-2">
      <div className="flex flex-col items-center w-full">
        <h2 className="text-xl font-medium leading-tight tracking-[-0.015em] flex-1 text-center pb-3">
          Detalhes da empresa
        </h2>

        <p className="text-[#4d6a99]">
          Selecione os campos abaixo para editar; aperte &quot;Excluir
          empresa&quot; para remover a empresa e todas as licenças atreladas à
          ela.
        </p>
      </div>
    </main>
  );
}
