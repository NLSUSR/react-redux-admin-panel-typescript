import { IDrink } from "@types";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import css from "../entities.module.sass";

export const Drink = (props: Partial<IDrink>) => {
  const [state, setState] = useState({ ...props });

  return (
    <Container fluid>
      <Form.Group className={css.group}>
        <Form.Control
          type="text"
          placeholder="Название"
          value={state.name ?? ""}
          onChange={(e) => setState({ ...state, name: String(e.target.value) })}
        />
        <Form.Check
          type="checkbox"
          label="Наличие"
          value={String(state.availability)}
          onChange={(e) =>
            setState({ ...state, availability: e.target.checked })
          }
        />
        <Form.Control
          type="number"
          placeholder="Частичный объем"
          value={state.partialVolume}
          onChange={(e) =>
            setState({ ...state, partialVolume: Number(e.target.value) })
          }
        />
        <Form.Control
          type="number"
          placeholder="Полный объем"
          value={state.fullVolume}
          onChange={(e) =>
            setState({ ...state, fullVolume: Number(e.target.value) })
          }
        />
        <Form.Control
          type="text"
          placeholder="Производство"
          value={state.manufacturer}
          onChange={(e) =>
            setState({ ...state, manufacturer: String(e.target.value) })
          }
        />
        <Form.Control
          as={"textarea"}
          placeholder="Описание"
          value={state.description}
          onChange={(e) =>
            setState({ ...state, description: String(e.target.value) })
          }
        />
        <Form.Control
          type="number"
          placeholder="Частичная цена"
          value={state.partialPrice}
          onChange={(e) =>
            setState({ ...state, partialPrice: Number(e.target.value) })
          }
        />
        <Form.Control
          type="number"
          placeholder="Полная цена"
          value={state.fullPrice}
          onChange={(e) =>
            setState({ ...state, fullPrice: Number(e.target.value) })
          }
        />
        <Form.Control
          type="url"
          placeholder="Фото"
          value={state.photo}
          onChange={(e) =>
            setState({ ...state, photo: String(e.target.value) })
          }
        />
      </Form.Group>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Button
          variant="primary"
          type="submit"
          children={"Отправить"}
          onClick={(e) => {
            e.preventDefault();
            console.log(state);
          }}
        />
        <Button
          variant="secondary"
          type="reset"
          children={"Сброс"}
          onClick={(e) => {
            e.preventDefault();
          }}
        />
      </div>
    </Container>
  );
};
