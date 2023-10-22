import { Button, Container, Form } from "react-bootstrap";
import { Semiorder } from "../../foxtrot_entities/semiorder/semiorder";
import { useAppDispatch, useAppSelector } from "../../golf_shared/store";
import { rootDispatcher } from "../../golf_shared/store/dispatchers/root-dispatcher";
import { TOrder } from "../../types";

export const Order = () => {
  const dispatch = useAppDispatch();
  const { createOrder } = rootDispatcher();
  const order = useAppSelector((s) => s.semicomponentReducer.semiorder);

  return (
    <Container fluid>
      <Form>
        <Semiorder />
        <Button
          style={{ marginTop: "1rem" }}
          variant="primary"
          type="submit"
          children={"Отправить"}
          onClick={(e) => {
            e.preventDefault();
            dispatch(createOrder(order as TOrder));
          }}
        />
      </Form>
    </Container>
  );
};
