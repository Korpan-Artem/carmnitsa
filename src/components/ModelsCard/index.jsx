import { StyledBox, StyledCard, StyledText } from "./styles";

function ModelsCard({ products = [] }) {
  return (
    <StyledBox>
      {products.length !== 0
        ? products.map((item, index) => (
            <StyledCard key={index} className="model-item">
              <img src={item.photoUrl} alt={item.brand} />
              <StyledText>
                {item.brand} {item.model}
              </StyledText>
              <StyledText>Рік: {item.year}</StyledText>
            </StyledCard>
          ))
        : null}
    </StyledBox>
  );
}

export default ModelsCard;
