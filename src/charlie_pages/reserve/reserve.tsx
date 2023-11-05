import { Button, Container, Form } from "react-bootstrap";
import { Semireserve } from "../../foxtrot_entities/semireserve/semireserve";
import { useDispatch_, useSelector_ } from "../../golf_shared/store";
import { rootDispatcher } from "../../golf_shared/store/dispatchers/root-dispatcher";
import { TReserve } from "../../types";

export const Reserve = () => {
  const reserve = useSelector_((s) => s.semicomponentReducer.semireserve);
  const dispatch = useDispatch_();
  const { createReserve } = rootDispatcher();

  return (
    <Container fluid>
      <Form>
        <Semireserve />
        <Button
          style={{ marginTop: "1rem" }}
          variant="primary"
          type="submit"
          children={"Отправить"}
          onClick={(e) => {
            e.preventDefault();
            dispatch(createReserve(reserve as TReserve));
            console.log(reserve);
          }}
        />
      </Form>
    </Container>
  );
};
