import Axios from "axios";
import {
  CAR_ADD_ITEM,
  CAR_REMOVE_ITEM,
  CAR_SAVE_PAYMENT_METHOD,
  CAR_SAVE_SHOPPING_ADDRESS,
} from "../constants/carConstants";

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

export const removeFromCar = (productId) => (dispatch, getState) => {
  dispatch({ type: CAR_REMOVE_ITEM, payload: productId });
  localStorage.setItem("carItems", JSON.stringify(getState().carItems));
};

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CAR_SAVE_SHOPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({type: CAR_SAVE_PAYMENT_METHOD, payload: data})
}