import { Form, Button } from "react-bootstrap";
import { Semisign } from "../../foxtrot_entities/semisign/semisign";
import { useDispatch_, useSelector_ } from "../../golf_shared/store";
import { rootDispatcher } from "../../golf_shared/store/dispatchers/root-dispatcher";
import { TCredentials } from "../../types";
import css from "./signup.module.css";

export const Signup = () => {
  const dispatch = useDispatch_();
  const { signup } = rootDispatcher();
  const semisign = useSelector_((s) => s.semicomponentReducer.semisign);

  return (
    <Form className={css.form}>
      <Semisign />
      <Button
        type="submit"
        children={"Зарегистрироваться"}
        onClick={(e) => {
          e.preventDefault();
          dispatch(signup(semisign as TCredentials));
        }}
      />
    </Form>
  );
};
