import styled from 'styled-components';
import { Input, Select, Button, Card } from 'antd';

// --- Кольори та Основні Стилі (Повторюємо стилі сайту) ---
const PrimaryColor = '#007bff'; // Синій колір для акцентів
const SuccessColor = '#28a745'; // Зелений для успіху/економії
const GreyText = '#6c757d'; 
const LightGreyBackground = '#f8f9fa';
const DarkText = '#343a40';

export const USACarsContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 20px 80px 20px;
  background-color: #fff;
`;

export const HeaderSection = styled.section`
  text-align: center;
  margin-bottom: 50px;
  padding: 30px 0;
  
  h1 {
    font-size: 38px;
    font-weight: 700;
    color: ${DarkText};
    margin-bottom: 15px;
  }

  p {
    font-size: 18px;
    color: ${GreyText};
    max-width: 800px;
    margin: 0 auto;
  }
`;

// --- Калькулятор Пригону (Основний акцент) ---
export const CalculatorSection = styled.section`
  background-color: ${LightGreyBackground};
  border-radius: 12px;
  padding: 40px;
  margin-bottom: 60px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);

  h2 {
    font-size: 30px;
    font-weight: 700;
    color: ${DarkText};
    text-align: center;
    margin-bottom: 30px;
  }
`;

export const CalculatorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  align-items: flex-start;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .ant-select, .ant-input-number, .ant-input-affix-wrapper {
    width: 100%;
    height: 48px;
    border-radius: 8px;
  }
`;

export const CalcField = styled.div`
  .label {
    font-size: 14px;
    font-weight: 600;
    color: ${DarkText};
    margin-bottom: 8px;
    display: block;
  }
`;

export const CalculateButton = styled(Button)`
  background-color: ${PrimaryColor};
  border-color: ${PrimaryColor};
  color: #fff;
  height: 48px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 8px;
  margin-top: 25px;
  &:hover {
    background-color: #0056b3;
    border-color: #0056b3;
  }
`;

export const ResultsBlock = styled.div`
  margin-top: 30px;
  padding: 20px;
  border-top: 1px solid #dee2e6;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const FinalPrice = styled.div`
  .label {
    font-size: 16px;
    color: ${GreyText};
    margin-bottom: 5px;
  }
  .price {
    font-size: 36px;
    font-weight: 800;
    color: ${SuccessColor};
  }
`;

export const DetailsButton = styled(Button)`
  height: 40px;
  font-weight: 600;
  margin-top: 10px;
`;

// --- Секція Популярних Авто ---
export const PopularCarsSection = styled.section`
  margin-bottom: 60px;

  h2 {
    font-size: 30px;
    font-weight: 700;
    color: ${DarkText};
    margin-bottom: 30px;
    text-align: center;
  }
`;

export const CarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
`;

export const CarCard = styled(Card)`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);

  .ant-card-cover {
    height: 200px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s;
      &:hover {
        transform: scale(1.05);
      }
    }
  }

  .ant-card-meta-title {
    font-size: 20px;
    font-weight: 700;
    color: ${DarkText};
    margin-bottom: 5px;
  }

  .ant-card-meta-description {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: ${GreyText};
    margin-bottom: 10px;
  }
`;

export const CarPrice = styled.div`
  font-size: 24px;
  font-weight: 800;
  color: ${PrimaryColor};
  margin-top: 10px;

  .auction {
    font-size: 14px;
    font-weight: 500;
    color: ${SuccessColor};
    display: block;
  }
`;

// --- CTA Секція (Зв'язок з Експертом) ---
export const ExpertCTACard = styled.section`
  background-color: ${PrimaryColor};
  color: #fff;
  padding: 40px;
  border-radius: 12px;
  text-align: center;
  margin-top: 40px;

  h2 {
    color: #fff;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    margin-bottom: 25px;
  }
  
  .ant-btn-default {
      background-color: #fff;
      color: ${PrimaryColor};
      height: 50px;
      font-size: 18px;
      font-weight: 700;
  }
`;