import Axios from "axios";
import { CAR_ADD_ITEM } from "../constants/carConstants";

export const addToCar = (productId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/products/${productId}`);
  dispatch({
    type: CAR_ADD_ITEM,
    payload: {
      name: data.name,
      image: data.image,
      price: data.prince,
      countInStock: data.countInStock,
      product: data._id,
      qty,
    },
  });
};
