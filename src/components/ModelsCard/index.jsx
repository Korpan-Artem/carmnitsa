import {
  StyledBox,
  StyledCard,
  StyledText,
  StyledImage,
  StyledButton,
} from "./styles";

function ModelsCard({ products = [] }) {
  return (
    <StyledBox>
      {products.length !== 0
        ? products.map((item, index) => (
            <StyledCard key={index} className="model-item">
              <StyledImage src={item.photoUrl} alt={item.brand} />
              <StyledText>
                {item.brand} {item.model}
              </StyledText>
              <StyledText>Рік: {item.year}</StyledText>
              <StyledButton className="myButton">Перейти</StyledButton>
            </StyledCard>
          ))
        : null}
    </StyledBox>
  );
}

export default ModelsCard;
