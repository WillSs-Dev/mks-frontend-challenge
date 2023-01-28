import styled from 'styled-components';

import { ICartSidebarProps } from '../../interfaces/props';

export const Container = styled.aside<ICartSidebarProps>`
  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;
  background: #0f52ba;
  height: 100vh;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  width: 30vw;
  transform: translate(${({ show }) => (show ? '0' : '100%')});
  opacity: ${({show}) => (show ? 1 : 0)};
  transition: all 1.5s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1024px) {
    width: 50vW;
  }

  @media (max-width: 768px) {
    width: 80vW;
  }

  > div {
    color: #fff;
    padding: 20px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > h2 {
      font-family: 'Montserrat';
      font-weight: 700;
      font-size: 27px;
    }

    > button {
      color: #fff;
      background: #000;
      border-radius: 50%;
      width: 38px;
      height: 38px;
      font-weight: 400;
      font-size: 28px;
      font-family: 'Montserrat';
      cursor: pointer;
    }
  }

  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000;
    width: 100%;
    height: 97px;
    color: #fff;
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 28px;
    cursor: pointer;
    padding-bottom: 5px;
  }
`;
