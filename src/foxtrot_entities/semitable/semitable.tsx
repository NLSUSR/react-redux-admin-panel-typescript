import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Cards } from "../../echo_features/cards/cards";
import * as Store from "../../golf_shared/store";
import * as Types from "../../types";
import css from "../entities.module.css";
import { v4 } from "uuid";

export const Semitable = () => {
  const reserves = Store.useSelector_((s) => s.dataReducer.reserve!.resolved);

  const dispatch = Store.useDispatch_();
  const { semicomponentActions } = Store.rootAction();

  const [state, setState] = useState<Types.TPickExclude<Types.TTable>>({
    reserve: [] as string[],
    places: {
      chairs: Number(),
      sofas: Number(),
    },
  } as Types.TTable);

  useEffect(() => {
    dispatch(semicomponentActions.setTable(state));
  }, [dispatch, semicomponentActions, state]);

  const addReserve = (_id: string) => {
    setState((prevState) => ({
      ...prevState,
      reserve: [...prevState.reserve, _id],
    }));
  };

  const deleteReserve = (_id: string) => {
    setState((prevState) => ({
      ...prevState,
      reserve: prevState.reserve.filter((e) => e !== _id),
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
      <Form.Label>Резервы</Form.Label>
      <ul>
        {state.reserve.map((e) => {
          return <li key={v4()}>{e}</li>;
        })}
      </ul>
      <Cards array={reserves} add={addReserve} remove={deleteReserve} />
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
