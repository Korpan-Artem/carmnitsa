import styled from 'styled-components';
import { Menu, Button, Checkbox } from 'antd';

// --- Кольори та Основні Стилі ---
const PrimaryColor = '#007bff'; // Синій колір для акцентів (як на кнопці "Купити")
const AccentColor = '#dc3545'; // Червоний для статусу "Під замовлення"
const SuccessColor = '#28a745'; // Зелений для статусу "В наявності"
const GreyText = '#6c757d'; 
const LightGreyBackground = '#f8f9fa';

export const CatalogContainer = styled.div`
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px 20px 50px 20px;
  background-color: #fff;
`;

// --- Стилі Сайдбару (Sidebar) ---

export const Sidebar = styled.aside`
  width: 280px;
  margin-right: 30px;
  flex-shrink: 0;
  padding-right: 20px;
  /* Стилі для липкого сайдбару, якщо потрібно: */
  /* position: sticky; 
  top: 100px; */ 

  @media (max-width: 1024px) {
    width: 250px;
    margin-right: 20px;
  }

  h4 {
    font-size: 16px;
    font-weight: 600;
    margin-top: 20px;
    margin-bottom: 10px;
    color: #343a40;
  }
`;

export const CarSelectionBlock = styled.div`
  border: 1px solid #dee2e6;
  border-radius: 6px;
  padding: 15px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  background-color: ${LightGreyBackground};
`;

export const CarImage = styled.img`
  width: 70px;
  height: auto;
  margin-right: 15px;
`;

export const CarInfo = styled.div`
  flex-grow: 1;
  .model {
    font-weight: 600;
    font-size: 15px;
    color: #343a40;
  }
  .specs {
    font-size: 13px;
    color: ${GreyText};
  }
`;

export const ChangeCarButton = styled(Button)`
  padding: 0 10px;
  height: 30px;
  font-size: 13px;
`;

export const FilterSection = styled.div`
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 1px solid #e9ecef;
`;

export const StyledCheckbox = styled(Checkbox)`
  display: block;
  margin-left: 0 !important;
  margin-bottom: 5px;
  .ant-checkbox-wrapper {
    margin-right: 8px;
  }
`;

export const FilterCheckboxGroup = styled.div`
  padding-left: 10px;
`;

export const StyledMenu = styled(Menu)`
  border-right: none !important;
  .ant-menu-submenu-title, .ant-menu-item {
    font-size: 14px;
    color: #343a40;
  }
`;

// Візуальна Схема Авто
export const VisualSearchBlock = styled.div`
  width: 100%;
  height: 180px;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  margin-top: 10px;
  margin-bottom: 20px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  img {
      max-width: 100%;
      max-height: 100%;
      pointer-events: none; /* Щоб клік спрацьовував на div, а не на img */
  }
`;

// --- Стилі Контенту Каталогу (Content) ---

export const ContentArea = styled.main`
  flex-grow: 1;
`;

export const BreadcrumbsContainer = styled.div`
  margin-bottom: 20px;
  padding: 10px 15px;
  background-color: ${LightGreyBackground};
  border-radius: 6px;
  font-size: 14px;
`;

export const PageTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #343a40;
`;

export const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  padding: 10px 0;
  border-bottom: 1px solid #e9ecef;

  .ant-dropdown-trigger {
    font-weight: 500;
    color: ${PrimaryColor};
    cursor: pointer;
  }
`;

export const ViewToggle = styled.div`
  display: flex;
  button {
    border: 1px solid #dee2e6;
    background-color: #fff;
    &:first-child {
      border-right: none;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    &.active {
      background-color: ${PrimaryColor};
      color: #fff;
      border-color: ${PrimaryColor};
    }
  }
`;

// --- Стилі Списку Товарів (Product Grid) ---

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

export const ProductCard = styled.div`
  background-color: #fff;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 15px;
  transition: box-shadow 0.3s;
  position: relative;
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
`;

export const ProductImageWrapper = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 15px;
`;

export const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 150px;
`;

export const Hover360Badge = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  pointer-events: none;
`;

export const ProductTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
  line-height: 1.3;
  color: #343a40;
`;

export const ProductSubInfo = styled.div`
  font-size: 12px;
  color: ${GreyText};
  margin-bottom: 8px;
`;

export const CompatibilityTag = styled.div`
  display: inline-flex;
  align-items: center;
  font-size: 12px;
  color: ${SuccessColor};
  margin-bottom: 10px;
  .anticon {
    margin-right: 4px;
  }
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: baseline;
  margin-top: 10px;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  font-size: 22px;
  font-weight: 700;
  color: #343a40;
  margin-right: 15px;
`;

export const StatusTag = styled.span`
  font-size: 13px;
  font-weight: 500;
  padding: 3px 8px;
  border-radius: 4px;
  &.in-stock {
    background-color: #e6f7ff;
    color: ${PrimaryColor};
    border: 1px solid #91d5ff;
  }
  &.on-order {
    background-color: #fff2e8;
    color: ${AccentColor};
    border: 1px solid #ffbb96;
  }
`;

export const ActionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BuyButton = styled(Button)`
  background-color: ${PrimaryColor};
  color: #fff;
  border-color: ${PrimaryColor};
  height: 40px;
  font-weight: 600;
  &:hover {
    background-color: #0056b3;
    color: #fff;
    border-color: #0056b3;
  }
`;

export const CompareLink = styled.span`
  font-size: 13px;
  color: ${GreyText};
  cursor: pointer;
  &:hover {
    color: ${PrimaryColor};
  }
`;

export const AlternativesBlock = styled.div`
  background-color: ${LightGreyBackground};
  padding: 10px;
  border-radius: 6px;
  margin-top: 15px;
  font-size: 13px;
  color: ${PrimaryColor};
  cursor: pointer;
  text-align: center;
  &:hover {
    text-decoration: underline;
  }
`;

// --- Стилі "Разом з цим часто купують" ---
export const CrossSellSection = styled.section`
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #e9ecef;
  h2 {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 20px;
    color: #343a40;
  }
`;

export const CrossSellGrid = styled.div`
  display: flex;
  gap: 15px;
  overflow-x: auto;
  padding-bottom: 10px;
`;

export const CrossSellCard = styled.div`
  flex: 0 0 200px;
  text-align: center;
  padding: 10px;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  background-color: #fff;

  img {
    max-width: 80px;
    height: auto;
    margin-bottom: 10px;
  }
  .title {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
  }
  .price {
    font-size: 16px;
    font-weight: 700;
    color: #343a40;
  }
`;

export const ManufacturerLogo = styled.img`
    width: 30px; 
    height: auto; 
    margin-right: 8px;
`;