import Perfil from "./perfil";
function CartaoLaboratorio(props) {
  return (
    <div className="cartao">
      <Perfil foto={props.foto} nome={props.nome} />
      <h3>{props.nome}</h3>
      <p>Area {props.area}</p>
      <p>{props.localizacao}</p>
      <p>{props.quantidade}</p>
    </div>
  );
}

export default CartaoLaboratorio;