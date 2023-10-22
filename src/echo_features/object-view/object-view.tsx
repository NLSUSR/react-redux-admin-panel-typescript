import { v4 } from "uuid";
import { TTypes } from "../../types";
import sass from "./object-view.module.sass";

export const ObjectView = ({ object }: { object: TTypes }) => {
  return (
    <table className={sass.table}>
      <thead className={sass.head}>
        <tr className={sass.tread}>
          <td className={sass.datacell}>
            <p className={sass.datacell__key}>Ключ</p>
          </td>
          <td className={sass.datacell}>
            <p className={sass.datacell__value}>Значение</p>
          </td>
        </tr>
      </thead>
      <tbody className={sass.body}>
        {Object.entries(object).map(([key, value]) => (
          <tr className={sass.tread} key={v4()}>
            <td className={sass.datacell}>
              <p className={sass.datacell__key}>{String(key)}</p>
            </td>
            <td className={sass.datacell}>
              <p className={sass.datacell__value}>{String(value)}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
