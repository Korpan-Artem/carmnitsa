import React, { useState } from 'react';
import { Breadcrumb, Tabs, InputNumber, Button, Space, Collapse, Table } from 'antd';
import {
  CheckCircleOutlined,
  HeartOutlined,
  ShareAltOutlined,
  ShoppingOutlined,
  StarFilled,
} from '@ant-design/icons';
import {
  ProductContainer,
  BreadcrumbsContainer,
  ProductLayout,
  MediaGallery,
  MainImage,
  ImageThumbnail,
  InfoBlock,
  Title,
  SubInfo,
  ManufacturerInfo,
  CompatibilityBlock,
  PriceAndActions,
  PriceRow,
  PriceDisplay,
  AvailabilityTag,
  QuantitySelector,
  ActionButtons,
  AlternativesSection,
  StyledTabs,
  SpecsTable,
  CrossSellSection,
  CrossSellGrid,
  SimpleProductCard
} from './ProductStyles';

const productData = {
  title: 'Радіатор охолодження двигуна (+AC) Nissens',
  article: '6825005AB',
  oem: '6825005AB',
  manufacturer: 'Nissens',
  status: 'in-stock',
  price: '4 850',
  delivery: 'Сьогодні',
  rating: 4.8,
  reviewsCount: 124,
  description: 'Високоякісний радіатор охолодження двигуна, ідеально сумісний з Jeep Compass (2020) 2.4L. Забезпечує оптимальне відведення тепла та стійкість до корозії.',
  images: [
    { src: '/path/to/radiator_main.png', alt: 'Головне зображення' },
    { src: '/path/to/radiator_view1.png', alt: 'Вигляд 1' },
    { src: '/path/to/radiator_360.png', alt: '360°' },
    { src: '/path/to/radiator_view2.png', alt: 'Вигляд 2' },
  ],
  specs: [
    { key: 'Тип деталі', value: 'Радіатор охолодження' },
    { key: 'Виробник', value: 'Nissens' },
    { key: 'Матеріал', value: 'Алюміній' },
    { key: 'Тип КПП', value: 'Автоматична' },
    { key: 'Кондиціонер', value: 'З кондиціонером' },
    { key: 'Гарантія', value: '12 місяців' },
  ],
  compatibleCars: [
    { make: 'Jeep', model: 'Compass', year: '2018-2022', engine: '2.4L' },
    { make: 'Jeep', model: 'Renegade', year: '2019-2022', engine: '1.8L, 2.4L' },
  ],
};

const mockAlternatives = [
    { id: 101, title: 'Радіатор Denso', price: '3 120', img: '/path/to/denso_radiator.png' },
    { id: 102, title: 'Радіатор AVA', price: '3 590', img: '/path/to/ava_radiator.png' },
    { id: 103, title: 'Оригінал Mopar', price: '8 900', img: '/path/to/mopar_radiator.png' },
];

const mockCrossSell = [
    { id: 1, title: 'Антифриз Concentrate G12', price: '350', img: '/path/to/antifreeze.png' },
    { id: 2, title: 'Промивка системи', price: '210', img: '/path/to/flush.png' },
    { id: 3, title: 'Заглушка радіатора', price: '95', img: '/path/to/cap.png' },
];

// --- Компонент Таблиці Характеристик ---
const SpecsComponent = ({ specs }) => {
  const dataSource = specs.map((spec, index) => ({
    key: index,
    attribute: spec.key,
    value: spec.value,
  }));

  const columns = [
    { title: 'Характеристика', dataIndex: 'attribute', key: 'attribute' },
    { title: 'Значення', dataIndex: 'value', key: 'value' },
  ];

  return <SpecsTable dataSource={dataSource} columns={columns} pagination={false} />;
};

