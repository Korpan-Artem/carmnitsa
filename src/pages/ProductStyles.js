import styled from 'styled-components';
import { Button, Tag, Tabs, InputNumber, Collapse, Table } from 'antd';

// --- Кольори та Основні Стилі (Повторюємо стилі сайту) ---
const PrimaryColor = '#007bff'; // Синій колір для акцентів
const AccentColor = '#dc3545'; // Червоний для статусу "Під замовлення"
const SuccessColor = '#28a745'; // Зелений для статусу "В наявності"
const GreyText = '#6c757d'; 
const LightGreyBackground = '#f8f9fa';
const DarkText = '#343a40';

export const ProductContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 30px 20px 80px 20px;
  background-color: #fff;
`;

// --- Хлібні Крихти ---
export const BreadcrumbsContainer = styled.div`
  margin-bottom: 20px;
  padding: 10px 0;
  font-size: 14px;
`;

// --- Основна Секція Товару (Зображення та Інфо) ---
export const ProductLayout = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 50px;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const MediaGallery = styled.div`
  width: 45%;
  flex-shrink: 0;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const MainImage = styled.div`
  width: 100%;
  height: 400px;
  background-color: ${LightGreyBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-bottom: 10px;
  position: relative;
  
  img {
    max-width: 80%;
    max-height: 80%;
  }
`;

export const ImageThumbnail = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  border: 2px solid ${props => props.$active ? PrimaryColor : '#e9ecef'};
  border-radius: 6px;
  cursor: pointer;
  margin-right: 10px;
  padding: 5px;
  transition: all 0.2s;
`;

export const InfoBlock = styled.div`
  width: 55%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: ${DarkText};
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

export const SubInfo = styled.div`
  font-size: 16px;
  color: ${GreyText};
  margin-bottom: 15px;
  
  strong {
    color: ${DarkText};
    font-weight: 600;
  }
`;

export const ManufacturerInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #e9ecef;
  
  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    margin-right: 15px;
  }
  
  span {
    font-weight: 600;
    color: ${PrimaryColor};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

// --- Сумісність та Доступність ---
export const CompatibilityBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background-color: #e6ffed; /* Світло-зелений фон */
  border: 1px solid #b7eb8f;
  border-radius: 6px;
  margin-bottom: 25px;
  font-weight: 500;
  color: ${SuccessColor};

  .anticon {
    font-size: 18px;
    margin-right: 10px;
  }
`;

export const PriceAndActions = styled.div`
  border: 2px solid ${LightGreyBackground};
  border-radius: 8px;
  padding: 25px;
  margin-bottom: 30px;
  background-color: ${LightGreyBackground};
`;

export const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 20px;
`;

export const PriceDisplay = styled.div`
  span {
    font-size: 40px;
    font-weight: 700;
    color: ${DarkText};
  }
  .currency {
    font-size: 24px;
    margin-left: 5px;
  }
`;

export const AvailabilityTag = styled(Tag)`
  font-size: 14px;
  padding: 5px 10px;
  height: auto;
  font-weight: 600;
  border-radius: 4px;
  &.in-stock {
    background-color: ${SuccessColor};
    color: #fff;
  }
  &.on-order {
    background-color: ${AccentColor};
    color: #fff;
  }
`;

export const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  span {
    font-weight: 600;
    margin-right: 15px;
    color: ${DarkText};
  }
  .ant-input-number-input {
    text-align: center;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 15px;

  .main-buy-btn {
    flex-grow: 1;
    background-color: ${PrimaryColor};
    border-color: ${PrimaryColor};
    height: 50px;
    font-size: 18px;
    font-weight: 700;
    &:hover {
      background-color: #0056b3;
      border-color: #0056b3;
    }
  }

  .secondary-btn {
    width: 50px;
    height: 50px;
  }
`;

// --- Блок "Аналоги та Альтернативи" ---
export const AlternativesSection = styled.div`
  margin-bottom: 30px;
  padding: 15px;
  background-color: #ffe8e6; /* Світло-червоний фон для уваги */
  border-radius: 6px;
  font-size: 15px;
  color: ${AccentColor};
  font-weight: 500;
  
  a {
      color: ${AccentColor};
      font-weight: 700;
      text-decoration: underline;
  }
`;

// --- Таби (Характеристики, Сумісність, Відгуки) ---
export const StyledTabs = styled(Tabs)`
  .ant-tabs-nav {
    margin-bottom: 0 !important;
  }
  .ant-tabs-tab {
    font-size: 18px;
    font-weight: 600;
    color: ${GreyText};
    padding: 12px 20px;
    transition: color 0.3s;
    
    &.ant-tabs-tab-active .ant-tabs-tab-btn {
      color: ${PrimaryColor};
    }
    &:hover {
      color: ${PrimaryColor};
    }
  }
  .ant-tabs-ink-bar {
    background: ${PrimaryColor};
  }
  .tab-content {
      padding-top: 20px;
  }
`;

export const SpecsTable = styled(Table)`
  .ant-table-wrapper {
    border: 1px solid #e9ecef;
    border-radius: 6px;
  }
  .ant-table-tbody > tr > td {
    padding: 12px 16px;
  }
  .ant-table-row > td:first-child {
    font-weight: 500;
    color: ${GreyText};
    width: 35%;
  }
  .ant-table-row > td:last-child {
    font-weight: 600;
    color: ${DarkText};
  }
`;

// --- Секція "Схожі Товари" (Cross-Sell) ---
export const CrossSellSection = styled.section`
  margin-top: 40px;
  h2 {
    font-size: 26px;
    font-weight: 700;
    color: ${DarkText};
    margin-bottom: 25px;
  }
`;

export const CrossSellGrid = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding-bottom: 10px;
`;

// Картка для Схожих Товарів (Спрощена версія)
export const SimpleProductCard = styled.div`
  flex: 0 0 250px;
  background-color: #fff;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  transition: box-shadow 0.3s;
  cursor: pointer;
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  img {
    max-width: 100%;
    height: 120px;
    object-fit: contain;
    margin-bottom: 10px;
  }
  .title {
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 8px;
    color: ${DarkText};
  }
  .price {
    font-size: 20px;
    font-weight: 700;
    color: ${PrimaryColor};
  }
`;