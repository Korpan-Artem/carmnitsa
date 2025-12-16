import React, { useState } from 'react';
import { Breadcrumb, Menu, Dropdown, Button, Checkbox, Space } from 'antd';
import {
  DownOutlined,
  AppstoreOutlined,
  UnorderedListOutlined,
  CheckCircleOutlined,
  SearchOutlined,
  PlusOutlined,
  MinusOutlined
} from '@ant-design/icons';
import {
  CatalogContainer,
  Sidebar,
  ContentArea,
  CarSelectionBlock,
  CarImage,
  CarInfo,
  ChangeCarButton,
  FilterSection,
  FilterCheckboxGroup,
  VisualSearchBlock,
  BreadcrumbsContainer,
  PageTitle,
  Toolbar,
  ViewToggle,
  ProductGrid,
  ProductCard,
  ProductImageWrapper,
  ProductImage,
  Hover360Badge,
  ProductTitle,
  ProductSubInfo,
  CompatibilityTag,
  PriceRow,
  Price,
  StatusTag,
  ActionRow,
  BuyButton,
  CompareLink,
  AlternativesBlock,
  CrossSellSection,
  CrossSellGrid,
  CrossSellCard,
  StyledMenu,
  StyledCheckbox,
  ManufacturerLogo
} from './CatalogStyles';

// --- Дані-заглушки для відображення ---
const mockProducts = [
  {
    id: 1,
    title: 'Радіатор охолодження двигуна (+AC)',
    oem: '6825005AB',
    brand: 'Nissens',
    price: '4 850',
    status: 'in-stock',
    delivery: 'Сьогодні',
    img: '/path/to/radiator_img.png', // Замініть на реальні шляхи
    has360: true,
  },
  {
    id: 2,
    title: 'Радіатор системи охолодження двигуна',
    oem: '6825005AC',
    brand: 'Denso',
    price: '3 120',
    status: 'on-order',
    delivery: '5 днів',
    img: '/path/to/radiator_img.png',
    has360: false,
  },
  {
    id: 3,
    title: 'Комплект ГРМ',
    oem: '6825005AC',
    brand: 'BOSCH',
    price: '3 120',
    status: 'in-stock',
    delivery: 'Завтра',
    img: '/path/to/timing_belt_kit_img.png',
    has360: false,
  },
];

const mockCrossSell = [
  { id: 1, title: 'Антифриз Concentrate G12', price: '350', img: '/path/to/antifreeze.png' },
  { id: 2, title: 'Промивка системи', price: '210', img: '/path/to/flush.png' },
  { id: 3, title: 'Заглушка радіатора', price: '95', img: '/path/to/cap.png' },
  { id: 4, title: 'Термостат', price: '450', img: '/path/to/thermostat.png' },
];

const mockCategories = [
    { key: 'suspension', label: 'Підвіска' },
    { key: 'engine', label: 'Двигун', children: [
        { key: 'cooling', label: 'Система охолодження', children: [
            { key: 'radiator', label: 'Радіатори' },
            { key: 'pumps', label: 'Помпи' }
        ]},
        { key: 'ignition', label: 'Система запалювання' }
    ]},
    { key: 'brakes', label: 'Гальмівна система' },
];

// --- Компонент випадаючого меню для сортування ---
const sortMenu = (
  <Menu
    items={[
      { key: 'popular', label: 'За Популярністю' },
      { key: 'price_asc', label: 'За Ціною (зростання)' },
      { key: 'price_desc', label: 'За Ціною (спадання)' },
      { key: 'new', label: 'Новинки' },
    ]}
  />
);

// --- Компонент Картки Товару ---
const ProductCardComponent = ({ product }) => (
  <ProductCard>
    <ProductImageWrapper>
      <ProductImage src={product.img || 'placeholder.png'} alt={product.title} />
      {product.has360 && <Hover360Badge>360°</Hover360Badge>}
    </ProductImageWrapper>
    
    <ProductTitle>{product.title}</ProductTitle>
    <ProductSubInfo>OEM: {product.oem}</ProductSubInfo>
    
    <CompatibilityTag>
      <CheckCircleOutlined />
      Підходить до Jeep Compass 2.4L (2020)
    </CompatibilityTag>

    <PriceRow>
      <Price>{product.price} ₴</Price>
      <StatusTag className={product.status === 'in-stock' ? 'in-stock' : 'on-order'}>
        {product.status === 'in-stock' ? `В наявності (${product.delivery})` : `Під замовлення (${product.delivery})`}
      </StatusTag>
    </PriceRow>

    {
      product.status === 'on-order' && product.id === 2 && (
        <AlternativesBlock>
          Переглянути 2 перевірені аналоги
        </AlternativesBlock>
      )
    }

    <ActionRow style={{ marginTop: product.status !== 'on-order' ? '15px' : '0' }}>
      <BuyButton type="primary">Купити</BuyButton>
      <Space>
        {product.brand === 'BOSCH' && <ManufacturerLogo src="/path/to/bosch_logo.png" alt="Bosch" />} {/* Додано для BOSCH */}
        <CompareLink>Додати до порівняння</CompareLink>
      </Space>
    </ActionRow>
  </ProductCard>
);


