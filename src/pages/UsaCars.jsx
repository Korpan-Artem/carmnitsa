import { useState } from 'react';
import { Select, Button, InputNumber, Space, Card, Form } from 'antd';
import { CalculatorOutlined, CarOutlined, DollarOutlined, PhoneOutlined, SafetyOutlined } from '@ant-design/icons';
import {
  USACarsContainer,
  HeaderSection,
  CalculatorSection,
  CalculatorGrid,
  CalcField,
  CalculateButton,
  ResultsBlock,
  FinalPrice,
  DetailsButton,
  PopularCarsSection,
  CarGrid,
  CarCard,
  CarPrice,
  ExpertCTACard,
} from './UsaCarsStyles';

const { Option } = Select;
const { Meta } = Card;

// --- Дані-заглушки ---
const mockCars = [
  { id: 1, title: 'Ford Fusion SE (2020)', mileage: '35 000 mi', damage: 'Minor front', auctionPrice: 7000, finalPrice: '11 900' },
  { id: 2, title: 'Jeep Compass Limited (2019)', mileage: '42 000 mi', damage: 'Side damage', auctionPrice: 8500, finalPrice: '13 500' },
  { id: 3, title: 'Tesla Model 3 Long Range (2021)', mileage: '15 000 mi', damage: 'Light hail', auctionPrice: 25000, finalPrice: '31 000' },
];

const auctionOptions = [
    { value: 'copart', label: 'Copart' },
    { value: 'iaai', label: 'IAAI' },
    { value: 'manheim', label: 'Manheim' },
];

const yearOptions = [
    { value: 2023, label: '2023' },
    { value: 2022, label: '2022' },
    { value: 2021, label: '2021' },
    { value: 2020, label: '2020' },
    { value: 2019, label: '2019' },
    { value: 2018, label: '2018' },
];

// --- Функція розрахунку (спрощена) ---
const calculateCarPrice = (values) => {
    // Дуже спрощений розрахунок для демонстрації:
    // Аукціон + 10% мито + 2000$ (логістика/брокер)
    const auction = values.auctionPrice || 0;
    const yearFactor = (new Date().getFullYear() - values.year) * 0.005; // Вплив віку
    
    const logistics = 2000;
    const duty = auction * (0.10 + yearFactor);
    const services = 1500;
    
    return Math.round(auction + logistics + duty + services);
};

const GreyText = '#6c757d'; 
const DarkText = '#343a40';

