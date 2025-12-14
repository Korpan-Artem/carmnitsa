import { StyledBox, StyledText, StyledImage } from "./styles";

function Telephones({ items }) {
  let HeaderItems = items.map((item, index) => (
    <StyledText key={index}>{item}</StyledText>
  ));

  return <StyledBox>{HeaderItems}</StyledBox>;
}

export default Telephones;
