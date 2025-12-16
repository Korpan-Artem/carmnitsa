import { Outlet }             from "react-router-dom";
import { Link }               from "react-router-dom";
import { Wrapper, Container } from "./styles/Layout";
import Header                 from "./components/Header";

import "./index.css";

const result = [
  <Link to="/catalog" key="catalog">
    Каталог запчастин
  </Link>,
  <Link to="/usa-cars" key="usa-cars">
    Авто з США
  </Link>,
  "Сервіс",
  "Акції",
  <Link to="/contact" key="contact">
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
