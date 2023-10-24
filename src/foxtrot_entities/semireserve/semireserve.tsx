import { useEffect, useState } from "react";
import * as RBS from "react-bootstrap";
import { Cards } from "../../echo_features/cards/cards";
import * as Store from "../../golf_shared/store";
import * as Types from "../../types";
import { getCurrentDateTime } from "../current-time";
import css from "../entities.module.css";
import { Semiflower } from "../semiflower/semiflower";
import { Semiorder } from "../semiorder/semiorder";

export const Semireserve = () => {
  const dispatch = Store.useAppDispatch();
  const { semicomponentActions } = Store.rootAction();

  const [startDate, setStartDate] = useState(getCurrentDateTime());
  const [endDate, setEndDate] = useState(getCurrentDateTime());
  const [state, setState] = useState<Types.TPickExclude<Types.TReserve>>({
    startTime: startDate,
    endTime: endDate,
    order: [] as Types.TOrder[],
    flower: [] as Types.TFlower[],
  } as Types.TReserve);

  useEffect(() => {
    dispatch(semicomponentActions.setReserve(state));
  }, [dispatch, semicomponentActions, state]);

  const order = Store.useAppSelector((s) => s.semicomponentReducer.semiorder);
  const flower = Store.useAppSelector((s) => s.semicomponentReducer.semiflower);

  const addOrder = () => {
    setState((prevState) => ({
      ...prevState,
      order: [...prevState.order, order as Types.TOrder],
    }));
  };

  const addFlower = () => {
    setState((prevState) => ({
      ...prevState,
      flower: [...prevState.flower, flower as Types.TFlower],
    }));
  };

  const deleteOrder = (index: number) => {
    setState((prevState) => ({
      ...prevState,
      order: prevState.order.filter((_e, i) => i !== index),
    }));
  };

  const deleteFlower = (index: number) => {
    setState((prevState) => ({
      ...prevState,
      flower: prevState.flower.filter((_e, i) => i !== index),
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
      <Semiorder />
      <RBS.Button children={"Добавить заказ"} onClick={addOrder} />
      <Cards array={state.order} remove={deleteOrder} />
      <RBS.Form.Label>Цветы</RBS.Form.Label>
      <Semiflower />
      <RBS.Button children={"Добавить цветы"} onClick={addFlower} />
      <Cards array={state.flower} remove={deleteFlower} />
    </RBS.Form.Group>
  );
};
