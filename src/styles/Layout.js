import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  font-family: "Inter", "SF Pro Display", system-ui, sans-serif;
  color: var(--text-primary);
  background: var(--bg-primary);
  letter-spacing: 0.015em;
  line-height: 1.6;

  transition: background 0.3s ease, color 0.3s ease;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1480px;
  margin: 0 auto;
`;