// --- Компонент Сторінки Товару ---
const ProductPage = () => {
  const [currentImage, setCurrentImage] = useState(productData.images[0].src);
  const [quantity, setQuantity] = useState(1);

  const tabsItems = [
    {
      key: 'description',
      label: 'Опис та Особливості',
      children: <div className="tab-content">{productData.description}</div>,
    },
    {
      key: 'specs',
      label: 'Характеристики',
      children: <div className="tab-content"><SpecsComponent specs={productData.specs} /></div>,
    },
    {
      key: 'compatibility',
      label: 'Сумісність',
      children: <div className="tab-content">
          <p>Ця деталь гарантовано підходить до наступних моделей:</p>
          <ul>
              {productData.compatibleCars.map((car, index) => (
                  <li key={index}>{car.make} {car.model} ({car.year}), {car.engine}</li>
              ))}
          </ul>
      </div>,
    },
    {
      key: 'reviews',
      label: `Відгуки (${productData.reviewsCount})`,
      children: <div className="tab-content">
        <p>Рейтинг: {productData.rating} <StarFilled style={{ color: '#ffc107' }} /></p>
        <p>Тут буде розміщений блок з реальними відгуками користувачів та форма для додавання нового відгуку.</p>
      </div>,
    },
  ];

  return (
    <ProductContainer>
      
      {/* Хлібні Крихти */}
      <BreadcrumbsContainer>
        <Breadcrumb
          items={[
            { title: 'Головна' },
            { title: 'Каталог запчастин' },
            { title: 'Система охолодження' },
            { title: 'Радіатори' },
          ]}
        />
      </BreadcrumbsContainer>

      {/* Основний Контент */}
      <ProductLayout>
        
        {/* Галерея та Зображення */}
        <MediaGallery>
          <MainImage>
            {/*  */}
            <img src={currentImage} alt={productData.title} />
          </MainImage>
          <Space size={10} wrap>
            {productData.images.map((image, index) => (
              <ImageThumbnail 
                key={index}
                src={image.src}
                alt={image.alt}
                $active={currentImage === image.src}
                onClick={() => setCurrentImage(image.src)}
              />
            ))}
          </Space>
        </MediaGallery>

        {/* Інформація про Товар та Купівля */}
        <InfoBlock>
          <Title>{productData.title}</Title>
          
          <SubInfo>
            Артикул: <strong>{productData.article}</strong> | OEM: <strong>{productData.oem}</strong>
          </SubInfo>
          
          <ManufacturerInfo>
            {/*  */}
            <img src="/path/to/nissens_logo.png" alt={productData.manufacturer} />
            <span>{productData.manufacturer}</span>
          </ManufacturerInfo>
          
          {/* Блок Сумісності */}
          <CompatibilityBlock>
            <CheckCircleOutlined />
            Гарантовано підходить до **Jeep Compass 2.4L (2020)**
          </CompatibilityBlock>
          
          {/* Ціна та Дії */}
          <PriceAndActions>
            <PriceRow>
              <PriceDisplay>
                <span>{productData.price}</span>
                <span className="currency">₴</span>
              </PriceDisplay>
              <AvailabilityTag className={productData.status === 'in-stock' ? 'in-stock' : 'on-order'}>
                {productData.status === 'in-stock' ? `В НАЯВНОСТІ (${productData.delivery})` : `ПІД ЗАМОВЛЕННЯ (${productData.delivery})`}
              </AvailabilityTag>
            </PriceRow>
            
            <QuantitySelector>
              <span>Кількість:</span>
              <InputNumber 
                min={1} 
                max={100} 
                defaultValue={1} 
                onChange={setQuantity}
                style={{ width: 100 }}
              />
            </QuantitySelector>
            
            <ActionButtons>
              <Button type="primary" size="large" icon={<ShoppingOutlined />} className="main-buy-btn">
                Купити
              </Button>
              <Button size="large" icon={<HeartOutlined />} className="secondary-btn" />
              <Button size="large" icon={<ShareAltOutlined />} className="secondary-btn" />
            </ActionButtons>
          </PriceAndActions>
          
          {/* Блок Альтернатив (якщо товар дорогий чи під замовлення) */}
          {productData.status !== 'in-stock' && (
              <AlternativesSection>
                  Цей товар під замовлення. <a href="#alternatives">Перегляньте доступні аналоги</a>, які є в наявності.
              </AlternativesSection>
          )}

          {/* Інформація про Доставку та Оплату (Міні-FAQ) */}
          <Collapse ghost expandIconPosition="end">
              <Collapse.Panel header="Доставка та Оплата" key="1">
                  <p>Доставка Новою Поштою або Укрпоштою. Оплата: карткою, післяплата або безготівковий розрахунок.</p>
              </Collapse.Panel>
              <Collapse.Panel header="Гарантія та Повернення" key="2">
                  <p>Гарантія 12 місяців від виробника. Повернення товару протягом 14 днів, деталі дивіться у розділі "Повернення".</p>
              </Collapse.Panel>
          </Collapse>

        </InfoBlock>
      </ProductLayout>

      {/* Таби Характеристик */}
      <StyledTabs defaultActiveKey="description" items={tabsItems} />

      {/* Схожі Товари (Cross-Sell) */}
      <CrossSellSection>
        <h2>Схожі товари або супутні послуги</h2>
        <CrossSellGrid>
          {mockAlternatives.map(item => (
            <SimpleProductCard key={item.id}>
              <img src={item.img || 'placeholder.png'} alt={item.title} />
              <div className="title">{item.title}</div>
              <div className="price">{item.price} ₴</div>
              <Button type="primary" size="small" style={{ marginTop: '10px' }}>Купити</Button>
            </SimpleProductCard>
          ))}
          {mockCrossSell.map(item => (
            <SimpleProductCard key={item.id}>
              <img src={item.img || 'placeholder.png'} alt={item.title} />
              <div className="title">{item.title}</div>
              <div className="price">{item.price} ₴</div>
              <Button type="default" size="small" style={{ marginTop: '10px' }}>Додати</Button>
            </SimpleProductCard>
          ))}
        </CrossSellGrid>
      </CrossSellSection>

    </ProductContainer>
  );
};

export default ProductPage;