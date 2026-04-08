import { useState } from "react";
import "./css/App.css";
import Topo from "./componentes/Topo";
import Rodape from "./componentes/Rodape";
import Cartao from "./componentes/cartao";
import Slideshow from "./componentes/SlideShow";
import CartaoProfessor from "./componentes/cartaoProfessor";
import CartaoLaboratorio from "./componentes/cartaoLaboratorio";
import alunos from "./dados/dados_alunos";
import professores from "./dados/dados_professores";
import laboratorios from "./dados/dados_laboratorios";

function App() {

  const [secao, setSecao] = useState("menu");

  return (
    <>
      <Topo />
      <Slideshow />
    

      <div className={secao === "menu" ? "menu-inicial" : "menu-top"}>
        <button onClick={() => setSecao("menu-inicial")}>Home</button>
        <button onClick={() => setSecao("alunos")}>Alunos</button>
        <button onClick={() => setSecao("professores")}>Professores</button>
        <button onClick={() => setSecao("laboratorios")}>Laboratórios</button>
      </div>

      <div className="container">

        {secao === "alunos" &&
          alunos.map((aluno, index) => (
            <Cartao
              key={index}
              foto={aluno.foto}
              nome={aluno.nome}
              email={aluno.email}
              telefone={aluno.telefone}
            />
          ))
        }

        {secao === "professores" &&
          professores.map((prof, index) => (
            <CartaoProfessor
              key={index}
              foto={prof.foto}
              nome={prof.nome}
              area={prof.area}
              cargo={prof.cargo}
              email={prof.email}
            />
          ))
        }

        {secao === "laboratorios" &&
          laboratorios.map((lab, index) => (
            <CartaoLaboratorio
              key={index}
              foto={lab.foto}
              nome={lab.nome}
              localizacao={lab.localizacao}
              computadores={lab.computadores}
            />
          ))
        }

      </div>

      <Rodape />
    </>
  );
}

export default App;