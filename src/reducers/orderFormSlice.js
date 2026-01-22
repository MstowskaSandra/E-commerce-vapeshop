import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    lastname: '',
    email: '',
    phone: '',
    shop: '',
    contact: false,
    rules: false
};

const orderFormSlice = createSlice({
    name: 'orderForm',
    initialState,
    reducers: {
        updateField: (state, action) => {
            state[action.payload.field] = action.payload.value;
        },
        resetForm: () => initialState
    }
});

export const { updateField, resetForm } = orderFormSlice.actions;
export default orderFormSlice.reducer;