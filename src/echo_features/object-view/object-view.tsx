import { v4 } from "uuid";
import { TTypes } from "../../types";
import css from "./object-view.module.css";

export const ObjectView = ({ object }: { object: TTypes }) => {
  return (
    <table className={css.table}>
      <thead className={css.head}>
        <tr className={css.tread}>
          <td className={css.datacell}>
            <p className={css.datacell__key}>Ключ</p>
          </td>
          <td className={css.datacell}>
            <p className={css.datacell__value}>Значение</p>
          </td>
        </tr>
      </thead>
      <tbody className={css.body}>
        {Object.entries(object).map(([key, value]) => (
          <tr className={css.tread} key={v4()}>
            <td className={css.datacell}>
              <p className={css.datacell__key}>{String(key)}</p>
            </td>
            <td className={css.datacell}>
              <p className={css.datacell__value}>{String(value)}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