// --- Основний Компонент Сторінки Каталогу ---
const CatalogPage = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [openKeys, setOpenKeys] = useState(['engine']);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && mockCategories.some(cat => cat.key === latestOpenKey)) {
      setOpenKeys([latestOpenKey]);
    } else {
      setOpenKeys(keys);
    }
  };

  const renderFilterMenu = (data) => (
    <StyledMenu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange}>
      {data.map(item => {
        if (item.children) {
          return (
            <Menu.SubMenu key={item.key} title={item.label} icon={openKeys.includes(item.key) ? <MinusOutlined /> : <PlusOutlined />}>
              {renderFilterMenu(item.children)}
            </Menu.SubMenu>
          );
        }
        return <Menu.Item key={item.key}>{item.label}</Menu.Item>;
      })}
    </StyledMenu>
  );


  return (
    <CatalogContainer>
      
      {/* --- Сайдбар з Фільтрами --- */}
      <Sidebar>
        
        {/* Блок Вибору Авто */}
        <CarSelectionBlock>
          <CarImage src="/path/to/jeep_compass.png" alt="Jeep Compass" />
          <CarInfo>
            <div className="model">Jeep Compass (2020)</div>
            <div className="specs">2.4L</div>
          </CarInfo>
          <ChangeCarButton type="default" size="small">Змінити авто</ChangeCarButton>
        </CarSelectionBlock>

        {/* Візуальна Схема (Ключовий елемент 2026) */}
        <VisualSearchBlock>
          {/* Тут має бути інтерактивна SVG або зображення з активними областями */}
          <img src="/path/to/diagram.png" alt="Схема запчастин" />
        </VisualSearchBlock>
        
        {/* Категорії Запчастин (Фільтр 1) */}
        <FilterSection>
          <h4>Категорії Запчастин</h4>
          {renderFilterMenu(mockCategories)}
        </FilterSection>

        {/* Фільтр Брендів Запчастин (Фільтр 2) */}
        <FilterSection>
          <h4>Брендів Запчастин</h4>
          <StyledCheckbox>
            Оригінал / OEM
          </StyledCheckbox>
        </FilterSection>
        
        {/* Інші Фільтри */}
        <FilterSection>
          <h4>Бренд / Виробник</h4>
          <FilterCheckboxGroup>
            {/* ... список брендів */}
            <StyledCheckbox>Bosch</StyledCheckbox>
            <StyledCheckbox>Nissens</StyledCheckbox>
            <StyledCheckbox>Denso</StyledCheckbox>
          </FilterCheckboxGroup>
        </FilterSection>

        <FilterSection>
          <h4>Ціна</h4>
          {/* Тут мав би бути компонент RangeSlider від Antd */}
          <p>400 ₴ - 15 000 ₴</p>
        </FilterSection>

        <FilterSection>
          <h4>Наявність</h4>
          <FilterCheckboxGroup>
            <StyledCheckbox>В наявності (Сьогодні)</StyledCheckbox>
            <StyledCheckbox>Під замовлення</StyledCheckbox>
          </FilterCheckboxGroup>
        </FilterSection>

      </Sidebar>

      {/* --- Основна Область Контенту --- */}
      <ContentArea>
        
        {/* Хлібні Крихти */}
        <BreadcrumbsContainer>
          <Breadcrumb
            items={[
              { title: 'Головна' },
              { title: 'Авто з США' },
              { title: 'Двигун' },
              { title: 'Система охолодження' },
            ]}
          />
        </BreadcrumbsContainer>

        {/* Заголовок */}
        <PageTitle>Радіатор системи охолодження для Jeep Compass (2020)</PageTitle>

        {/* Панель Сортування та Режиму Перегляду */}
        <Toolbar>
          <Dropdown overlay={sortMenu} trigger={['click']}>
            <span onClick={(e) => e.preventDefault()}>
              Сортувати за: **Популярністю** <DownOutlined />
            </span>
          </Dropdown>
          
          <ViewToggle>
            <Button 
              icon={<AppstoreOutlined />} 
              onClick={() => setViewMode('grid')} 
              className={viewMode === 'grid' ? 'active' : ''}
            />
            <Button 
              icon={<UnorderedListOutlined />} 
              onClick={() => setViewMode('list')} 
              className={viewMode === 'list' ? 'active' : ''}
            />
          </ViewToggle>
        </Toolbar>

        {/* Список Товарів */}
        {viewMode === 'grid' ? (
          <ProductGrid>
            {mockProducts.map(product => (
              <ProductCardComponent key={product.id} product={product} />
            ))}
          </ProductGrid>
        ) : (
          // Можна додати інший вигляд для 'list', але для скріншота залишаємо 'grid'
          <ProductGrid>
            {mockProducts.map(product => (
              <ProductCardComponent key={product.id} product={product} />
            ))}
          </ProductGrid>
        )}
        
        {/* Секція "Разом з цим часто купують" */}
        <CrossSellSection>
          <h2>Разом з цим часто купують</h2>
          <CrossSellGrid>
            {mockCrossSell.map(item => (
              <CrossSellCard key={item.id}>
                <img src={item.img || 'placeholder.png'} alt={item.title} />
                <div className="title">{item.title}</div>
                <div className="price">{item.price} ₴</div>
              </CrossSellCard>
            ))}
          </CrossSellGrid>
        </CrossSellSection>
        
      </ContentArea>
    </CatalogContainer>
  );
};

export default CatalogPage;