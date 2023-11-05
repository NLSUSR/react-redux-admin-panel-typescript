import { configureStore } from "@reduxjs/toolkit";
import * as RR from "react-redux";
import { combineReducers } from "redux";
import { authSlice } from "./slices/auth-slice";
import { dataSlice } from "./slices/data-slice";
import { semicomponentSlice } from "./slices/semicomponent-slice";

export const rootAction = () => ({
  dataActions: dataSlice.actions,
  semicomponentActions: semicomponentSlice.actions,
  authActions: authSlice.actions,
});

export const rootReducer = combineReducers({
  dataReducer: dataSlice.reducer,
  semicomponentReducer: semicomponentSlice.reducer,
  authReducer: authSlice.reducer,
});

export const rootStore = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type RootState = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;

export const useDispatch_: () => AppDispatch = RR.useDispatch;
export const useSelector_: RR.TypedUseSelectorHook<RootState> = RR.useSelector;
