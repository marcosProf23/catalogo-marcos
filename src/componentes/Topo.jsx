import logo from "../imagens/senailogo_topo.png";

function Topo(){
    return(
        <header>
            <div className="topo">
                <img src={logo}  alt="senai"/>
                <h1>SENAI</h1>

            </div>
        </header>
    );
}
export default Topo;