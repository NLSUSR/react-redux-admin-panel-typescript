import { Button, Container, Form } from "react-bootstrap";
import { Semiflower } from "../../foxtrot_entities/semiflower/semiflower";
import { useDispatch_, useSelector_ } from "../../golf_shared/store";
import { rootDispatcher } from "../../golf_shared/store/dispatchers/root-dispatcher";
import { TFlower } from "../../types";

export const Flower = () => {
  const dispatch = useDispatch_();
  const { createFlower } = rootDispatcher();
  const flower = useSelector_((s) => s.semicomponentReducer.semiflower);

  return (
    <Container fluid>
      <Form>
        <Semiflower />
        <Button
          style={{ marginTop: "1rem" }}
          variant="primary"
          type="submit"
          children={"Отправить"}
          onClick={(e) => {
            e.preventDefault();
            dispatch(createFlower(flower as TFlower));
          }}
        />
      </Form>
    </Container>
  );
};
