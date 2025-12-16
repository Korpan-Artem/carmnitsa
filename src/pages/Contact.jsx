import React from 'react';
import { Form, Input, Button, Space, Collapse } from 'antd';
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined
} from '@ant-design/icons';
import {
  ContactContainer,
  PageHeader,
  PageDescription,
  ContactSections,
  ContactCard,
  MapSection,
  FeedbackFormSection,
  FAQSection,
  SocialMediaSection,
  BusinessHours
} from './ContactStyles';

const { Panel } = Collapse;
const { TextArea } = Input;

const ContactPage = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    alert('Ваше повідомлення відправлено! Ми зв\'яжемося з вами найближчим часом.');
  };

  // Дані для FAQ
  const faqData = [
    {
      key: '1',
      question: 'Як я можу знайти потрібну запчастину?',
      answer: 'Ви можете скористатися пошуком за VIN-кодом, номером деталі або назвою на нашій головній сторінці. Також доступний каталог за маркою та моделлю автомобіля.'
    },
    {
      key: '2',
      question: 'Які способи доставки ви пропонуєте?',
      answer: 'Ми пропонуємо швидку доставку по всій Україні через Нову Пошту, Укрпошту та кур\'єрські служби. Детальніше про терміни та вартість дивіться у розділі "Доставка".'
    },
    {
      key: '3',
      question: 'Чи є у вас гарантія на запчастини?',
      answer: 'Так, на всі наші запчастини надається офіційна гарантія від виробника. Деталі гарантійних умов ви можете знайти у відповідному розділі.'
    },
    {
      key: '4',
      question: 'Чи можу я повернути товар, якщо він мені не підійшов?',
      answer: 'Ви маєте право повернути товар протягом 14 днів з моменту покупки, за умови збереження товарного вигляду та упаковки. Зверніться до нашого менеджера для оформлення повернення.'
    },
  ];

  return (
    <ContactContainer>
      <PageHeader>Зв'яжіться з нами</PageHeader>
      <PageDescription>
        Маєте запитання чи потрібна допомога? Наша команда завжди готова допомогти вам!
        Оберіть зручний для вас спосіб зв'язку.
      </PageDescription>

      <ContactSections>
        {/* Телефон */}
        <ContactCard>
          <PhoneOutlined />
          <h3>Телефон</h3>
          <p>Ми готові відповісти на ваші дзвінки:</p>
          <a href="tel:+380XXYYYYYYY">+38 (0XX) YYY-YY-YY</a>
          <BusinessHours>
            <p><strong>Пн-Пт:</strong> 9:00 - 18:00</p>
            <p><strong>Сб:</strong> 10:00 - 16:00</p>
            <p><strong>Нд:</strong> Вихідний</p>
          </BusinessHours>
        </ContactCard>

        {/* Електронна пошта */}
        <ContactCard>
          <MailOutlined />
          <h3>Електронна пошта</h3>
          <p>Надішліть нам електронний лист у будь-який час:</p>
          <a href="mailto:info@karmnytsya.ua">info@carmnytsya.ua</a>
          <p>Ми намагаємося відповідати протягом 24 годин.</p>
        </ContactCard>

        {/* Адреса */}
        <ContactCard>
          <EnvironmentOutlined />
          <h3>Адреса</h3>
          <p>Наш офіс та склад:</p>
          <p>м. Київ, вул. Прикладівська, 123</p>
          <p>
            <a href="https://maps.app.goo.gl/your-location-link" target="_blank" rel="noopener noreferrer">
              Переглянути на карті
            </a>
          </p>
        </ContactCard>
      </ContactSections>

      {/* Карта */}
      <MapSection>
        <h2>Де ми знаходимося?</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.793085750031!2d30.522502815738596!3d50.45012567947754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce7c5c000001%3A0x1d0f8a9e6b0b0b0b!2z0LLRg9C70LjQstCwINCT0LDRgNCw0LLQuNC10L3QuNC5INC60LDRgNCw0LQsIDEyMywg0JrQuNC10LzRgdC60LLQsCwgMDQwNzA!5e0!3m2!1suk!2sua!4v1678901234567!5m2!1suk!2sua"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="map-embed"
          title="Наша локація на карті"
        ></iframe>
      </MapSection>

      {/* Форма зворотного зв'язку */}
      <FeedbackFormSection>
        <h2>Надішліть нам повідомлення</h2>
        <Form
          name="contact_form"
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
          style={{ maxWidth: 600, margin: '0 auto' }}
        >
          <Form.Item
            label="Ваше ім'я"
            name="name"
            rules={[{ required: true, message: 'Будь ласка, введіть ваше ім\'я!' }]}
          >
            <Input placeholder="Ім'я" />
          </Form.Item>

          <Form.Item
            label="Ваш Email"
            name="email"
            rules={[
              { required: true, message: 'Будь ласка, введіть ваш email!' },
              { type: 'email', message: 'Будь ласка, введіть дійсний email!' },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            label="Тема повідомлення"
            name="subject"
            rules={[{ required: true, message: 'Будь ласка, введіть тему повідомлення!' }]}
          >
            <Input placeholder="Тема" />
          </Form.Item>

          <Form.Item
            label="Ваше повідомлення"
            name="message"
            rules={[{ required: true, message: 'Будь ласка, введіть ваше повідомлення!' }]}
          >
            <TextArea rows={4} placeholder="Ваше повідомлення..." />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Відправити повідомлення
            </Button>
          </Form.Item>
        </Form>
      </FeedbackFormSection>

      {/* Часті питання (FAQ) */}
      <FAQSection>
        <h2>Часто задавані питання</h2>
        <Collapse accordion defaultActiveKey={['1']}>
          {faqData.map(item => (
            <Panel header={item.question} key={item.key}>
              <p>{item.answer}</p>
            </Panel>
          ))}
        </Collapse>
      </FAQSection>

      {/* Соціальні мережі */}
      <SocialMediaSection>
        <h2>Слідкуйте за нами в соцмережах</h2>
        <Space size="large" className="social-icons">
          <a href="https://facebook.com/carmnytsya" target="_blank" rel="noopener noreferrer">
            <FacebookOutlined />
          </a>
          <a href="https://instagram.com/carmnytsya" target="_blank" rel="noopener noreferrer">
            <InstagramOutlined />
          </a>
          <a href="https://youtube.com/carmnytsya" target="_blank" rel="noopener noreferrer">
            <YoutubeOutlined />
          </a>
          <a href="https://t.me/carmnytsya" target="_blank" rel="noopener noreferrer">
            {/* <TelegramOutlined /> */}
          </a>
        </Space>
      </SocialMediaSection>

    </ContactContainer>
  );
};

export default ContactPage;