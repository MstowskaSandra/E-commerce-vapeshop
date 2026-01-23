import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    step: 'form',
    formData: {
        name: '',
        lastname: '',
        email: '',
        phone: '',
        shop: '',
        contact: false,
        rules: false,
    },
    cartItems: [],
    totalAmount: 0
    
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setCartForOrder: (state, action) => {
        console.log('ORDER SLICE SAVING:', action.payload); 
        state.cartItems = action.payload.items;
        state.totalAmount = action.payload.total;
        state.step = 'form';
        },
        updateFormField: (state, action) => {
            state.formData[action.payload.field] = action.payload.value;
        },
        goToSummary: (state) => { state.step = 'summary'; },
        sendOrder: (state) => { state.step = 'sent'; },
        resetForm: () => initialState
    }
});

export const { 
  setCartForOrder,
  updateFormField,
  goToSummary,
  sendOrder,
  resetForm 
} = orderSlice.actions;

export default orderSlice.reducer;