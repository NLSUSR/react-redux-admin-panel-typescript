import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { rootReducer } from "./reducers/root-reducer";

export const getStore = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type RootState = ReturnType<typeof getStore.getState>;
export type AppDispatch = typeof getStore.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;