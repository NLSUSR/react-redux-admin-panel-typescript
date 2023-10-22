import { createSlice } from "@reduxjs/toolkit";
import * as Types from "../../../types";

type TDataSlice = {
  menu: {
    resolved: undefined | Types.TMenu[];
    rejected: undefined | string;
  };
  food: {
    resolved: undefined | Types.TFood[];
    rejected: undefined | string;
  };
  drink: {
    resolved: undefined | Types.TDrink[];
    rejected: undefined | string;
  };
  flower: {
    resolved: undefined | Types.TFlower[];
    rejected: undefined | string;
  };
  order: {
    resolved: undefined | Types.TOrder[];
    rejected: undefined | string;
  };
  reserve: {
    resolved: undefined | Types.TReserve[];
    rejected: undefined | string;
  };
  table: {
    resolved: undefined | Types.TTable[];
    rejected: undefined | string;
  };
};

const initialState: TDataSlice = {
  menu: {
    resolved: undefined,
    rejected: undefined,
  },
  food: {
    resolved: undefined,
    rejected: undefined,
  },
  drink: {
    resolved: undefined,
    rejected: undefined,
  },
  flower: {
    resolved: undefined,
    rejected: undefined,
  },
  order: {
    resolved: undefined,
    rejected: undefined,
  },
  reserve: {
    resolved: undefined,
    rejected: undefined,
  },
  table: {
    resolved: undefined,
    rejected: undefined,
  },
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    food: (state, action) => {
      state.food.resolved = action.payload.resolved.data;
      state.food.rejected = action.payload.rejected;
    },
    drink: (state, action) => {
      state.drink.resolved = action.payload.resolved.data;
      state.drink.rejected = action.payload.rejected;
    },
    menu: (state, action) => {
      state.menu.resolved = action.payload.resolved.data;
      state.menu.rejected = action.payload.rejected;
    },
    flower: (state, action) => {
      state.flower.resolved = action.payload.resolved.data;
      state.flower.rejected = action.payload.rejected;
    },
    order: (state, action) => {
      state.order.resolved = action.payload.resolved.data;
      state.order.rejected = action.payload.rejected;
    },
    reserve: (state, action) => {
      state.reserve.resolved = action.payload.resolved.data;
      state.reserve.rejected = action.payload.rejected;
    },
    table: (state, action) => {
      state.table.resolved = action.payload.resolved.data;
      state.table.rejected = action.payload.rejected;
    },
  },
});
