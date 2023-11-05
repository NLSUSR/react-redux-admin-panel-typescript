import { createSlice } from "@reduxjs/toolkit";
import * as Types from "../../../types";

type TSemicomponentSlice = {
  semidrink: Types.TDrink;
  semifood: Types.TFood;
  semiflower: Types.TFlower;
  semiorder: Types.TOrder;
  semireserve: Types.TReserve;
  semitable: Types.TTable;
  seminutrients: Types.TNutrients;
  semisign: Types.TCredentials;
};

const initialState: Partial<TSemicomponentSlice> = {
  semidrink: undefined,
  semifood: undefined,
  semiflower: undefined,
  semiorder: undefined,
  semireserve: undefined,
  semitable: undefined,
  seminutrients: undefined,
  semisign: undefined,
};

export const semicomponentSlice = createSlice({
  name: "semicomponent",
  initialState,
  reducers: {
    setDrink: (state, action) => {
      state.semidrink = action.payload;
    },
    setFood: (state, action) => {
      state.semifood = action.payload;
    },
    setFlower: (state, action) => {
      state.semiflower = action.payload;
    },
    setOrder: (state, action) => {
      state.semiorder = action.payload;
    },
    setReserve: (state, action) => {
      state.semireserve = action.payload;
    },
    setTable: (state, action) => {
      state.semitable = action.payload;
    },
    setNutrients: (state, action) => {
      state.seminutrients = action.payload;
    },
    setSign: (state, action) => {
      state.semisign = action.payload;
    },
  },
});
