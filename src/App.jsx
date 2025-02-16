const App = () => {
  return (  
    <>
      <form className="flex justify-center m-8 border-2 border-blue-300 w-[300px] h-[350px]">
          <div className="flex flex-col mt-4">
            <label htmlFor="aluno">Nome do aluno(a)</label>
            <input className="rounded-md  border-2 border-gray-200 w-[250px] p-3" type="text" id="aluno"/>

            <label htmlFor="genero">Gênero</label>
            <input className="rounded-md border-2 border-gray-200 w-[250px] p-3" type="text" id="genero"/>

            <label htmlFor="idade">Idade</label>
            <input className="rounded-md  border-2 border-gray-200 w-[250px] p-3 " type="number" id="idade"/>

            <button className="border-1
              rounded-full
              h-[45px] 
              bg-blue-500 
              hover:bg-sky-600  
              text-base mt-4" 
              type="submit">
              Adiconar
            </button>
          </div>
      </form>
    </>
  );
}
 
export default App;