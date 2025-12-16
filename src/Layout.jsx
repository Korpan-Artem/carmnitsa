import { Outlet }             from "react-router-dom";
import { Link }               from "react-router-dom";
import { Wrapper, Container } from "./styles/Layout";
import Header                 from "./components/Header";

import "./index.css";

const result = [
  <Link to="/products" key="products">
    Каталог запчастин
  </Link>,
  "Авто з США",
  "Сервіс",
  "Акції",
  <Link to="/about" key="about">
    Контакти
  </Link>,
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
