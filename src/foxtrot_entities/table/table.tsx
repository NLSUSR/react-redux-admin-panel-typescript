import { Accordion, Button, Container, Form } from "react-bootstrap";
import css from "../entities.module.sass";
import { Reserve } from "../reserve/reserve";

export const Table = () => {
  return (
    <Container fluid>
      <Form>
        <Form.Group className={css.group}>
          <Form.Control type="text" placeholder="Заведение" />
          <Form.Control type="number" placeholder="Номер столика" />
          <Form.Control type="text" placeholder="Клиент" />
          <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="1">
              <Accordion.Body>
                <Reserve />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Form.Control type="number" placeholder="Стулья" />
          <Form.Control type="number" placeholder="Диваны" />
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
