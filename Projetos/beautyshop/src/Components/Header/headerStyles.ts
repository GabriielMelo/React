import styled from "styled-components";

interface LoginProps {
  isLogged: boolean;
}
//*** Containers do Header
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
  padding: 10px 20px;
  background-color: pink;
  border-radius: 0px 0px 5px 5px;

  

  div:last-child {
    display: flex;
    gap: 10px;
  }
`;

//*** Titulos e subtitulos
export const PageTitle = styled.h1`
  font-size: 35px;
  padding-bottom: 12px;
`;

export const WelcomeText = styled.span``;

// *** Cart Container
export const CartContainer = styled.div<LoginProps>`
  display: ${(props) => (props.isLogged ? "flex" : "none")};
  gap: 1rem;
`;

export const CartButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: #a82af5;
  color: black;
  cursor: pointer;
  display: flex;
  svg{
    font-size: 18px;
    
    color: white;
  }
`;

export const LogoutButton = styled.button`
  padding: 5px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: red;
  color: white;
  width: 70px;
`;
// *** Formulário Login componentes :
export const FormLogin = styled.form<LoginProps>`
  display: ${(props) => (props.isLogged ? "none" : "flex")};
  flex-direction: column;
`;

export const LabelLogin = styled.label`
  font-size: 18px;
  padding: 10px 5px;
`;

export const InputUser = styled.input`
  padding: 7px 10px;
  border-radius: 5px;
  font-family: inherit;
`;

export const LoginButton = styled.button`
  padding: 5px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: #a82af5;
  color: white;
  width: 80px;
`;
