import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { rootAction, useAppDispatch } from "../../golf_shared/store";
import { TOrder, TPickExclude } from "../../types";
import css from "../entities.module.css";

export const Semiorder = () => {
  const dispatch = useAppDispatch();
  const { semicomponentActions } = rootAction();
  const [state, setState] = useState<TPickExclude<TOrder>>({} as TOrder);

  useEffect(() => {
    dispatch(semicomponentActions.setOrder(state));
  }, [dispatch, semicomponentActions, state]);

  return (
    <Form.Group className={css.group}>
      <Form.Control
        type="text"
        placeholder="Название"
        value={state.name}
        onChange={(e) => setState({ ...state, name: String(e.target.value) })}
      />
      <Form.Control
        type="text"
        placeholder="Заведение"
        value={state.establishment}
        onChange={(e) =>
          setState({ ...state, establishment: String(e.target.value) })
        }
      />
      <Form.Control
        type="number"
        placeholder="Номер столика"
        value={state.tableNumber}
        onChange={(e) =>
          setState({ ...state, tableNumber: Number(e.target.value) })
        }
      />
      <Form.Control
        type="text"
        placeholder="Клиент"
        value={state.user}
        onChange={(e) => setState({ ...state, user: String(e.target.value) })}
      />
    </Form.Group>
  );
};
