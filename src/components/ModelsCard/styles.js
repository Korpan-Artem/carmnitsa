import styled from "styled-components";

export const StyledBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 50px 20px;
  background: var(--bg-primary, #f5f5f5);
`;

export const StyledCard = styled.div`
  width: 280px;
  max-width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background-color: #ffffff;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 20px;

  &:hover button {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
`;

export const StyledButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.8);
  opacity: 0;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #060403;
  background-color: rgba(251, 200, 17, 0.9);
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  cursor: pointer;
  transition: opacity 0.3s ease, transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    background-color: rgba(254, 233, 158, 0.9);
  }
`;

export const StyledText = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #060403;
  margin: 12px 0 4px 0;
  line-height: 1.2;
  text-align: center;
`;