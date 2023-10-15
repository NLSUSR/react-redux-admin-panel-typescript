import { Container, Form, Button, Accordion } from "react-bootstrap";
import css from "../entities.module.sass";
import { Flower } from "../flower/flower";

export const Flora = () => {
  return (
    <Container fluid>
      <Form>
        <Form.Group className={css.group}>
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Букет</Accordion.Header>
              <Accordion.Body>
                <Flower />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Цветок</Accordion.Header>
              <Accordion.Body>
                <Flower />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
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
