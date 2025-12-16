import Slider from "react-slick";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import {
  CategoriesHeader,
  CategoriesSubtitle,
  CategoryCard,
  CategoryIcon,
  CategoryName,
  CategoryCount,
  ArrowButton,
  SliderWrapper, // Додано новий wrapper для управління padding
  CategoryItemWrapper // Додано для управління відступами елементів
} from "./styles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Припустімо, що ці зображення є іконками для категорій
import engineImg from "../../assets/images/compass.png";
import brakesImg from "../../assets/images/compass.png";
import suspensionImg from "../../assets/images/compass.png";
import wheelsImg from "../../assets/images/compass.png";
import lightsImg from "../../assets/images/compass.png";
import filtersImg from "../../assets/images/compass.png";
import batteryImg from "../../assets/images/compass.png";
import exhaustImg from "../../assets/images/compass.png";

const categories = [
  { name: "Двигун", count: 120, icon: engineImg, link: "/catalog/engine" },
  { name: "Гальма", count: 85, icon: brakesImg, link: "/catalog/brakes" },
  { name: "Підвіска", count: 60, icon: suspensionImg, link: "/catalog/suspension" },
  { name: "Колеса та шини", count: 150, icon: wheelsImg, link: "/catalog/wheels" },
  { name: "Фари та освітлення", count: 90, icon: lightsImg, link: "/catalog/lights" },
  { name: "Фільтри", count: 75, icon: filtersImg, link: "/catalog/filters" },
  { name: "Акумулятори", count: 40, icon: batteryImg, link: "/catalog/battery" },
  { name: "Вихлопна система", count: 55, icon: exhaustImg, link: "/catalog/exhaust" },
];

function NextArrow(props) {
  const { onClick } = props;
  return (
    <ArrowButton right onClick={onClick} aria-label="Наступна категорія">
      <RightOutlined />
    </ArrowButton>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <ArrowButton left onClick={onClick} aria-label="Попередня категорія">
      <LeftOutlined />
    </ArrowButton>
  );
}

export default function PopularCategories() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // centerMode: true, // Прибрано, оскільки це часто створює проблеми з відступами
    // centerPadding: "60px", // Прибрано, оскільки це часто створює проблеми з відступами
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <SliderWrapper>
      <CategoriesHeader>Популярні категорії</CategoriesHeader>
      <CategoriesSubtitle>
        Виберіть потрібну категорію та знайдіть запчастину
      </CategoriesSubtitle>

      <Slider {...settings}>
        {categories.map((cat, idx) => (
          <CategoryItemWrapper key={idx}>
            {/* Обов'язково використовуємо тег 'a' або Link, оскільки це навігаційний елемент */}
            <CategoryCard href={cat.link} role="listitem"> 
              <CategoryIcon src={cat.icon} alt={cat.name} />
              <CategoryName>{cat.name}</CategoryName>
              <CategoryCount>{cat.count} товарів</CategoryCount>
            </CategoryCard>
          </CategoryItemWrapper>
        ))}
      </Slider>
    </SliderWrapper>
  );
}