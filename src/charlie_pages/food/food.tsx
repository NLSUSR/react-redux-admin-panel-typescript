import { Button, Container, Form } from "react-bootstrap";
import { Semifood } from "../../foxtrot_entities/semifood/semifood";
import { useDispatch_, useSelector_ } from "../../golf_shared/store";
import { rootDispatcher } from "../../golf_shared/store/dispatchers/root-dispatcher";
import { TFood } from "../../types";

export const Food = () => {
  const dispatch = useDispatch_();
  const { createFood } = rootDispatcher();
  const food = useSelector_((s) => s.semicomponentReducer.semifood);

  return (
    <Container fluid>
      <Form>
        <Semifood />
        <Button
          style={{ marginTop: "1rem" }}
          variant="primary"
          type="submit"
          children={"Отправить"}
          onClick={(e) => {
            e.preventDefault();
            dispatch(createFood(food as TFood));
          }}
        />
      </Form>
    </Container>
  );
};
