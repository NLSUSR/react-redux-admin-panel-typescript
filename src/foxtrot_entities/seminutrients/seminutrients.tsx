import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { rootAction, useAppDispatch } from "../../golf_shared/store";
import { TNutrients, TPickExclude } from "../../types";
import css from "../entities.module.css";

export const Seminutrients = () => {
  const dispatch = useAppDispatch();
  const { semicomponentActions } = rootAction();

  const [state, setState] = useState<TPickExclude<TNutrients>>(
    {} as TNutrients
  );

  useEffect(() => {
    dispatch(semicomponentActions.setNutrients(state));
  }, [dispatch, semicomponentActions, state]);

  return (
    <Form.Group className={css.group}>
      <Form.Control
        type="number"
        placeholder="Калорийность(необязательно)"
        value={state.calories}
        onChange={(e) =>
          setState({ ...state, calories: Number(e.target.value) })
        }
      />
      <Form.Control
        type="number"
        placeholder="Белки(необязательно)"
        value={state.proteins}
        onChange={(e) =>
          setState({ ...state, proteins: Number(e.target.value) })
        }
      />
      <Form.Control
        type="number"
        placeholder="Жиры(необязательно)"
        value={state.fats}
        onChange={(e) => setState({ ...state, fats: Number(e.target.value) })}
      />
      <Form.Control
        type="number"
        placeholder="Углеводы(необязательно)"
        value={state.carbonhydrates}
        onChange={(e) =>
          setState({ ...state, carbonhydrates: Number(e.target.value) })
        }
      />
    </Form.Group>
  );
};
