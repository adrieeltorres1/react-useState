import { useRef, useState } from "react"

const App = () => {
  const alunoRef = useRef('')
  const generoRef = useRef('')
  const idadeRef = useRef('')
  const [alunos, setAlunos] = useState([])

  const alunoInputRef = useRef(null);
  const generoInputRef = useRef(null);
  const idadeInputRef = useRef(null);

  function handleAlunoChange(e) {
    alunoRef.current = e.target.value;
  }

  function handleGeneroChange(e) {
    generoRef.current = e.target.value;
  }

  function handleIdadeChange(e) {
    idadeRef.current = e.target.value;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const novosAlunos = {
      nome: alunoRef.current,
      genero: generoRef.current,
      idade: idadeRef.current
    };
    setAlunos([...alunos, novosAlunos]);
    
    alunoInputRef.current.value = '';
    generoInputRef.current.value = '';
    idadeInputRef.current.value = '';

    alunoRef.current = '';
    generoRef.current = '';
    idadeRef.current = '';
  }


  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center 
        m-8 rounded-lg 
        border-2 
        bg-slate-100 
        border-blue-200 
        w-[300px] 
        h-[350px]"
      >

        <div className="flex flex-col mt-4">

          <label htmlFor="aluno">Nome do aluno(a)</label>
          <input className="rounded-md  
              border-2 
              border-gray-200 
              w-[250px] 
              p-3"
            type="text"
            id="aluno"
            placeholder="Digite o nome do aluno"
            onChange={handleAlunoChange}
            ref={alunoInputRef}
            required
          />

          <label htmlFor="genero">Gênero</label>
          <input className="rounded-md 
              border-2 
              border-gray-200 
              w-[250px] 
              p-3"
            type="text"
            id="genero"
            placeholder="Digite o gênero"
            onChange={handleGeneroChange}
            ref={generoInputRef}
            required
          />

          <label htmlFor="idade">Idade</label>
          <input
            className="rounded-md  
              border-2 
              border-gray-200 
              w-[250px] 
              p-3 "
            type="number"
            id="idade"
            placeholder="Digite a idade"
            onChange={handleIdadeChange}
            ref={idadeInputRef}
            required
          />

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
      <div className="flex flex-col gap-4 ml-8">
        {alunos.map((aluno, index) => (
          <div key={index} className="bg-slate-200 p-4 rounded-lg border border-gray-400 w-[300px]">
            <p><strong>Nome: </strong>{aluno.nome}</p>
            <p><strong>Gênero:</strong> {aluno.genero}</p>
            <p><strong>Idade: </strong>{aluno.idade}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;