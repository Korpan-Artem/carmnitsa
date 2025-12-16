import styled from "styled-components";
import { Input, Select } from "antd";

export const HeaderWrapper = styled.header`
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #eee;
  max-width: 1920px;
`;

export const TopBar = styled.div`
  height: 70px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  height: 36px;
  width: auto;
  object-fit: contain;
  display: block;
`;

export const SearchBlock = styled.div`
  flex: 1;
  max-width: 600px;
  margin: 0 40px;
`;

export const StyledInput = styled(Input)`
  height: 42px;
  border-radius: 6px;

  .ant-input {
    font-size: 14px;
  }

  .ant-input-prefix {
    margin-right: 8px;
  }

  .ant-input-suffix {
    color: #6b7280;
    cursor: pointer;
  }
`;

export const CategorySelect = styled(Select)`
  min-width: 90px;
  font-size: 14px;

  .ant-select-selector {
    padding: 0 !important;
    background: transparent !important;
  }

  .ant-select-selection-item {
    color: #374151;
    font-weight: 500;
  }
`;

export const IconsBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const IconItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  cursor: pointer;
  color: #1f2937;

  svg {
    font-size: 20px;
  }

  .badge {
    position: absolute;
    top: -6px;
    right: -8px;
    background: red;
    color: #fff;
    font-size: 10px;
    padding: 2px 5px;
    border-radius: 999px;
  }

  .price {
    font-weight: 600;
  }
`;

/* ---------- BOTTOM NAV ---------- */

export const BottomNav = styled.nav`
  height: 46px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  border-top: 1px solid #eee;
`;

export const NavItem = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #111827;
  cursor: pointer;

  &:hover {
    color: #2563eb;
  }
`;
