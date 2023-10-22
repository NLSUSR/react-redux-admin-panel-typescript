import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { v4 } from "uuid";
import { rootAction, useAppDispatch } from "../../golf_shared/store";
import { TFood, TFoodType, TPickExclude } from "../../types";
import sass from "../entities.module.sass";

export const Semifood = () => {
  const [state, setState] = useState<TPickExclude<TFood>>({} as TFood);

  const dispatch = useAppDispatch();
  const { semicomponentActions } = rootAction();

  useEffect(() => {
    dispatch(semicomponentActions.setFood(state));
  }, [dispatch, semicomponentActions, state]);

  const foodTypes: TFoodType[] = [
    "soup",
    "garnish",
    "kebab",
    "meat",
    "bird",
    "fish",
    "seafood",
    "salad",
    "fruit",
    "vegetables",
    "dairy",
    "bakery",
  ];

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
          setState({ ...state, foodType: e.target.value as TFoodType })
        }
      >
        {foodTypes.map((e: TFoodType) => {
          return (
            <option key={v4()} value={e}>
              {e}
            </option>
          );
        })}
      </Form.Select>
      <Form.Control
        type="number"
        placeholder="Объем"
        value={state.weight}
        onChange={(e) => setState({ ...state, weight: Number(e.target.value) })}
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
