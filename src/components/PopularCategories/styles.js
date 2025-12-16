import styled from "styled-components";

export const CategoriesHeader = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: #111827;
  text-align: center;
  margin-bottom: 8px;
`;

export const CategoriesSubtitle = styled.p`
  font-size: 1px;
  color: #6b7280;
  text-align: center;
  margin-bottom: 24px;
`;

export const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  margin: 0 4px;
  background: #f9fafb;
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);
  min-height: 180px;
  min-width: 180px;
  border: 1px solid #e5e7eb;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 6px 16px rgba(0,0,0,0.12);
    border-color: #d1d5db;
    background: #fff;
  }
`;

export const CategoryIcon = styled.img`
  height: 80px;
  margin-bottom: 14px;
  object-fit: contain;
`;

export const CategoryName = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 6px;
`;

export const CategoryCount = styled.div`
  font-size: 13px;
  color: #6b7280;
`;

export const ArrowButton = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.right ? "right: -12px;" : ""}
  ${props => props.left ? "left: -12px;" : ""}
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #cbd5e1;
  background: rgba(255, 255, 255, 0.8);
  color: #111827;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
  font-size: 18px;
  transition: all 0.2s;

  &:hover {
    background: #fff;
  }
`;
