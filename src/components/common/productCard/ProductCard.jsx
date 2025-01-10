export const ProductCard = (props) => {
  console.log(props);

  return (
    <div style={{ border: "2px solid black" }}>
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
