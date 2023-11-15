import { Button, Card } from "react-bootstrap";
import { v4 } from "uuid";
import { TTypes } from "../../types";
import { ObjectView } from "../object-view/object-view";
import css from "./cards.module.css";

export const Cards = ({
  array,
  add,
  remove,
}: {
  array: TTypes[];
  add?: (_id: string) => void;
  remove?: (_id: string) => void;
}) => {
  return (
    <div className={css.cards}>
      {array?.map((e) => {
        return (
          <Card key={v4()} style={{ width: "18rem" }}>
            <Card.Body>
              <ObjectView object={e} />
            </Card.Body>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                style={{ margin: "1rem" }}
                onClick={() => add!(e._id)}
                variant="primary"
                children={"Добавить"}
              />
              <Button
                style={{ margin: "1rem" }}
                onClick={() => remove!(e._id)}
                variant="secondary"
                children={"Удалить"}
              />
            </div>
          </Card>
        );
      })}
    </div>
  );
};
