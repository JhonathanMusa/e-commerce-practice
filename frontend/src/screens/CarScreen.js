import React from "react";

export default function CarScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  return (
    <div>
      <h1>Car Screen</h1>
      <p>
        ADD TO CAR : productID {productId} Qty: {qty}
      </p>
    </div>
  );
}
