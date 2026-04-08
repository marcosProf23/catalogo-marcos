import logo from "../imagens/senai_logo.png"; 
function Rodape(){
    return(
        <header>
            <div className="rodape">
                <center>
                
                <img src={logo}  alt="senai"/>
                <p>Todos os direitos reservados.</p>
                <p> 2026</p>

                </center>
                

            </div>
        </header>
    );
}
export default Rodape;