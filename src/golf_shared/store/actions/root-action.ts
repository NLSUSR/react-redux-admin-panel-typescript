import { dataSlice } from "../slices/data-slice";
import { menuSlice } from "../slices/menu-slice";

export const rootAction = () => ({
  dataActions: dataSlice.actions,
  menuActions: menuSlice.actions,
});
