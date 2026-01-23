import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: "form",
  orderNumber: "",
  formData: {
    name: "",
    lastname: "",
    email: "",
    phone: "",
    shop: "",
    contact: false,
    rules: false,
  },
  cartItems: [],
  totalAmount: 0,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setCartForOrder: (state, action) => {
      const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, "");
      const seq = Date.now().toString().slice(-3);
      state.orderNumber = `${dateStr}-${seq}`;
      state.cartItems = action.payload.items;
      state.totalAmount = action.payload.total;
      state.step = "form";
    },
    updateFormField: (state, action) => {
      state.formData[action.payload.field] = action.payload.value;
    },
    goToSummary: (state) => {
      state.step = "summary";
    },
    sendOrder: (state) => {
      state.step = "sent";
    },
    resetForm: () => initialState,
  },
});

export const { 
  setCartForOrder,
  updateFormField,
  goToSummary,
  sendOrder,
  resetForm 
} = orderSlice.actions;

export default orderSlice.reducer;