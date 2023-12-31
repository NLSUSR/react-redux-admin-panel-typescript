import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import * as Store from "../../golf_shared/store";
import * as Types from "../../types";
import css from "../entities.module.css";
import { Seminutrients } from "../seminutrients/seminutrients";

export const Semidrink = () => {
  const seminutrients = Store.useSelector_(
    (s) => s.semicomponentReducer.seminutrients
  );

  const [state, setState] = useState<Types.TPickExclude<Types.TDrink>>(
    {} as Types.TDrink
  );

  const dispatch = Store.useDispatch_();
  const { semicomponentActions } = Store.rootAction();

  useEffect(() => {
    setState({ ...state, nutrients: seminutrients });
    dispatch(semicomponentActions.setDrink(state));
  }, [dispatch, semicomponentActions, state, seminutrients]);

  const drinkType: Types.TDrinkType[] = [
    "water",
    "juice",
    "coctail",
    "alcohol",
    "beer",
    "soda",
    "tea",
    "coffee",
  ];

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
        placeholder="Алкоголь"
        value={state.alcohol}
        onChange={(e) =>
          setState({ ...state, alcohol: Number(e.target.value) })
        }
      />
      <Form.Select
        onChange={(e) =>
          setState({ ...state, drinkType: e.target.value as Types.TDrinkType })
        }
      >
        {drinkType.map((e: Types.TDrinkType) => {
          return <option key={e} value={e} children={e} />;
        })}
      </Form.Select>
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
        onChange={(e) => setState({ ...state, photo: String(e.target.value) })}
      />
      <Seminutrients />
    </Form.Group>
  );
};
