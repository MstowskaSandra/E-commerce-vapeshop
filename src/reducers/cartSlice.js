import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addToCart: (state, action) => {
            const productData = action.payload;
            const existingItem = state.items.find(item => item.id === productData.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({
                    id: productData.id,
                    Title: productData.Title,
                    Price: parseFloat(productData.Price),
                    Image: productData.Image || [],
                    quantity: 1
                });
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.items.find((item) => item.id === id);
            
            if (item) {
                item.quantity = quantity;
                if (quantity <= 0) {
                    state.items = state.items.filter(i => i.id !== id);
                }
            }
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;