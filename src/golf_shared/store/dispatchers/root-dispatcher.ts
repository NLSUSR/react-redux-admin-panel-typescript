import { rootAction } from "../actions/root-action";
import { AppDispatch } from "..";
import axios, { AxiosResponse } from "axios";
import * as Types from "@types";

const { dataActions } = rootAction();
const resource = "http://brontosaur.ru/api";

const get = async (endpoint: string) => {
  return await axios.get(`${resource + endpoint}`).then((r) => {
    return r.data;
  });
};

export const rootDispatcher = () => ({
  getFood: () => {
    return (dispatch: AppDispatch) => {
      get("/food")
        .then((r: AxiosResponse<Types.IFood>) => {
          dispatch(dataActions.food({ resolved: r }));
        })
        .catch((e: string) => dispatch(dataActions.food({ rejected: e })));
    };
  },
  getDrink: () => {
    return (dispatch: AppDispatch) => {
      get("/drink")
        .then((r: AxiosResponse<Types.IDrink>) => {
          dispatch(dataActions.drink({ resolved: r }));
        })
        .catch((e: string) => dispatch(dataActions.drink({ rejected: e })));
    };
  },
  getMenu: () => {
    return (dispatch: AppDispatch) => {
      get("/menu")
        .then((r: AxiosResponse<Types.IMenu>) => {
          dispatch(dataActions.menu({ resolved: r }));
        })
        .catch((e: string) => dispatch(dataActions.menu({ rejected: e })));
    };
  },

  getFlower: () => {
    return (dispatch: AppDispatch) => {
      get("/flower")
        .then((r: AxiosResponse<Types.IFlower>) => {
          dispatch(dataActions.flower({ resolved: r }));
        })
        .catch((e: string) => dispatch(dataActions.flower({ rejected: e })));
    };
  },
  getFlora: () => {
    return (dispatch: AppDispatch) => {
      get("/flora")
        .then((r: AxiosResponse<Types.IFlora>) => {
          dispatch(dataActions.flora({ resolved: r }));
        })
        .catch((e: string) => dispatch(dataActions.flora({ rejected: e })));
    };
  },

  getOrder: () => {
    return (dispatch: AppDispatch) => {
      get("/order")
        .then((r: AxiosResponse<Types.IOrder>) => {
          dispatch(dataActions.order({ resolved: r }));
        })
        .catch((e: string) => dispatch(dataActions.order({ rejected: e })));
    };
  },
  getReserve: () => {
    return (dispatch: AppDispatch) => {
      get("/reserve")
        .then((r: AxiosResponse<Types.IReserve>) => {
          dispatch(dataActions.reserve({ resolved: r }));
        })
        .catch((e: string) => dispatch(dataActions.reserve({ rejected: e })));
    };
  },
  getTable: () => {
    return (dispatch: AppDispatch) => {
      get("/table")
        .then((r: AxiosResponse<Types.ITable>) => {
          dispatch(dataActions.table({ resolved: r }));
        })
        .catch((e: string) => dispatch(dataActions.table({ rejected: e })));
    };
  },
});
