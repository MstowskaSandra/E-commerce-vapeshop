import { createSlice } from "@reduxjs/toolkit";
import { validateField } from "../utils/validation";

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
  errors: {},
  isValid: false,
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
    updateFormField: (state, { payload: { field, value } }) => {
      state.formData[field] = value;

      const fieldErrors = validateField(field, value);
      state.errors[field] = Object.values(fieldErrors)[0] || "";

      const allErrors = Object.values(state.errors).filter(Boolean);
      state.isValid = allErrors.length === 0;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
      const allErrors = Object.values(action.payload).filter(Boolean);
      state.isValid = allErrors.length === 0;
    },
    clearErrors: (state) => {
      state.errors = {};
      state.isValid = true;
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
  setErrors,
  clearErrors,
  sendOrder,
  resetForm,
} = orderSlice.actions;

export default orderSlice.reducer;