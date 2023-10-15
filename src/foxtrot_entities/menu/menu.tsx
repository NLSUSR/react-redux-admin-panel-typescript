import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Drink } from "../drink/drink";
import css from "../entities.module.sass";
import { Food } from "../food/food";

type TDrink = ReturnType<typeof Drink>;
type TFood = ReturnType<typeof Food>;

export const Menu = () => {
  const [drinks, setDrinks] = useState<TDrink[]>([]);
  const [foods, setFoods] = useState<TFood[]>([]);

  const addDrink = (): void => {
    const component = <Drink />;
    setDrinks((prevState: TDrink[]) => [...prevState, component]);
  };

  const addFood = (): void => {
    const component = <Food />;
    setFoods((prevState: TFood[]) => [...prevState, component]);
  };

  return (
    <Container fluid>
      <Form>
        <Form.Group className={css.group}>
          <Form.Label>Напитки</Form.Label>
          <Button children={"Добавить напиток"} onClick={addDrink} />
          <ul style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {drinks.map((e: TDrink, i) => {
              return <li key={i}>{e}</li>;
            })}
          </ul>
          <Form.Label>Еда</Form.Label>
          <Button children={"Добавить еды"} onClick={addFood} />
          <ul style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {foods.map((e: TFood, i) => {
              return <li key={i}>{e}</li>;
            })}
          </ul>
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          children={"Отправить"}
          onClick={(e) => {
            e.preventDefault();
          }}
        />
      </Form>
    </Container>
  );
};
