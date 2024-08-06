import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: navy;
`;

export const Wraper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 600px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 60px;
`;

export const ButtonsWraper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const HeaderTitle = styled.h1`
  color: white;
  font-size: 1.6rem;
`;
interface AuthButtonProps {
  isLogged: boolean;
}
export const AuthButton = styled.button<AuthButtonProps>`
  border: none;
  border-radius: 5px;
  height: 30px;
  padding: 0 1rem;
  background-color: ${(props) => (props.isLogged ? "red" : "green")};
  color: white;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  &:hover {
    cursor: pointer;
  }
  svg {
    font-size: 0.8rem;
  }
`;
export const CartButton = styled.button`
  border: none;
  border-radius: 5px;
  height: 30px;
  padding: 0 1rem;
  background-color: violet;
  color: black;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  &:hover {
    cursor: pointer;
  }
  svg {
    font-size: 0.8rem;
  }
`;
