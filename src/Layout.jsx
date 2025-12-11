import { Outlet }   from "react-router-dom";
import { Wrapper }  from "./styles/Layout";
import Header from "./components/Header"
import "./index.css";

const result = [
  "Модельний ряд",
  "Авто у наявності",
  "Покупцям",
  "Фінансові послуги",
  "Сервіс",
  "Про компанію",
  "Новини",
];

export default function Layout() {
  return (
    <Wrapper>
      <Header items={result}/>
      
      <main>
        <Outlet /> 
      </main>

      <footer>Footer</footer> {/* TODO: create footer and add here*/}
    </Wrapper>
  );
}
