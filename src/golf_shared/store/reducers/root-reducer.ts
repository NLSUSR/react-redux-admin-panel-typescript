import { combineReducers } from "redux";
import { dataSlice } from "../slices/data-slice";
import { menuSlice } from "../slices/menu-slice";

export const rootReducer = combineReducers({
  dataReducer: dataSlice.reducer,
  menuReducer: menuSlice.reducer,
});
