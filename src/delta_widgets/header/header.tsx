import { Button, ButtonGroup, Container } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import sass from "./header.module.sass";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const array = [
    { page: "Заказ", link: "/order" },
    { page: "Столик", link: "/table" },
    { page: "Резерв", link: "/reserve" },
    { page: "Цветы", link: "/flower" },
    { page: "Питье", link: "/drink" },
    { page: "Еда", link: "/food" },
    { page: "Меню", link: "/menu" },
  ];

  const link = (link: string) => {
    navigate(link);
  };

  return (
    <header>
      <Container fluid>
        <ButtonGroup className={sass.list}>
          {array.map((e) => {
            return (
              <Button
                key={v4()}
                variant={location.pathname === e.link ? "primary" : "secondary"}
                onClick={() => link(e.link)}
                children={e.page}
              />
            );
          })}
        </ButtonGroup>
      </Container>
    </header>
  );
};
