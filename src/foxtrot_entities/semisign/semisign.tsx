import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { rootAction, useDispatch_ } from "../../golf_shared/store";
import { TCredentials } from "../../types";
import css from "../entities.module.css";

export const Semisign = () => {
  const dispatch = useDispatch_();
  const { semicomponentActions } = rootAction();
  const [state, setState] = useState<TCredentials>({} as TCredentials);

  useEffect(() => {
    dispatch(semicomponentActions.setSign(state));
  }, [dispatch, semicomponentActions, state]);

  return (
    <Form.Group className={css.group}>
      <Form.Control
        type="tel"
        placeholder="Телефон"
        value={state.phone}
        onChange={(e) => setState({ ...state, phone: e.target.value })}
      />
      <Form.Control
        type="password"
        placeholder="Пароль"
        value={state.password}
        onChange={(e) => setState({ ...state, password: e.target.value })}
      />
    </Form.Group>
  );
};
