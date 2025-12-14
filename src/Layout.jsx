import { Outlet } from "react-router-dom";
import { Wrapper, Container } from "./styles/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
      <Header items={result} />

      <Container as="main">
        <Outlet />
      </Container>

      <Container as="footer">
        <Footer />
      </Container>
    </Wrapper>
  );
}
