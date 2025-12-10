import { StyledBox, StyledText, StyledImage } from "./styles";

function Header({ items }) {
  let HeaderItems = items.map((item, index) => (
    <StyledText key={index}>{item}</StyledText>
  ));

  return (
    <StyledBox>
      <StyledImage src={"./vite.svg"} alt="Логотип" />
      {HeaderItems}
    </StyledBox>
  );
}

export default Header;
