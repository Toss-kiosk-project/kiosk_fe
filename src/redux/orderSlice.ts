import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type OrderItem = {
  name: string;
  price: number;
  quantity: number;
};

interface OrderState {
  list: OrderItem[];
}

const initialState: OrderState = {
  list: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<OrderItem>) => {
      state.list.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.list.splice(action.payload, 1);
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      state.list[action.payload].quantity += 1;
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      if (state.list[action.payload].quantity > 1) {
        state.list[action.payload].quantity -= 1;
      }
    },
    clearOrder: (state) => {
      state.list = [];
    },
  },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity, clearOrder } = orderSlice.actions;
export default orderSlice.reducer;
