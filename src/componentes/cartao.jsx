import Perfil from "./perfil";
function Cartao(props) {
  return (
    <div className="cartao">
      <Perfil foto={props.foto} nome={props.nome} />
      <h3>{props.nome}</h3>
      <p>Idade: {props.idade}</p>
      <p>{props.email}</p>
      <p>{props.telefone}</p>
    </div>
  );
}

export default Cartao;