import { useEffect, useState } from "react";
import * as RBS from "react-bootstrap";
import { Cards } from "../../echo_features/cards/cards";
import * as Store from "../../golf_shared/store";
import * as Types from "../../types";
import { getCurrentDateTime } from "../current-time";
import css from "../entities.module.css";
import { v4 } from "uuid";

export const Semireserve = () => {
  const dispatch = Store.useDispatch_();
  const { semicomponentActions } = Store.rootAction();

  const [startDate, setStartDate] = useState(getCurrentDateTime());
  const [endDate, setEndDate] = useState(getCurrentDateTime());
  const [state, setState] = useState<Types.TPickExclude<Types.TReserve>>({
    startTime: startDate,
    endTime: endDate,
    order: [] as string[],
    flower: [] as string[],
  } as Types.TReserve);

  useEffect(() => {
    dispatch(semicomponentActions.setReserve(state));
  }, [dispatch, semicomponentActions, state]);

  const orders = Store.useSelector_((s) => s.dataReducer.order!.resolved);
  const flowers = Store.useSelector_((s) => s.dataReducer.flower!.resolved);

  const addOrder = (_id: string) => {
    setState((prevState) => ({
      ...prevState,
      order: [...prevState.order, _id],
    }));
  };

  const addFlower = (_id: string) => {
    setState((prevState) => ({
      ...prevState,
      flower: [...prevState.flower, _id],
    }));
  };

  const deleteOrder = (_id: string) => {
    setState((prevState) => ({
      ...prevState,
      order: prevState.order.filter((e) => e !== _id),
    }));
  };

  const deleteFlower = (_id: string) => {
    setState((prevState) => ({
      ...prevState,
      flower: prevState.flower.filter((e) => e !== _id),
    }));
  };

  return (
    <RBS.Form.Group className={css.group}>
      <RBS.Form.Control
        type="text"
        placeholder="Заведение"
        value={state.establishment}
        onChange={(e) =>
          setState({ ...state, establishment: String(e.target.value) })
        }
      />
      <RBS.Form.Control
        type="number"
        placeholder="Номер столика"
        value={state.tableNumber}
        onChange={(e) =>
          setState({ ...state, tableNumber: Number(e.target.value) })
        }
      />
      <RBS.Form.Control
        type="text"
        placeholder="Клиент"
        value={state.user}
        onChange={(e) => setState({ ...state, user: String(e.target.value) })}
      />
      <RBS.Form.Group>
        <RBS.Form.Label>Время начала</RBS.Form.Label>
        <RBS.Form.Control
          type="datetime-local"
          value={startDate}
          min={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </RBS.Form.Group>
      <RBS.Form.Group>
        <RBS.Form.Label>Время конца</RBS.Form.Label>
        <RBS.Form.Control
          type="datetime-local"
          value={endDate}
          min={startDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </RBS.Form.Group>
      <RBS.Form.Label>Заказы</RBS.Form.Label>
      <ul>
        {state.order.map((e) => {
          return <li key={v4()}>{e}</li>;
        })}
      </ul>
      <Cards array={orders} add={addOrder} remove={deleteOrder} />
      <RBS.Form.Label>Цветы</RBS.Form.Label>
      <ul>
        {state.flower.map((e) => {
          return <li key={v4()}>{e}</li>;
        })}
      </ul>
      <Cards array={flowers} add={addFlower} remove={deleteFlower} />
    </RBS.Form.Group>
  );
};
