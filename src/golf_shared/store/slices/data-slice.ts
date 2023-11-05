import { createSlice } from "@reduxjs/toolkit";
import * as Types from "../../../types";

type TDataSlice = {
  menu: {
    resolved: Types.TMenu[];
    rejected: string;
  };
  food: {
    resolved: Types.TFood[];
    rejected: string;
  };
  drink: {
    resolved: Types.TDrink[];
    rejected: string;
  };
  flower: {
    resolved: Types.TFlower[];
    rejected: string;
  };
  order: {
    resolved: Types.TOrder[];
    rejected: string;
  };
  reserve: {
    resolved: Types.TReserve[];
    rejected: string;
  };
  table: {
    resolved: Types.TTable[];
    rejected: string;
  };
};

const initialState: Partial<TDataSlice> = {
  menu: {
    resolved: [],
    rejected: "",
  },
  food: {
    resolved: [],
    rejected: "",
  },
  drink: {
    resolved: [],
    rejected: "",
  },
  flower: {
    resolved: [],
    rejected: "",
  },
  order: {
    resolved: [],
    rejected: "",
  },
  reserve: {
    resolved: [],
    rejected: "",
  },
  table: {
    resolved: [],
    rejected: "",
  },
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    food: (state, action) => {
      state.food!.resolved = action.payload.resolved;
      state.food!.rejected = action.payload.rejected;
    },
    drink: (state, action) => {
      state.drink!.resolved = action.payload.resolved;
      state.drink!.rejected = action.payload.rejected;
    },
    menu: (state, action) => {
      state.menu!.resolved = action.payload.resolved;
      state.menu!.rejected = action.payload.rejected;
    },
    flower: (state, action) => {
      state.flower!.resolved = action.payload.resolved;
      state.flower!.rejected = action.payload.rejected;
    },
    order: (state, action) => {
      state.order!.resolved = action.payload.resolved;
      state.order!.rejected = action.payload.rejected;
    },
    reserve: (state, action) => {
      state.reserve!.resolved = action.payload.resolved;
      state.reserve!.rejected = action.payload.rejected;
    },
    table: (state, action) => {
      state.table!.resolved = action.payload.resolved;
      state.table!.rejected = action.payload.rejected;
    },
  },
});
