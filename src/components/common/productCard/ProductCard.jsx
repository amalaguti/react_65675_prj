import "./productCard.css";

export const ProductCard = (props) => {

  return (
    <div className="product-card">
      <h3>
        <b>{props.titulo}</b>
      </h3>
      <h3>
        <b>{props.precio}</b>
      </h3>
      <h3>
        <b>{props.description}</b>{" "}
      </h3>
    </div>
  );
};
