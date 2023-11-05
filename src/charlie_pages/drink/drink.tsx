import { Button, Container, Form } from "react-bootstrap";
import { Semidrink } from "../../foxtrot_entities/semidrink/semidrink";
import { useDispatch_, useSelector_ } from "../../golf_shared/store";
import { rootDispatcher } from "../../golf_shared/store/dispatchers/root-dispatcher";
import { TDrink } from "../../types";

export const Drink = () => {
  const dispatch = useDispatch_();
  const { createDrink } = rootDispatcher();
  const drink = useSelector_((s) => s.semicomponentReducer.semidrink);

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
