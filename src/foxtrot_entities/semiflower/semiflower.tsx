import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { rootAction, useAppDispatch } from "../../golf_shared/store";
import { TFlower, TPickExclude } from "../../types";
import sass from "../entities.module.sass";

export const Semiflower = () => {
  const dispatch = useAppDispatch();
  const { semicomponentActions } = rootAction();
  const [state, setState] = useState<TPickExclude<TFlower>>({} as TFlower);

  useEffect(() => {
    dispatch(semicomponentActions.setFlower(state));
  }, [dispatch, semicomponentActions, state]);

  return (
    <Form.Group className={sass.group}>
      <Form.Control
        type="text"
        placeholder="Название"
        value={state.name}
        onChange={(e) => setState({ ...state, name: String(e.target.value) })}
      />
      <Form.Select
        onChange={(e) =>
          setState({
            ...state,
            availability: e.target.value === "present" ? true : false,
          })
        }
      >
        <option value="present">present</option>
        <option value="absent">absent</option>
      </Form.Select>
      <Form.Select
        onChange={(e) =>
          setState({
            ...state,
            floraType: e.target.value as "flower" | "bouquet",
          })
        }
      >
        <option value="flower">flower</option>
        <option value="bouquet">bouquet</option>
      </Form.Select>
      <Form.Control
        type="number"
        placeholder="Количество"
        value={state.quantity}
        onChange={(e) =>
          setState({ ...state, quantity: Number(e.target.value) })
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
        placeholder="Цена"
        value={state.price}
        onChange={(e) => setState({ ...state, price: Number(e.target.value) })}
      />
      <Form.Control
        type="url"
        placeholder="Фото"
        value={state.photo}
        onChange={(e) => setState({ ...state, photo: String(e.target.value) })}
      />
    </Form.Group>
  );
};