const USACarsPage = () => {
    const [form] = Form.useForm();
    const [calculatedPrice, setCalculatedPrice] = useState(0);

    const handleCalculate = (values) => {
        const result = calculateCarPrice(values);
        setCalculatedPrice(result);
    };

    return (
        <USACarsContainer>
            <HeaderSection>
                <h1>Автомобілі зі США під ключ</h1>
                <p>
                    Ваш надійний партнер у пригоні якісних авто з американських аукціонів. 
                    Прозорий розрахунок, повний супровід та гарантія на кожному етапі.
                </p>
            </HeaderSection>

            {/* --- 1. Калькулятор Пригону (Фокус 2026) --- */}
            <CalculatorSection>
                <h2><CalculatorOutlined /> Розрахуйте повну вартість авто</h2>
                
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleCalculate}
                    initialValues={{ auctionType: 'copart', year: 2020 }}
                >
                    <CalculatorGrid>
                        {/* Поле 1: Тип Аукціону */}
                        <CalcField>
                            <span className="label">Аукціон</span>
                            <Form.Item name="auctionType" noStyle>
                                <Select placeholder="Оберіть аукціон">
                                    {auctionOptions.map(opt => <Option key={opt.value} value={opt.value}>{opt.label}</Option>)}
                                </Select>
                            </Form.Item>
                        </CalcField>
                        
                        {/* Поле 2: Ціна на Аукціоні */}
                        <CalcField>
                            <span className="label">Ціна авто (USD)</span>
                            <Form.Item 
                                name="auctionPrice"
                                rules={[{ required: true, message: 'Введіть ціну!' }]}
                                noStyle
                            >
                                <InputNumber 
                                    min={1000} 
                                    formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 
                                    parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                    placeholder="Наприклад, 7500"
                                />
                            </Form.Item>
                        </CalcField>

                        {/* Поле 3: Рік Випуску */}
                        <CalcField>
                            <span className="label">Рік випуску</span>
                            <Form.Item name="year" noStyle>
                                <Select placeholder="Оберіть рік">
                                    {yearOptions.map(opt => <Option key={opt.value} value={opt.value}>{opt.label}</Option>)}
                                </Select>
                            </Form.Item>
                        </CalcField>

                        {/* Поле 4: Кнопка Розрахунку */}
                        <Form.Item noStyle>
                            <CalculateButton htmlType="submit" block>
                                Розрахувати
                            </CalculateButton>
                        </Form.Item>
                    </CalculatorGrid>
                </Form>

                {/* Блок Результату */}
                <ResultsBlock>
                    <div>
                        <span style={{ fontSize: 16, fontWeight: 600, color: DarkText }}>*Це орієнтовний розрахунок.</span>
                        <p style={{ margin: 0, color: GreyText }}>Для точного розрахунку зв'яжіться з експертом.</p>
                    </div>

                    <Space size="large" style={{ marginTop: 10 }}>
                        <FinalPrice>
                            <div className="label">Орієнтовна фінальна вартість (під ключ):</div>
                            {calculatedPrice > 0 ? (
                                <div className="price">
                                    <DollarOutlined style={{ fontSize: 30 }} /> 
                                    {new Intl.NumberFormat('uk-UA').format(calculatedPrice)}
                                </div>
                            ) : (
                                <div className="price" style={{ color: GreyText }}>
                                    0
                                </div>
                            )}
                        </FinalPrice>
                        <DetailsButton type="default" icon={<SafetyOutlined />}>
                            Запит на детальний прорахунок
                        </DetailsButton>
                    </Space>
                </ResultsBlock>

            </CalculatorSection>

            {/* --- 2. Список Популярних Авто --- */}
            <PopularCarsSection>
                <h2><CarOutlined /> Актуальні пропозиції з аукціонів</h2>
                
                <CarGrid>
                    {mockCars.map(car => (
                        <CarCard
                            key={car.id}
                            hoverable
                            cover={<img alt={car.title} src={`/path/to/${car.id}.png`} />} // Замініть на реальні шляхи
                        >
                            <Meta
                                title={car.title}
                                description={
                                    <>
                                        <span>Пробіг: **{car.mileage}**</span>
                                        <span>Пошкодження: **{car.damage}**</span>
                                    </>
                                }
                            />
                            <CarPrice>
                                {new Intl.NumberFormat('uk-UA').format(car.finalPrice)} $
                                <span className="auction">Аукціон: {new Intl.NumberFormat('uk-UA').format(car.auctionPrice)} $</span>
                            </CarPrice>
                            <Button 
                                type="primary" 
                                block 
                                style={{ marginTop: 15 }} 
                                href={`/cars/${car.id}`}
                            >
                                Детальніше
                            </Button>
                        </CarCard>
                    ))}
                </CarGrid>
            </PopularCarsSection>

            {/* --- 3. Секція CTA (Зв'язок з Експертом) --- */}
            <ExpertCTACard>
                <h2>Не знайшли потрібне авто?</h2>
                <p>Наші експерти знайдуть, куплять і доставлять будь-яке авто з аукціонів США під ваш бюджет та вимоги.</p>
                <Button type="default" icon={<PhoneOutlined />}>
                    Консультація з експертом
                </Button>
            </ExpertCTACard>
        </USACarsContainer>
    );
};

export default USACarsPage;