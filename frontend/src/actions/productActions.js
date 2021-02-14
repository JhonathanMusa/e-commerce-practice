import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_REQUEST,
} from "../constants/productConstants";
import Axios from "axios";

export const listProducts = () => async (distpatch) => {
  distpatch({
    type: PRODUCT_LIST_REQUEST,
  });

  try {
    const { data } = await Axios.get("/api/products");
    distpatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    distpatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
};
