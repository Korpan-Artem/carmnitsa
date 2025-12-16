import styled from "styled-components";
import { Input, Select } from "antd";

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 0 40px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  overflow: hidden;

  &:hover {
    border-color: #2563eb;
  }
`;

export const StyledSelect = styled(Select)`
  flex-shrink: 0;
  min-width: 150px;
  font-size: 14px;
  border-right: 1px solid #d9d9d9;

  .ant-select-selector {
    display: flex;
    align-items: center;
    padding: 0 12px;
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
  }

  .ant-select-selection-item {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0;
  }

  .ant-select-arrow {
    color: #6b7280;
  }
`;


export const StyledInput = styled(Input)`
  flex: 1;
  border: none;
  font-size: 14px;
  height: 46px;
  line-height: 46px;
  padding: 0 12px;

  .ant-input-suffix {
    color: #6b7280;
    cursor: pointer;
  }

  &:focus, &:focus-within {
    border-color: inherit;
    box-shadow: 0 0 0 2px rgba(5, 145, 255, 0.1);
    outline: 0;
  }
`;
