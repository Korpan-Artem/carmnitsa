import { Outlet } from "react-router-dom";
import { Wrapper } from "./styles/Layout";
import Header from "./components/Header";
import "./index.css";
import { Link } from "react-router-dom";

const result = [
  <Link to="/" key="home">
    Модельний ряд
  </Link>,
  <Link to="/products" key="products">
    Авто у наявності
  </Link>,
  "Покупцям",
  "Фінансові послуги",
  "Сервіс",
  <Link to="/about" key="about">
    Про компанію
  </Link>,
  "Новини",
];

export default function Layout() {
  return (
    <Wrapper>
      <Header items={result} />
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer> {/* TODO: create footer and add here*/}
    </Wrapper>
  );
}
