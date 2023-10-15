import { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Allocator } from "../../bravo_processes/allocator/allocator";
import { useAppDispatch } from "../../golf_shared/store";
import { rootDispatcher } from "../../golf_shared/store/dispatchers/root-dispatcher";
import css from "./app.module.sass";

export function App() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const link = (link: string) => {
    navigate(link);
  };

  const {
    getDrink,
    getFlora,
    getFlower,
    getFood,
    getMenu,
    getOrder,
    getReserve,
    getTable,
  } = rootDispatcher();

  useEffect(() => {
    [
      getDrink,
      getFlora,
      getFlower,
      getFood,
      getMenu,
      getOrder,
      getReserve,
      getTable,
    ].forEach((e) => dispatch(e()));
    // eslint-disable-next-line
  }, []);

  const array = [
    { schema: "Заказ", link: "/order" },
    { schema: "Столик", link: "/table" },
    { schema: "Резерв", link: "/reserve" },
    { schema: "Флора", link: "/flora" },
    { schema: "Цветы", link: "/flower" },
    { schema: "Питье", link: "/drink" },
    { schema: "Еда", link: "/food" },
    { schema: "Меню", link: "/menu" },
  ];

  return (
    <section>
      <Container fluid>
        <ul className={css.list}>
          {array.map((e, i) => {
            return (
              <li key={i}>
                <Button onClick={() => link(e.link)}>{e.schema}</Button>
              </li>
            );
          })}
        </ul>
      </Container>
      <Allocator />
    </section>
  );
}
