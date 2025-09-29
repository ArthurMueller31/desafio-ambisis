export default function Fields() {
  return (
    <form className="space-y-4 ">
      <div className="flex flex-col w-full">
        <label>Empresa</label>
        <input
          type="text"
          placeholder="SELECT DA TABELA"
          className="border border-[#4d6a99] text-[#4d6a99] p-2 rounded"
        />
      </div>

      <div className="flex flex-col w-full ">
        <label>Número</label>
        <input
          type="text"
          placeholder="Digite o número da licença"
          className="border border-[#4d6a99] text-[#4d6a99] p-2 rounded"
        />
      </div>
      <div className="flex flex-col w-full">
        <label>Órgão Ambiental</label>
        <input
          type="text"
          placeholder="Digite o órgão ambiental"
          className="border border-[#4d6a99] text-[#4d6a99] p-2 rounded"
        />
      </div>
      <div className="flex flex-col w-full">
        <label>Emissão</label>
        <input
          type="date"
          placeholder="Digite a data de emissão"
          className="border border-[#4d6a99] text-[#4d6a99] p-2 rounded"
        />
      </div>
      <div className="flex flex-col w-full">
        <label>Validade</label>
        <input
          type="date"
          placeholder="Digite a validade"
          className="border border-[#4d6a99] text-[#4d6a99] p-2 rounded"
        />
      </div>
    </form>
  );
}
