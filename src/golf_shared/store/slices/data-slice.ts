import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menu: { resolved: null, rejected: null },
  food: { resolved: null, rejected: null },
  drink: { resolved: null, rejected: null },
  flora: { resolved: null, rejected: null },
  flower: { resolved: null, rejected: null },
  order: { resolved: null, rejected: null },
  reserve: { resolved: null, rejected: null },
  table: { resolved: null, rejected: null },
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    food: (state, action) => {
      state.food.resolved = action.payload.resolved;
      state.food.rejected = action.payload.rejected;
    },
    drink: (state, action) => {
      state.drink.resolved = action.payload.resolved;
      state.drink.rejected = action.payload.rejected;
    },
    menu: (state, action) => {
      state.menu.resolved = action.payload.resolved;
      state.menu.rejected = action.payload.rejected;
    },

    flower: (state, action) => {
      state.flower.resolved = action.payload.resolved;
      state.flower.rejected = action.payload.rejected;
    },
    flora: (state, action) => {
      state.flora.resolved = action.payload.resolved;
      state.flora.rejected = action.payload.rejected;
    },

    order: (state, action) => {
      state.order.resolved = action.payload.resolved;
      state.order.rejected = action.payload.rejected;
    },
    reserve: (state, action) => {
      state.reserve.resolved = action.payload.resolved;
      state.reserve.rejected = action.payload.rejected;
    },
    table: (state, action) => {
      state.table.resolved = action.payload.resolved;
      state.table.rejected = action.payload.rejected;
    },
  },
});
