import { Button, Container, Form } from "react-bootstrap";
import { Semidrink } from "../../foxtrot_entities/semidrink/semidrink";
import { useAppDispatch, useAppSelector } from "../../golf_shared/store";
import { rootDispatcher } from "../../golf_shared/store/dispatchers/root-dispatcher";
import { TDrink } from "../../types";

export const Drink = () => {
  const dispatch = useAppDispatch();
  const { createDrink } = rootDispatcher();
  const drink = useAppSelector((s) => s.semicomponentReducer.semidrink);

  return (
    <Container fluid>
      <Form>
        <Semidrink />
        <Button
          style={{ marginTop: "1rem" }}
          variant="primary"
          type="submit"
          children={"Отправить"}
          onClick={(e) => {
            e.preventDefault();
            dispatch(createDrink(drink as TDrink));
          }}
        />
      </Form>
    </Container>
  );
};
