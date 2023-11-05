import * as RRD from "react-router-dom";
import { Drink } from "../../charlie_pages/drink/drink";
import { Flower } from "../../charlie_pages/flower/flower";
import { Food } from "../../charlie_pages/food/food";
import { Menu } from "../../charlie_pages/menu/menu";
import { Order } from "../../charlie_pages/order/order";
import { Reserve } from "../../charlie_pages/reserve/reserve";
import { Table } from "../../charlie_pages/table/table";
import { Signup } from "../../charlie_pages/signup/signup";
import { Signin } from "../../charlie_pages/signin/signin";

export const Allocator = () => {
  return (
    <RRD.Routes>
      <RRD.Route path="*" element={<></>} />
      <RRD.Route path="/" element={<></>} />
      <RRD.Route path="/signup" element={<Signup />} />
      <RRD.Route path="/signin" element={<Signin />} />
      <RRD.Route path="/food" element={<Food />} />
      <RRD.Route path="/drink" element={<Drink />} />
      <RRD.Route path="/menu" element={<Menu />} />
      <RRD.Route path="/flower" element={<Flower />} />
      <RRD.Route path="/order" element={<Order />} />
      <RRD.Route path="/reserve" element={<Reserve />} />
      <RRD.Route path="/table" element={<Table />} />
    </RRD.Routes>
  );
};
