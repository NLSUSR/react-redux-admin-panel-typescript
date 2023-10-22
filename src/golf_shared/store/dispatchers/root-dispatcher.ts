import axios, { AxiosResponse } from "axios";
import { AppDispatch, rootAction } from "..";
import * as Types from "../../../types";

const { dataActions } = rootAction();

const endpoints = {
  resource: "http://brontosaur.ru/api",
  food: "/food",
  drink: "/drink",
  menu: "/menu",
  flower: "/flower",
  order: "/order",
  reserve: "/reserve",
  table: "/table",
};

const create = async (endpoint: string, data: Types.TTypes) => {
  return await axios.post(`${endpoints.resource + endpoint}`, data);
};

const read = async (endpoint: string) => {
  return await axios.get(`${endpoints.resource + endpoint}`);
};

const update = async (endpoint: string, data: Types.TTypes) => {
  return await axios.put(`${endpoints.resource + endpoint}`, data);
};

const _delete = async (endpoint: string, id: string) => {
  return await axios.delete(`${endpoints.resource + endpoint + "/" + id}`);
};

export const rootDispatcher = () => ({
  createFood: (food: Types.TFood) => {
    return () => {
      create(endpoints.food, food);
    };
  },

  readFood: () => {
    return (dispatch: AppDispatch) => {
      read(endpoints.food)
        .then((r: AxiosResponse<Types.TFood>) => {
          dispatch(dataActions.food({ resolved: r.data }));
        })
        .catch((e) => dispatch(dataActions.food({ rejected: e })));
    };
  },

  updateFood: (food: Types.TFood) => {
    return () => {
      update(endpoints.food, food);
    };
  },

  deleteFood: (id: string) => {
    return () => {
      _delete(endpoints.food, id);
    };
  },

  createDrink: (drink: Types.TDrink) => {
    return () => {
      create(endpoints.drink, drink);
    };
  },

  readDrink: () => {
    return (dispatch: AppDispatch) => {
      read(endpoints.drink)
        .then((r: AxiosResponse<Types.TDrink>) => {
          dispatch(dataActions.drink({ resolved: r.data }));
        })
        .catch((e) => dispatch(dataActions.drink({ rejected: e })));
    };
  },

  updateDrink: (drink: Types.TDrink) => {
    return () => {
      update(endpoints.drink, drink);
    };
  },

  deleteDrink: (id: string) => {
    return () => {
      _delete(endpoints.drink, id);
    };
  },

  createMenu: (menu: Types.TMenu) => {
    return () => {
      create(endpoints.menu, menu);
    };
  },

  readMenu: () => {
    return (dispatch: AppDispatch) => {
      read(endpoints.menu)
        .then((r: AxiosResponse<Types.TMenu>) => {
          dispatch(dataActions.menu({ resolved: r.data }));
        })
        .catch((e) => dispatch(dataActions.menu({ rejected: e })));
    };
  },

  updateMenu: (menu: Types.TMenu) => {
    return () => {
      update(endpoints.menu, menu);
    };
  },

  deleteMenu: (id: string) => {
    return () => {
      _delete(endpoints.menu, id);
    };
  },

  createFlower: (flower: Types.TFlower) => {
    return () => {
      create(endpoints.flower, flower);
    };
  },

  readFlower: () => {
    return (dispatch: AppDispatch) => {
      read(endpoints.flower)
        .then((r: AxiosResponse<Types.TFlower>) => {
          dispatch(dataActions.flower({ resolved: r.data }));
        })
        .catch((e) => dispatch(dataActions.flower({ rejected: e })));
    };
  },

  updateFlower: (flower: Types.TFlower) => {
    return () => {
      update(endpoints.flower, flower);
    };
  },

  deleteFlower: (id: string) => {
    return () => {
      _delete(endpoints.flower, id);
    };
  },

  createOrder: (order: Types.TOrder) => {
    return () => {
      create(endpoints.order, order);
    };
  },

  readOrder: () => {
    return (dispatch: AppDispatch) => {
      read(endpoints.order)
        .then((r: AxiosResponse<Types.TOrder>) => {
          dispatch(dataActions.order({ resolved: r.data }));
        })
        .catch((e) => dispatch(dataActions.order({ rejected: e })));
    };
  },

  updateOrder: (order: Types.TOrder) => {
    return () => {
      update(endpoints.order, order);
    };
  },

  deleteOrder: (id: string) => {
    return () => {
      _delete(endpoints.order, id);
    };
  },

  createReserve: (reserve: Types.TReserve) => {
    return () => {
      create(endpoints.reserve, reserve);
    };
  },

  readReserve: () => {
    return (dispatch: AppDispatch) => {
      read(endpoints.reserve)
        .then((r: AxiosResponse<Types.TReserve>) => {
          dispatch(dataActions.reserve({ resolved: r.data }));
        })
        .catch((e) => dispatch(dataActions.reserve({ rejected: e })));
    };
  },

  updateReserve: (reserve: Types.TReserve) => {
    return () => {
      update(endpoints.reserve, reserve);
    };
  },

  deleteReserve: (id: string) => {
    return () => {
      _delete(endpoints.reserve, id);
    };
  },

  createTable: (table: Types.TTable) => {
    return () => {
      create(endpoints.table, table);
    };
  },

  readTable: () => {
    return (dispatch: AppDispatch) => {
      read(endpoints.table)
        .then((r: AxiosResponse<Types.TTable>) => {
          dispatch(dataActions.table({ resolved: r.data }));
        })
        .catch((e) => dispatch(dataActions.table({ rejected: e })));
    };
  },

  updateTable: (table: Types.TTable) => {
    return () => {
      update(endpoints.table, table);
    };
  },

  deleteTable: (id: string) => {
    return () => {
      _delete(endpoints.table, id);
    };
  },
});
