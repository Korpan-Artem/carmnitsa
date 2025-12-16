import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #eee;
  max-width: 1920px;
`;

/* ---------- TOP BAR ---------- */

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
  gap: 10px;
  font-size: 22px;
  font-weight: 700;
  color: #1e1e1e;

  svg {
    font-size: 22px;
  }
`;

export const LogoImage = styled.img`
  height: 36px;
  width: auto;
  object-fit: contain;
  display: block;
`;

/* ---------- SEARCH ---------- */

export const SearchBlock = styled.div`
  flex: 1;
  max-width: 600px;
  margin: 0 40px;
  padding: 0 12px;
  height: 42px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 12px;

  svg {
    font-size: 18px;
    color: #6b7280;
    cursor: pointer;
  }
`;

export const CategorySelect = styled.div`
  font-size: 14px;
  color: #374151;
  cursor: pointer;
  white-space: nowrap;
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 14px;
`;

/* ---------- ICONS ---------- */

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
