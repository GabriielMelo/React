import styled from "styled-components";

export const Container = styled.main`
  max-width: 800px;
  height: 100%;
  margin: 4rem auto;
  padding: 0 2rem;

  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 2rem;
  flex-wrap: wrap;
  & > * {
    flex: 1 300px;
  }
`;
