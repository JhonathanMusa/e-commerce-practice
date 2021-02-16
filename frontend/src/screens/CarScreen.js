import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCar } from "../actions/carActions";

export default function CarScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCar(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return (
    <div>
      <h1>Car Screen</h1>
      <p>
        ADD TO CAR : productID {productId} Qty: {qty}
      </p>
    </div>
  );
}
