import { Form, Button } from "react-bootstrap";
import { Semisign } from "../../foxtrot_entities/semisign/semisign";
import { useDispatch_, useSelector_ } from "../../golf_shared/store";
import { rootDispatcher } from "../../golf_shared/store/dispatchers/root-dispatcher";
import { TCredentials } from "../../types";
import css from "./signin.module.css";

export const Signin = () => {
  const dispatch = useDispatch_();
  const { signin } = rootDispatcher();
  const semisign = useSelector_((s) => s.semicomponentReducer.semisign);

  return (
    <Form className={css.form}>
      <Form.Label>Вход</Form.Label>
      <Semisign />
      <Button
        type="submit"
        children={"Войти"}
        onClick={(e) => {
          e.preventDefault();
          dispatch(signin(semisign as TCredentials));
        }}
      />
    </Form>
  );
};
