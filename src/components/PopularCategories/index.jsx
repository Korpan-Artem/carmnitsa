import React from "react";
import Slider from "react-slick";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import {
  CategoriesHeader,
  CategoriesSubtitle,
  CategoryCard,
  CategoryIcon,
  CategoryName,
  CategoryCount,
  ArrowButton
} from "./styles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import engineImg from "../../assets/images/compass.png";
import brakesImg from "../../assets/images/compass.png";
import suspensionImg from "../../assets/images/compass.png";
import wheelsImg from "../../assets/images/compass.png";
import lightsImg from "../../assets/images/compass.png";
import filtersImg from "../../assets/images/compass.png";
import batteryImg from "../../assets/images/compass.png";
import exhaustImg from "../../assets/images/compass.png";

const categories = [
  { name: "Двигун", count: 120, icon: engineImg },
  { name: "Гальма", count: 85, icon: brakesImg },
  { name: "Підвіска", count: 60, icon: suspensionImg },
  { name: "Колеса та шини", count: 150, icon: wheelsImg },
  { name: "Фари та освітлення", count: 90, icon: lightsImg },
  { name: "Фільтри", count: 75, icon: filtersImg },
  { name: "Акумулятори", count: 40, icon: batteryImg },
  { name: "Вихлопна система", count: 55, icon: exhaustImg },
];

function NextArrow(props) {
  const { onClick } = props;
  return (
    <ArrowButton right onClick={onClick}>
      <RightOutlined />
    </ArrowButton>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <ArrowButton left onClick={onClick}>
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
    centerMode: true,
    centerPadding: "60px",
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3, centerPadding: "40px" } },
      { breakpoint: 992, settings: { slidesToShow: 2, centerPadding: "30px" } },
      { breakpoint: 576, settings: { slidesToShow: 1, centerPadding: "20px" } },
    ],
  };

  return (
    <section style={{ position: "relative", padding: "30px 40px", overflow: "visible" }}>
      <CategoriesHeader>Популярні категорії</CategoriesHeader>
      <CategoriesSubtitle>
        Виберіть потрібну категорію та знайдіть запчастину
      </CategoriesSubtitle>

      <Slider {...settings}>
        {categories.map((cat, idx) => (
          <div key={idx} style={{ margin: "0 -16px", padding: '20px 0', boxSizing: "border-box" }}>
            <CategoryCard role="listitem">
              <CategoryIcon src={cat.icon} alt={cat.name} />
              <CategoryName>{cat.name}</CategoryName>
              <CategoryCount>{cat.count} товарів</CategoryCount>
            </CategoryCard>
          </div>
        ))}
      </Slider>
    </section>
  );
}
