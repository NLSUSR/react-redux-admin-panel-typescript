import { createSlice } from "@reduxjs/toolkit";
import { IMenu } from "@types";

const initialState: Partial<IMenu> = {
  menuName: "",
  drinks: {
    strongDrinks: [],
    tea: [],
    coffee: [],
    beer: [],
  },
  hotDishes: {
    barbecue: [],
    soup: [],
  },
  snacks: {
    hot: [],
    other: [],
  },
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenuName: (state, action) => {
      state.menuName = action.payload;
    },
    addStrongDrink: (state, action) => {
      state.drinks!.strongDrinks.push(action.payload);
    },
    addTea: (state, action) => {
      state.drinks!.tea.push(action.payload);
    },
    addCoffee: (state, action) => {
      state.drinks!.coffee.push(action.payload);
    },
    addBeer: (state, action) => {
      state.drinks!.beer.push(action.payload);
    },
    addBarbecue: (state, action) => {
      state.hotDishes!.barbecue.push(action.payload);
    },
    addSoup: (state, action) => {
      state.hotDishes!.soup.push(action.payload);
    },
    addHotSnack: (state, action) => {
      state.snacks!.hot.push(action.payload);
    },
    addOtherSnack: (state, action) => {
      state.snacks!.other.push(action.payload);
    },
  },
});
