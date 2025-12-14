import styled from "styled-components";

export const StyledBoxMain = styled.div`
  background-color: #212121;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 20px;
`;

export const StyledBoxUp = styled.div`
  display: flex;
  justify-content: top;
  align-items: center;
  gap: 40px;
  width: 100%;
`;

export const StyledBoxDown = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  // border-top: 1px solid #515151;
`;

export const StyledBoxL = styled.div`
  display: flex;
  justify-content: top;
  align-items: center;
  width: 30vw;
  border-right: 1px solid #515151;
`;

export const StyledBoxR = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  flex-grow: 1;
`;

export const StyledBoxRU = styled.div`
  display: flex;
  justify-content: top;
  align-items: center;
  flex-grow: 1;
  width: 100%;
`;

export const StyledBoxRD = styled.div`
  display: flex;
  justify-content: top;
  align-items: center;
  // border-top: 1px solid #515151;
  flex-grow: 1;
  width: 100%;
`;

export const StyledImage = styled.img`
  width: 50px;
  height: auto;
  margin: 0px 20px;
`;

export const StyledText = styled.span`
  font-size: 14px;
  color: #515151;
  padding: 0 0 20px 20px;
`;

export const StyledTextTel = styled.span`
  font-size: 20px;
  color: #515151;
  padding: 0px 10px;
  text-transform: uppercase;
`;

export const LineUD = styled.div`
  width: 5px;
  height: 100%;
  background-color: #515151;
`;

export const LineRL = styled.div`
  width: 100%;
  height: 1px;
  background-color: #515151;
`;
