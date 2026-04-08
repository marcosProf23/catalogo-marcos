import  { useEffect,useState } from "react";
import imagem1 from "../imagens/banner1.png";
import imagem2 from "../imagens/banner2.png";


function Slideshow() {
  const imagens = [imagem1, imagem2];
  const [indiceAtual, setIndiceAtual] = useState(0);

  const proximoSlide = () => {
    setIndiceAtual((prevIndice) => (prevIndice + 1) % imagens.length);
  };

  const voltarSlide = () => {
    setIndiceAtual((prevIndice) => (prevIndice - 1 + imagens.length) % imagens.length);
  };

  useEffect(() =>{

    const interval = setInterval(proximoSlide,5000);
    
    return()=> clearInterval(interval);
  },[]);


  return (
    <div className="slideshow">
      <img src={imagens[indiceAtual]} alt={`Imagem ${indiceAtual + 1}`} className="banner"/>
    <div className="controles">
      <button onClick={voltarSlide}>Anterior</button>
      <button onClick={proximoSlide}>Próximo</button>
    </div>
    </div>
  );
}

export default Slideshow;