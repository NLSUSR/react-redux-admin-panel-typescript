import { createSlice } from "@reduxjs/toolkit";
import { TMenu } from "../../../types";

const initialState: Partial<TMenu> = {
  menuName: "",
  drink: [],
  food: [],
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenuName: (state, action) => {
      state.menuName = action.payload;
    },
    addDrink: (state, action) => {
      state.drink!.push(action.payload);
    },
    addFood: (state, action) => {
      state.food!.push(action.payload);
    },
  },
});
