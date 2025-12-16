import styled from 'styled-components';
import { Button, Input, Form } from 'antd';

// --- Повторне використання кольорів з CatalogPageStyles ---
const PrimaryColor = '#007bff'; // Синій колір для акцентів
const GreyText = '#6c757d'; 
const LightGreyBackground = '#f8f9fa';
const DarkText = '#343a40';

export const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px 80px 20px;
  background-color: #fff;
`;

export const PageHeader = styled.h1`
  font-size: 38px;
  font-weight: 700;
  color: ${DarkText};
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const PageDescription = styled.p`
  font-size: 18px;
  color: ${GreyText};
  text-align: center;
  margin-bottom: 50px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 30px;
  }
`;

export const ContactSections = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 40px;
  }
`;

export const ContactCard = styled.div`
  background-color: ${LightGreyBackground};
  border-radius: 10px;
  padding: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);

  .anticon {
    font-size: 40px;
    color: ${PrimaryColor};
    margin-bottom: 20px;
  }

  h3 {
    font-size: 24px;
    font-weight: 600;
    color: ${DarkText};
    margin-bottom: 15px;
  }

  p {
    font-size: 16px;
    color: ${GreyText};
    line-height: 1.5;
    margin-bottom: 10px;
  }

  a {
    color: ${PrimaryColor};
    text-decoration: none;
    font-weight: 500;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const MapSection = styled.div`
  margin-bottom: 60px;

  h2 {
    font-size: 30px;
    font-weight: 700;
    color: ${DarkText};
    text-align: center;
    margin-bottom: 30px;

    @media (max-width: 768px) {
      font-size: 24px;
      margin-bottom: 20px;
    }
  }

  .map-embed {
    width: 100%;
    height: 450px;
    border: 0;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);

    @media (max-width: 768px) {
      height: 300px;
    }
  }
`;

export const FeedbackFormSection = styled.div`
  background-color: ${LightGreyBackground};
  border-radius: 10px;
  padding: 50px;
  margin-bottom: 60px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 30px;
  }

  h2 {
    font-size: 30px;
    font-weight: 700;
    color: ${DarkText};
    text-align: center;
    margin-bottom: 30px;

    @media (max-width: 768px) {
      font-size: 24px;
      margin-bottom: 20px;
    }
  }

  .ant-form-item-label {
    text-align: left;
    label {
      font-weight: 600;
      color: ${DarkText};
    }
  }

  .ant-input, .ant-input-textarea {
    border-radius: 6px;
    padding: 10px 15px;
    &:focus {
      border-color: ${PrimaryColor};
      box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.2);
    }
  }

  .ant-btn-primary {
    background-color: ${PrimaryColor};
    border-color: ${PrimaryColor};
    height: 45px;
    font-size: 18px;
    font-weight: 600;
    border-radius: 6px;
    &:hover {
      background-color: #0056b3;
      border-color: #0056b3;
    }
  }
`;

export const FAQSection = styled.section`
  margin-bottom: 60px;
  h2 {
    font-size: 30px;
    font-weight: 700;
    color: ${DarkText};
    text-align: center;
    margin-bottom: 30px;

    @media (max-width: 768px) {
      font-size: 24px;
      margin-bottom: 20px;
    }
  }
`;

export const SocialMediaSection = styled.div`
  text-align: center;
  padding-top: 40px;
  border-top: 1px solid #e9ecef;

  h2 {
    font-size: 26px;
    font-weight: 600;
    color: ${DarkText};
    margin-bottom: 20px;
  }

  .social-icons {
    display: flex;
    justify-content: center;
    gap: 20px;
    .anticon {
      font-size: 36px;
      color: ${GreyText};
      transition: color 0.3s;
      &:hover {
        color: ${PrimaryColor};
      }
    }
  }
`;

export const BusinessHours = styled.div`
    margin-top: 15px;
    p {
        margin-bottom: 5px;
    }
    strong {
        color: ${DarkText};
    }
`;