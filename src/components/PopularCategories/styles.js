import styled from "styled-components";

// --- Кольори та Основні Стилі (Повторюємо стилі сайту) ---
const PrimaryColor = '#007bff'; // Синій колір для акцентів
const GreyText = '#6c757d'; 
const LightGreyBackground = '#f8f9fa';
const DarkText = '#343a40'; // Замість #111827

export const SliderWrapper = styled.section`
  position: relative;
  padding: 40px 0; /* Внутрішній відступ секції */
  margin: 0 auto;
  max-width: 1300px;
`;

export const CategoriesHeader = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: ${DarkText};
  text-align: center;
  margin-bottom: 8px;
`;

export const CategoriesSubtitle = styled.p`
  font-size: 18px; /* Збільшено для кращої читабельності */
  color: ${GreyText};
  text-align: center;
  margin-bottom: 30px;
`;

// Створення обгортки для слайдів для коректного відступу в слайдері
export const CategoryItemWrapper = styled.div`
    padding: 20px 10px; /* ЗМІНА: Додано вертикальний padding для коректного відображення тіні та hover-трансформації */
    box-sizing: border-box;
`;

export const CategoryCard = styled.a` /* Змінено на 'a' для кращої семантики */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px 16px;
  background: #fff;
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08); /* Більш помітна тінь */
  min-height: 200px;
  text-decoration: none; /* Прибираємо підкреслення */
  
  /* Стилізація картки на hover */
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    border-color: ${PrimaryColor}; /* Акцентна рамка */
    background: ${LightGreyBackground};
  }
`;

export const CategoryIcon = styled.img`
  height: 80px;
  width: 80px; /* Додано ширину для контролю */
  margin-bottom: 14px;
  object-fit: contain;
`;

export const CategoryName = styled.div`
  font-size: 18px; /* Збільшено */
  font-weight: 700;
  color: ${DarkText};
  margin-bottom: 6px;
  transition: color 0.3s;
  
  ${CategoryCard}:hover & {
      color: ${PrimaryColor};
  }
`;

export const CategoryCount = styled.div`
  font-size: 14px;
  color: ${GreyText};
`;

export const ArrowButton = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  
  /* Позиціонування стрілок відносно SliderWrapper */
  ${props => props.right ? "right: -40px;" : ""}
  ${props => props.left ? "left: -40px;" : ""}
  
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #d1d5db;
  background: #fff;
  color: ${DarkText};
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
  font-size: 20px;
  transition: all 0.3s;

  &:hover {
    background: ${PrimaryColor};
    color: #fff;
    border-color: ${PrimaryColor};
  }
  
  /* Адаптивність для стрілок */
  @media (max-width: 1400px) {
    ${props => props.right ? "right: 0;" : ""}
    ${props => props.left ? "left: 0;" : ""}
  }
  
  @media (max-width: 576px) {
    /* Приховати стрілки на дуже малих екранах, або зменшити їх */
    width: 30px;
    height: 30px;
    font-size: 16px;
    ${props => props.right ? "right: 5px;" : ""}
    ${props => props.left ? "left: 5px;" : ""}
  }
`;