import Item from "antd/es/list/Item";
import { StyledBox, StyledCard, StyledText } from "./styles";

const Models = [
  {
    brand: "BMW",
    model: "M5",
    year: 2017,
    photoUrl: "https://mixprogram.ru/upload/000/u1/6/c/bmw-photo-normal.jpg",
  },
  {
    brand: "Wolksvagen",
    model: "B3",
    year: 2020,
    photoUrl: "https://s1.manualzz.com/image-store/data/4764091-256x256",
  },
  {
    brand: "Tesla",
    model: "Y",
    year: 2025,
    photoUrl:
      "https://files.idyllic.app/files/static/2106675?width=256&optimizer=image",
  },
];

function ModelsCard() {
  return (
    <StyledBox className="CardContainer">
      {Models.map((item, index) => (
        <StyledCard key={index} className="model-item">
          <img src={item.photoUrl} alt={item.brand} />
          <StyledText>
            {item.brand} {item.model}
          </StyledText>
          <StyledText>Рік: {item.year}</StyledText>
        </StyledCard>
      ))}
    </StyledBox>
  );
}

export default ModelsCard;
