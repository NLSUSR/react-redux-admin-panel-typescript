import { Button, Container, Form } from "react-bootstrap";
import { Semitable } from "../../foxtrot_entities/semitable/semitable";
import { useAppDispatch, useAppSelector } from "../../golf_shared/store";
import { rootDispatcher } from "../../golf_shared/store/dispatchers/root-dispatcher";
import { TTable } from "../../types";

export const Table = () => {
  const dispatch = useAppDispatch();
  const { createTable } = rootDispatcher();
  const table = useAppSelector((s) => s.semicomponentReducer.semitable);

  return (
    <Container fluid>
      <Form>
        <Semitable />
        <Button
          style={{ marginTop: "1rem" }}
          variant="primary"
          type="submit"
          children={"Отправить"}
          onClick={(e) => {
            e.preventDefault();
            dispatch(createTable(table as TTable));
          }}
        />
      </Form>
    </Container>
  );
};
