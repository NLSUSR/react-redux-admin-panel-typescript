import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { v4 } from "uuid";
import { rootAction, useAppDispatch } from "../../golf_shared/store";
import { TDrink, TDrinkType, TPickExclude } from "../../types";
import sass from "../entities.module.sass";

export const Semidrink = () => {
  const [state, setState] = useState<TPickExclude<TDrink>>({} as TDrink);

  const dispatch = useAppDispatch();
  const { semicomponentActions } = rootAction();

  useEffect(() => {
    dispatch(semicomponentActions.setDrink(state));
  }, [dispatch, semicomponentActions, state]);

  const drinkType: TDrinkType[] = [
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
    <Form.Group className={sass.group}>
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
          setState({ ...state, drinkType: e.target.value as TDrinkType })
        }
      >
        {drinkType.map((e: TDrinkType) => {
          return (
            <option key={v4()} value={e}>
              {e}
            </option>
          );
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
    </Form.Group>
  );
};
