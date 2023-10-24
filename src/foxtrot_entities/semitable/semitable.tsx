import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Cards } from "../../echo_features/cards/cards";
import * as Store from "../../golf_shared/store";
import * as Types from "../../types";
import css from "../entities.module.css";
import { Semireserve } from "../semireserve/semireserve";

export const Semitable = () => {
  const reserve = Store.useAppSelector(
    (s) => s.semicomponentReducer.semireserve
  );

  const dispatch = Store.useAppDispatch();
  const { semicomponentActions } = Store.rootAction();

  const [state, setState] = useState<Types.TPickExclude<Types.TTable>>({
    reserve: [] as Types.TReserve[],
    places: {
      chairs: Number(),
      sofas: Number(),
    },
  } as Types.TTable);

  useEffect(() => {
    dispatch(semicomponentActions.setTable(state));
  }, [dispatch, semicomponentActions, state]);

  const addReserve = () => {
    setState((prevState) => ({
      ...prevState,
      reserve: [...prevState.reserve, reserve as Types.TReserve],
    }));
  };

  const deleteReserve = (index: number) => {
    setState((prevState) => ({
      ...prevState,
      reserve: prevState.reserve.filter((_e, i) => i !== index),
    }));
  };

  return (
    <Form.Group className={css.group}>
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

      <Form.Label>Брони</Form.Label>
      <Semireserve />
      <Button children={"Добавить бронь"} onClick={addReserve} />
      <Cards array={state.reserve} remove={deleteReserve} />

      <Form.Control
        type="number"
        placeholder="Стулья"
        value={state.places.chairs}
        onChange={(e) =>
          setState((prevState) => ({
            ...prevState,
            places: {
              ...prevState.places,
              chairs: Number(e.target.value),
            },
          }))
        }
      />

      <Form.Control
        type="number"
        placeholder="Диваны"
        value={state.places.sofas}
        onChange={(e) =>
          setState((prevState) => ({
            ...prevState,
            places: {
              ...prevState.places,
              sofas: Number(e.target.value),
            },
          }))
        }
      />

      <Form.Control
        type="text"
        placeholder="Фото"
        value={state.photo}
        onChange={(e) => setState({ ...state, photo: e.target.value })}
      />
    </Form.Group>
  );
};
