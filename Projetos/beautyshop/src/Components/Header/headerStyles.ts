import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 1000px;
  align-items: center;
  justify-content: space-between;
  padding: 10px   20px;
  background-color: pink;
  border-radius: 0px 0px 5px 5px;
  div:last-child {
    display: flex;
    gap: 10px;
  }
`;

export const PageTitle = styled.h1`
  font-size: 35px;
  padding-bottom: 12px;
`;

export const welcomeText = styled.span``;

export const CartButton = styled.button``;

export const LabelLogin = styled.label`
  font-size: 18px;
  padding: 10px 5px;
`;
export const LoginButton = styled.button`
  padding: 5px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: #A82AF5;
  color: white;
  width: 80px;
`;

export const InputUser = styled.input`
  padding: 7px 10px;
  border-radius: 5px;
  font-family: inherit; 
`;
export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
`;
