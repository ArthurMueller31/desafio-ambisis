export default function Fields() {
  return (
    <form className="px-6 space-y-4 text-[#4d6a99]">
      <div className="flex flex-col w-full">
        <label>Razão Social</label>
        <input
          type="text"
          placeholder="Digite a razão social"
          className="border border-gray-500 p-2 rounded"
        />
      </div>

      <div className="flex flex-col w-full">
        <label>CNPJ</label>
        <input
          type="text"
          placeholder="Digite o CNPJ"
          className="border border-gray-500 p-2 rounded"
        />
      </div>
      <div className="flex flex-col w-full">
        <label>CEP</label>
        <input
          type="text"
          placeholder="Digite o CEP"
          className="border border-gray-500 p-2 rounded"
        />
      </div>
      <div className="flex flex-col w-full">
        <label>Estado</label>
        <input
          type="text"
          placeholder="Digite o estado"
          className="border border-gray-500 p-2 rounded"
        />
      </div>
      <div className="flex flex-col w-full">
        <label>Cidade</label>
        <input
          type="text"
          placeholder="Digite a cidade"
          className="border border-gray-500 p-2 rounded"
        />
      </div>
      <div className="flex flex-col w-full">
        <label>Bairro</label>
        <input
          type="text"
          placeholder="Digite o bairro"
          className="border border-gray-500 p-2 rounded"
        />
      </div>
      <div className="flex flex-col w-full">
        <label>Complemento</label>
        <input
          type="text"
          placeholder="Digite o complemento"
          className="border border-gray-500 p-2 rounded"
        />
      </div>
    </form>
  );
}
