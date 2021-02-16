import Axios from "axios";
import { CAR_ADD_ITEM } from "../constants/carConstants";

export const addToCar = (productId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/products/${productId}`);
  dispatch({
    type: CAR_ADD_ITEM,
    payload: {
      brand: data.brand,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      product: data._id,
      qty,
    },
  });
  // to add products to localstorage
  localStorage.setItem("carItems", JSON.stringify(getState().car.carItems));
};
