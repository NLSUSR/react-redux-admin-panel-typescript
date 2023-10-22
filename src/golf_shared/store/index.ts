import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers } from "redux";
import { dataSlice } from "./slices/data-slice";
import { menuSlice } from "./slices/menu-slice";
import { semicomponentSlice } from "./slices/semicomponent-slice";

export const rootAction = () => ({
  dataActions: dataSlice.actions,
  menuActions: menuSlice.actions,
  semicomponentActions: semicomponentSlice.actions,
});

export const rootReducer = combineReducers({
  dataReducer: dataSlice.reducer,
  menuReducer: menuSlice.reducer,
  semicomponentReducer: semicomponentSlice.reducer,
});

export const getStore = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type RootState = ReturnType<typeof getStore.getState>;
export type AppDispatch = typeof getStore.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
