import { Container, Form, Button } from "react-bootstrap";
import css from "../entities.module.sass";

export const Food = () => {
  return (
    <Container fluid>
      <Form>
        <Form.Group className={css.group}>
          <Form.Control type="text" placeholder="Название" />
          <Form.Check type="checkbox" label="Наличие" />
          <Form.Control type="number" placeholder="Объем" />
          <Form.Control type="text" placeholder="Производство" />
          <Form.Control as={"textarea"} placeholder="Описание" />
          <Form.Control type="number" placeholder="Цена" />
          <Form.Control type="url" placeholder="Фото" />
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
