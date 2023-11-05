import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Cards } from "../../echo_features/cards/cards";
import { useDispatch_, useSelector_ } from "../../golf_shared/store";
import { rootDispatcher } from "../../golf_shared/store/dispatchers/root-dispatcher";
import { TMenu, TPickExclude } from "../../types";
import css from "./menu.module.css";
import { v4 } from "uuid";

export const Menu = () => {
  const dispatch = useDispatch_();
  const { createMenu } = rootDispatcher();

  const drink = useSelector_((s) => s.dataReducer.drink!.resolved);
  const food = useSelector_((s) => s.dataReducer.food!.resolved);

  const [state, setState] = useState<TPickExclude<TMenu>>({
    menuName: "",
    drink: [],
    food: [],
  });

  const addDrink = (_id: string) => {
    setState((prevState) => ({
      ...prevState,
      drink: [...prevState.drink, _id],
    }));
  };

  const addFood = (_id: string) => {
    setState((prevState) => ({
      ...prevState,
      food: [...prevState.food, _id],
    }));
  };

  const deleteDrink = (_id: string) => {
    setState((prevState) => ({
      ...prevState,
      drink: prevState.drink.filter((e) => e !== _id),
    }));
  };

  const deleteFood = (_id: string) => {
    setState((prevState) => ({
      ...prevState,
      food: prevState.food.filter((e) => e !== _id),
    }));
  };

  return (
    <Container fluid>
      <Form className={css.menu__form}>
        <Form.Control
          placeholder="Название меню"
          value={state.menuName}
          onChange={(e) =>
            setState({ ...state, menuName: String(e.target.value) })
          }
        />
        <Form.Label>Напитки</Form.Label>
        <ul>
          {state.drink.map((e) => {
            return <li key={v4()}>{e}</li>;
          })}
        </ul>
        <Cards array={drink} add={addDrink} remove={deleteDrink} />
        <Form.Label>Еда</Form.Label>
        <ul>
          {state.food.map((e) => {
            return <li key={v4()}>{e}</li>;
          })}
        </ul>
        <Cards array={food} add={addFood} remove={deleteFood} />
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
