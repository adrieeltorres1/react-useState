const App = () => {
  const [aluno, setAluno] = ('')
  const [genero, setGenero] = ('')
  const [idade, setIdade] = ('')
  const [alunos, setAlunos] = []



  return (  
    <>
      <form className="flex justify-center 
        m-8 rounded-lg 
        border-2 
        bg-slate-100 
        border-blue-200 
        w-[300px] 
        h-[350px]">
          <div className="flex flex-col mt-4">

            <label htmlFor="aluno">Nome do aluno(a)</label>
            <input className="rounded-md  
              border-2 
              border-gray-200 
              w-[250px] 
              p-3" 
              type="text" 
              id="aluno" 
              placeholder="Digite o nome do aluno" required/>

            <label htmlFor="genero">Gênero</label>
            <input className="rounded-md 
              border-2 
              border-gray-200 
              w-[250px] 
              p-3" 
              type="text" 
              id="genero" 
              placeholder="Digite o gênero" required/>

            <label htmlFor="idade">Idade</label>
            <input 
              className="rounded-md  
              border-2 
              border-gray-200 
              w-[250px] 
              p-3 " 
              type="number" 
              id="idade" 
              placeholder="Digite a idade" required/>

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