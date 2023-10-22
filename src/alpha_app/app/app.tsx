import { useEffect } from "react";
import { Footer } from "../../delta_widgets/footer/footer";
import { Header } from "../../delta_widgets/header/header";
import { Main } from "../../delta_widgets/main/main";
import { useAppDispatch } from "../../golf_shared/store";
import { rootDispatcher } from "../../golf_shared/store/dispatchers/root-dispatcher";

export function App() {
  const dispatch = useAppDispatch();

  const {
    readDrink,
    readFlower,
    readFood,
    readMenu,
    readOrder,
    readReserve,
    readTable,
  } = rootDispatcher();

  useEffect(() => {
    [
      readDrink,
      readFlower,
      readFood,
      readMenu,
      readOrder,
      readReserve,
      readTable,
    ].forEach((e) => dispatch(e()));
    // eslint-disable-next-line
  }, []);

  return (
    <section>
      <Header />
      <Main />
      <Footer />
    </section>
  );
}
