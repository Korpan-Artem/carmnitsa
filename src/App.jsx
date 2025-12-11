import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";

const result = [
  "Модельний ряд",
  "Авто у наявності",
  "Покупцям",
  "Фінансові послуги",
  "Сервіс",
  "Про компанію",
  "Новини",
];

function App() {
  return (
    <>
      <Header items={result} />
      <Banner />
    </>
  );
}

export default App;
