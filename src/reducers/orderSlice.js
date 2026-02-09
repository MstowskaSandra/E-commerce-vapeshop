import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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
  status: "idle",
  error: null,
};

export const sendOrder = createAsyncThunk(
  "order/sendOrder",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { order } = getState();
      const payload = {
        data: {
          orderNumber: order.orderNumber,
          customerName: `${order.formData.name} ${order.formData.lastname}`,
          email: order.formData.email,
          phone: order.formData.phone,
          shop: order.formData.shop,
          items: order.cartItems.map((item) => ({
            title: item.Title || "",
            model: item.Model || "",
            quantity: Number(item.quantity),
            price: Number(item.Price),
          })),
          totalPrice: String(order.totalAmount),
          orderDate: new Date().toISOString(),
          OrderStatus: "new",
        },
      };
      console.log("PAYLOAD", JSON.stringify(payload, null, 2));

      const response = await fetch("http://localhost:1337/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const err = await response.json();
        console.error("Strapi error:", err);
        throw new Error(err.error?.message || "Błąd wysyłki zamówienia");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

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
    resetForm: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendOrder.pending, (state) => {
        state.status = "loading";
        state.error = "";
      })
      .addCase(sendOrder.fulfilled, (state) => {
        console.log("SEND ORDER SUCCESS");
        state.status = "success";
        state.step = "sent";
      })
      .addCase(sendOrder.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
      });
  },
});

export const {
  setCartForOrder,
  updateFormField,
  goToSummary,
  setErrors,
  clearErrors,
  resetForm,
} = orderSlice.actions;

export default orderSlice.reducer;
