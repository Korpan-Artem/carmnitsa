import styled from "styled-components";
import { Select } from "antd";

export const BannerWrapper = styled.section`
  max-width: 1250px;
  min-height: 40vh;
  margin: 0 auto;
  background: #ffffff;
  padding: 0 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 1200px) {
    padding: 36px 60px;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
    padding: 28px 20px;
  }
`;

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  max-width: 600px;

  @media (max-width: 992px) {
    align-items: center;
  }
`;

export const BannerTextSmall = styled.p`
  font-size: 20px;
  color: #2b2b2b;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin: 0;
`;

export const BannerTextLarge = styled.h1`
  font-size: 54px;
  line-height: 1.15;
  color: #000000;
  font-weight: 800;
  margin: 0;

  strong {
    color: #0057b7;
  }

  @media (max-width: 768px) {
    font-size: 38px;
  }
`;

export const BannerImageWrapper = styled.div`
  position: relative;
  width: 520px;
  user-select: none;

  @media (max-width: 1200px) {
    width: 460px;
  }

  @media (max-width: 992px) {
    width: 70%;
    margin-top: 24px;
  }

  img {
    width: 100%;
    object-fit: contain;
    pointer-events: none;
    display: block;
  }

  &::after {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    top: 56%;
    right: 7%;
    opacity: 0;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,165,0,1) 0%, rgba(255,165,0,0.0) 60%);
    box-shadow: 0 0 20px 12px rgba(255,165,0,0.6);
    animation: blinkTurnSignal 1s infinite;
  }

  &::before {
    content: "";
    position: absolute;
    width: 6px;
    height: 6px;
    top: 42%;
    left: 9%;
    opacity: 0;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,54,54,1) 0%, rgba(255,54,54,0.0) 60%);
    box-shadow: 0 0 20px 12px rgba(255,54,54,0.6);
    animation: blinkTurnSignal 1s infinite;
  }

  &::after,
  &::before {
    animation: blinkTurnSignal 1.5s infinite linear;
  }

  @keyframes blinkTurnSignal {
    0%, 50%, 100% { opacity: 0; }
    25%, 75% { opacity: 1; }
  }
`;

export const FiltersWrapper = styled.div`
  width: 100%;
  margin-top: 16px;
  display: flex;
  justify-content: center;
`;

export const FiltersInner = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  max-width: 1400px;
  padding: 0 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 6px;
    align-items: stretch;
  }
`;

export const StyledSelectWrapper = styled(Select)`
  width: 420px;
  min-width: 220px;

  @media (max-width: 768px) {
    width: 100% !important;
  }

  .ant-select-arrow,
  .ant-select-selection-item-remove,
  .ant-select-selection-item-icon {
    display: none !important;
    opacity: 0 !important;
  }

  .ant-select-selector {
    height: 64px !important;
    padding: 0 18px !important;
    background: #ffffff;
    border: 2px solid #0057b7;
    border-radius: 14px !important;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    color: #000000;
    box-shadow: 0 8px 24px rgba(0, 87, 183, 0.10);
    transition: all 0.22s cubic-bezier(.2,.9,.2,1);
  }

  &:hover .ant-select-selector {
    border-color: #004a9d !important;
    box-shadow: 0 12px 30px rgba(0, 87, 183, 0.14);
  }

  &.ant-select-open .ant-select-selector {
    border-color: #003c82 !important;
    box-shadow: 0 0 0 4px rgba(0, 87, 183, 0.14);
  }

  .ant-select-selection-placeholder {
    color: #444;
    opacity: 0.9;
    font-weight: 600;
  }

  .ant-select-prefix {
    color: #0057b7;
    font-size: 20px;
    margin-right: 12px;
    display: flex;
    align-items: center;
  }

  .ant-select-selection-item,
  .ant-select-selection-placeholder {
    line-height: 1;
    display: flex;
    align-items: center;
    height: 100%;
  }

  .ant-select-dropdown {
    border-radius: 12px;
    overflow: hidden;
  }

  .ant-select-item-option {
    font-weight: 600;
    padding: 12px 16px;
  }

  .ant-select-item-option-active:not(.ant-select-item-option-disabled) {
    background: rgba(0, 87, 183, 0.06);
  }
`;
