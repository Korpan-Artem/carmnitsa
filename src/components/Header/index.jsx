import { StyledBox, StyledText, StyledImage } from "./styles";

function Header() {
  return (
    <StyledBox>
      <StyledImage src={"./vite.svg"} alt="Логотип" />
      <StyledText>Модельний ряд</StyledText>
      <StyledText>Авто у наявності</StyledText>
      <StyledText>Покупцям</StyledText>
      <StyledText>Фінансові послуги</StyledText>
      <StyledText>Сервіс</StyledText>
      <StyledText>Про компанію</StyledText>
      <StyledText>Новини</StyledText>
    </StyledBox>
  );
}

export default Header;
