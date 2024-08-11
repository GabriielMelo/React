import styled from "styled-components";

interface ContainerProps {
  showCart: boolean;
}

export const Container = styled.aside<ContainerProps>`
  position: fixed;
  top: 0;
  right: ${(props) => (props.showCart ? "0" : "-350px")};
  transition: right 1s;
  width: 300px;
  height: 100vh;
  padding: 2rem;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.h1``;

export const CartProductsList = styled.ul`
  list-style: none;
  padding: 2rem 0;
  gap: 1rem;
`;

export const CartProductItem = styled.li``;

export const CartTotal = styled.strong`
`