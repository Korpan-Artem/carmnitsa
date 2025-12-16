import {
  StyledBox,
  StyledCard,
  StyledText,
  StyledImage,
  StyledButton,
  ImageWrapper,
} from "./styles";

function ModelsCard({ products = [] }) {
  if (products.length === 0) return null;

  return (
    <StyledBox>
      {products.map((item, index) => (
        <StyledCard key={index} className="model-item">
          <ImageWrapper>
            <StyledImage src={item.photoUrl} alt={`${item.brand} ${item.model}`} />
            <StyledButton>Перейти</StyledButton>
          </ImageWrapper>
          <StyledText>
            {item.brand} {item.model}
          </StyledText>
        </StyledCard>
      ))}
    </StyledBox>
  );
}

export default ModelsCard;
