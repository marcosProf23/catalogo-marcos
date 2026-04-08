import Perfil from "./perfil";
function CartaoProfessor(props) {
  return (
    <div className="cartao">
      <Perfil foto={props.foto} nome={props.nome} />
      <h3>{props.nome}</h3>
      <p>Area {props.area}</p>
      <p>{props.email}</p>
      <p>{props.telefone}</p>
    </div>
  );
}

export default CartaoProfessor;