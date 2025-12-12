import styled from "styled-components";
import { Select } from "antd";

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
