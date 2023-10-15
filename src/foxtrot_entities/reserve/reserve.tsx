import { Button, Container, Form, Accordion } from "react-bootstrap";
import css from "../entities.module.sass";
import { useState } from "react";
import { Order } from "../order/order";
import { Flora } from "../flora/flora";

export const Reserve = () => {
  const getCurrentDateTime = (): string => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  const [startDate, setStartDate] = useState(getCurrentDateTime());
  const [endDate, setEndDate] = useState(getCurrentDateTime());

  return (
    <Container fluid>
      <Form>
        <Form.Group className={css.group}>
          <Form.Control type="text" placeholder="Заведение" />
          <Form.Control type="number" placeholder="Номер столика" />
          <Form.Control type="text" placeholder="Клиент" />
          <Form.Group>
            <Form.Label>Время начала</Form.Label>
            <Form.Control
              type="datetime-local"
              value={startDate}
              min={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Время конца</Form.Label>
            <Form.Control
              type="datetime-local"
              value={endDate}
              min={startDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </Form.Group>
          <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="1">
              <Accordion.Body>
                <Order />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion defaultActiveKey="2">
            <Accordion.Item eventKey="2">
              <Accordion.Body>
                <Flora />
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
