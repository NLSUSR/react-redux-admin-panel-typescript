import { Button, Container, Form } from "react-bootstrap";
import css from "../entities.module.sass";

export const Order = () => {
  return (
    <Container fluid>
      <Form>
        <Form.Group className={css.group}>
          <Form.Control type="text" placeholder="Название" />
          <Form.Control type="text" placeholder="Заведение" />
          <Form.Control type="number" placeholder="Номер столика" />
          <Form.Control type="text" placeholder="Клиент" />
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
