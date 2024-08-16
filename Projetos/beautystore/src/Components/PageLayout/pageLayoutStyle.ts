import { styled } from "styled-components";

export const PageContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 1000px;
  background-color: white;
  min-height: 100vh;
  margin-top: 5px;
  padding: 25px;
  border-radius: 5px;
`;