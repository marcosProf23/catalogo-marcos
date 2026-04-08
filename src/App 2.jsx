import './App.css'
import Cartao from './cartao';
import pessoas from './dados_alunos.js';
import Topo from './Topo.jsx';
import Rodape from './Rodape.jsx';

function App() {
 return (
   <>
    <Topo />

    <div className='container'>
      {pessoas.map((pessoa)=>{
        return <Cartao
        foto={pessoa.foto}
        nome={pessoa.nome}
        idade={pessoa.idade}
        email={pessoa.email}
        telefone={pessoa.telefone}
         />;

      })}
   
     
    </div>
    <Rodape />
    </>
  );
}

export default App
