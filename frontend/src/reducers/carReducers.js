import {
  CAR_ADD_ITEM,
  CAR_REMOVE_ITEM,
  CAR_SAVE_PAYMENT_METHOD,
  CAR_SAVE_SHOPPING_ADDRESS,
} from "../constants/carConstants";

export const carReducer = (state = { carItems: [] }, action) => {
  switch (action.type) {
    case CAR_ADD_ITEM:
      const item = action.payload;
      const existIem = state.carItems.find((x) => x.product === item.product);
      if (existIem) {
        return {
          ...state,
          carItems: state.carItems.map((x) =>
            x.product === existIem.product ? item : x
          ),
        };
      } else {
        return { ...state, carItems: [...state.carItems, item] };
      }

    case CAR_REMOVE_ITEM:
      return {
        ...state,
        carItems: state.carItems.filter((x) => x.product !== action.payload),
      };

    case CAR_SAVE_SHOPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };

    case CAR_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };

    default:
      return state;
  }
};
