import styled from "styled-components";

export const StyledText = styled.span`
  font-size: 26px;
  font-family: Helvetica, sans-serif;
  color: #060403;
  font-weight: bold;
  padding: 0 0 10px 0;
`;

export const StyledBox = styled.div`
  height: 50vh;
  width: 100vw;
  text-align: center;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledCard = styled.div`
  width: 500px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 40px;
  margin: 0 20px;
  background-color: #fefefe;
  transition: width 0.3s ease, background-color 0.3s ease;
   &:hover {
    background-color: #f8ca20;
`;

export const StyledImage = styled.img`
  width: 200px;
  height: auto;
  margin: 40px 0 0 0;
`;

export const StyledButton = styled.button`
  font-size: 26px;
  color: #060403;
  width: 250px;
  height: 50px;
  margin: 0 0 40px 0;
  border: none;
  border-radius: 25px;
  background-color: #fbc811;
  transition: width 0.3s ease, background-color 0.3s ease;
   &:hover {
    background-color: #fee99e;
`;
