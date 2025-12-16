import { Outlet }             from "react-router-dom";
import { Link }               from "react-router-dom";
import { Wrapper, Container } from "./styles/Layout";
import Header                 from "./components/Header";

import "./index.css";

const result = [
  <Link to="/" key="home">
    Модельний ряд
  </Link>,
  <Link to="/products" key="products">
    Авто у наявності
  </Link>,
  "Покупцям",
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

      <Container as="main">
        <Outlet />
      </Container>

      <Container as="footer">Footer</Container>
    </Wrapper>
  );
}
