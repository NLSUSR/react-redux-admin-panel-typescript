import { Document, Schema } from "mongoose";
import { Request, Response } from "express";

export type TDrink = Document & {
  name: string;
  availability: boolean;
  partialVolume: number;
  fullVolume: number;
  manufacturer: string;
  description: string;
  partialPrice: number;
  fullPrice: number;
  photo: string;
};

export type TFood = Document & {
  name: string;
  availability: boolean;
  weight: number;
  manufacturer: string;
  description: string;
  price: number;
  photo: string;
};

export type TMenu = Document & {
  menuName: string;
  drinks: {
    strongDrinks: TDrink[];
    tea: TDrink[];
    coffee: TDrink[];
    beer: TDrink[];
  };
  hotDishes: {
    barbecue: TFood[];
    soup: TFood[];
  };
  snacks: {
    hot: TFood[];
    other: TFood[];
  };
};

export type TFlower = Document & {
  name: string;
  availability: boolean;
  quantity: number;
  manufacturer: string;
  description: string;
  price: number;
  photo: string;
};

export type TFlora = Document & {
  bouquets: TFlower[];
  single: TFlower[];
};

export type TOrder = Document & {
  name: string;
  establishment: string;
  tableNumber: number;
  user: string;
};

export type TReserve = Document & {
  establishment: string;
  tableNumber: number;
  user: string;
  startTime: {
    hours: number;
    minutes: number;
  };
  endTime: {
    hours: number;
    minutes: number;
  };
  order: TOrder[];
  flora: TFlora[];
};

export type TTable = Document & {
  establishment: string;
  tableNumber: number;
  user: string;
  reserve: TReserve[];
  places: {
    chairs: number;
    sofas: number;
  };
  photo: string;
};

export type TSchemas =
  | Schema<TDrink>
  | Schema<TFlora>
  | Schema<TFlower>
  | Schema<TFood>
  | Schema<TMenu>
  | Schema<TOrder>
  | Schema<TReserve>
  | Schema<TTable>;

export type TData = TDrink &
  TFlora &
  TFlower &
  TFood &
  TMenu &
  TOrder &
  TReserve &
  TTable;

export type TGenerator = {
  endpoint: string;
  collection: string;
  schema: TSchemas;
};

export type TController = {
  create: (req: Request, res: Response) => void;
  readAll: (res: Response) => void;
  readOne: (req: Request, res: Response) => void;
  update: (req: Request, res: Response) => void;
  delete: (req: Request, res: Response) => void;
};

export type TService = {
  create: (data: TData) => Promise<TData>;
  readAll: () => Promise<TData[]>;
  readOne: (id: string) => Promise<TData | null>;
  update: (data: TData) => Promise<TData | null>;
  delete: (id: string) => Promise<TData | null>;
};

export type TModel = {
  create: (data: TData) => Promise<TData>;
  find: () => Promise<TData[]>;
  findById: (id: string) => Promise<TData | null>;
  findByIdAndUpdate: (
    id: string,
    data: TData,
    options: { new: boolean }
  ) => Promise<TData | null>;
  findByIdAndDelete: (id: string) => Promise<TData | null>;
};
