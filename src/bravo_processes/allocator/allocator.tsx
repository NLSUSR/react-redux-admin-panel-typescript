import * as RRD from "react-router-dom";
import { Food } from "../../foxtrot_entities/food/food";
import { Drink } from "../../foxtrot_entities/drink/drink";
import { Flower } from "../../foxtrot_entities/flower/flower";
import { Flora } from "../../foxtrot_entities/flora/flora";
import { Order } from "../../foxtrot_entities/order/order";
import { Reserve } from "../../foxtrot_entities/reserve/reserve";
import { Table } from "../../foxtrot_entities/table/table";
import { Menu } from "../../foxtrot_entities/menu/menu";

export const Allocator = () => {
  return (
    <RRD.Routes>
      <RRD.Route path="*" element={<></>} />
      <RRD.Route path="/" element={<></>} />
      <RRD.Route path="/food" element={<Food />} />
      <RRD.Route path="/drink" element={<Drink />} />
      <RRD.Route path="/menu" element={<Menu />} />
      <RRD.Route path="/flower" element={<Flower />} />
      <RRD.Route path="/flora" element={<Flora />} />
      <RRD.Route path="/order" element={<Order />} />
      <RRD.Route path="/reserve" element={<Reserve />} />
      <RRD.Route path="/table" element={<Table />} />
    </RRD.Routes>
  );
};
