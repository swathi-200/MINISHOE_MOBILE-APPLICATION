import { createSlice, createSelector } from "@reduxjs/toolkit";
const initialState = {
  item: [],
  deliveryfee: 15,
  freedeliveryfrom: 200,
};
export const cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const newproduct = action.payload.product;
      const cartitem = state.item.find(
        (item) => item.product.id === newproduct.id
      );
      if (cartitem) {
        cartitem.quantity += 1;
      } else {
        state.item.push({ product: newproduct, quantity: 1 });
      }
    },
    changgequantity: (state, action) => {
      const { productId, amount } = action.payload;
      const cartitem = state.item.find((item) => item.product.id === productId);
      if (cartitem) {
        cartitem.quantity += amount;
      }
      if (cartitem.quantity <= 0) {
        state.item = state.item.filter((item) => item !== cartitem);
      }
    },
  },
});
export const selectednumberofitems = (state) => state.cart.item.length;
export const selectsubtotal = (state) =>
  state.cart.item.reduce(
    (sum, cartitem) => sum + cartitem.product.price * cartitem.quantity,
    0
  );

const cartselector = (state) => state.cart;
export const selectDelivery = createSelector(
  selectsubtotal,
  cartselector,
  (subtotal, cart) => (subtotal > cart.freedeliveryfrom ? 0 : cart.deliveryfee)
);

export const selecttotal = createSelector(
  selectsubtotal,
  selectDelivery,
  (subtotal, deleveyprice) => subtotal + deleveyprice
);
