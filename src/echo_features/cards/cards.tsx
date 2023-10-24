import { Button, Card } from "react-bootstrap";
import { v4 } from "uuid";
import { TTypes } from "../../types";
import { ObjectView } from "../object-view/object-view";
import css from "./cards.module.css";

export const Cards = ({
  array,
  remove,
}: {
  array: TTypes[];
  remove: (i: number) => void;
}) => {
  return (
    <div className={css.cards}>
      {array.map((e, i) => {
        return (
          <Card key={v4()} style={{ width: "18rem" }}>
            <Card.Body>
              <ObjectView object={e} />
            </Card.Body>
            <Button
              style={{ margin: "1rem" }}
              onClick={() => remove(i)}
              variant="secondary"
              children={"Удалить"}
            />
          </Card>
        );
      })}
    </div>
  );
};
