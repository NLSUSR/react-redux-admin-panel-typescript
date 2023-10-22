import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Cards } from "../../echo_features/cards/cards";
import { Semidrink } from "../../foxtrot_entities/semidrink/semidrink";
import { Semifood } from "../../foxtrot_entities/semifood/semifood";
import { useAppDispatch, useAppSelector } from "../../golf_shared/store";
import { rootDispatcher } from "../../golf_shared/store/dispatchers/root-dispatcher";
import { TDrink, TFood, TMenu, TPickExclude } from "../../types";
import sass from "./menu.module.sass";

export const Menu = () => {
  const dispatch = useAppDispatch();
  const { createMenu } = rootDispatcher();

  const drink = useAppSelector((s) => s.semicomponentReducer.semidrink);
  const food = useAppSelector((s) => s.semicomponentReducer.semifood);

  const [state, setState] = useState<TPickExclude<TMenu>>({
    menuName: "",
    drink: [],
    food: [],
  });

  const addDrink = () => {
    setState((prevState) => ({
      ...prevState,
      drink: [...prevState.drink, drink as TDrink],
    }));
  };

  const deleteDrink = (index: number) => {
    setState((prevState) => ({
      ...prevState,
      drink: prevState.drink.filter((_e, i) => i !== index),
    }));
  };

  const addFood = () => {
    setState((prevState) => ({
      ...prevState,
      food: [...prevState.food, food as TFood],
    }));
  };

  const deleteFood = (index: number) => {
    setState((prevState) => ({
      ...prevState,
      food: prevState.food.filter((_e, i) => i !== index),
    }));
  };

  return (
    <Container fluid>
      <Form className={sass.menu__form}>
        <Form.Control
          placeholder="Название меню"
          value={state.menuName}
          onChange={(e) =>
            setState({ ...state, menuName: String(e.target.value) })
          }
        />
        <Form.Label>Напитки</Form.Label>
        <Semidrink />
        <Button children={"Добавить напиток"} onClick={addDrink} />
        <Cards array={state.drink} remove={deleteDrink} />
        <Form.Label>Еда</Form.Label>
        <Semifood />
        <Button children={"Добавить еду"} onClick={addFood} />
        <Cards array={state.food} remove={deleteFood} />
        <Button
          variant="primary"
          type="submit"
          children={"Отправить"}
          onClick={(e) => {
            e.preventDefault();
            dispatch(createMenu(state as TMenu));
            console.log(state);
          }}
        />
      </Form>
    </Container>
  );
};
