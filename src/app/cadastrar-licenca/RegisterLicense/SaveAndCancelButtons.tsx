export default function SaveAndCancelButtons() {
  return (
    <div className="flex justify-end my-6 gap-4">
      <button className="px-3 py-2 bg-gray-200 rounded cursor-pointer">
        Voltar
      </button>
      <button
        className="px-3 py-2 bg-blue-500 text-white rounded cursor-pointer"
      >
        Concluir cadastro
      </button>
    </div>
  );
}
