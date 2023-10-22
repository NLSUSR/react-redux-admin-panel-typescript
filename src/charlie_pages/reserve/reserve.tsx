import { Button, Container, Form } from "react-bootstrap";
import { Semireserve } from "../../foxtrot_entities/semireserve/semireserve";
import { useAppDispatch, useAppSelector } from "../../golf_shared/store";
import { rootDispatcher } from "../../golf_shared/store/dispatchers/root-dispatcher";
import { TReserve } from "../../types";

export const Reserve = () => {
  const reserve = useAppSelector((s) => s.semicomponentReducer.semireserve);
  const dispatch = useAppDispatch();
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
