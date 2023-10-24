import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { v4 } from "uuid";
import * as Store from "../../golf_shared/store";
import * as Types from "../../types";
import css from "../entities.module.css";
import { Seminutrients } from "../seminutrients/seminutrients";

export const Semifood = () => {
  const seminutrients = Store.useAppSelector(
    (s) => s.semicomponentReducer.seminutrients
  );

  const [state, setState] = useState<Types.TPickExclude<Types.TFood>>(
    {} as Types.TFood
  );

  const dispatch = Store.useAppDispatch();
  const { semicomponentActions } = Store.rootAction();

  useEffect(() => {
    setState({ ...state, nutrients: seminutrients });
    dispatch(semicomponentActions.setFood(state));
  }, [dispatch, semicomponentActions, state, seminutrients]);

  const foodTypes: Types.TFoodType[] = [
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
    <Form.Group className={css.group}>
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
          setState({ ...state, foodType: e.target.value as Types.TFoodType })
        }
      >
        {foodTypes.map((e: Types.TFoodType) => {
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
      <Seminutrients />
    </Form.Group>
  );
};
