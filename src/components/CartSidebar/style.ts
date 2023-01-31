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
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: all 1s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1024px) {
    width: 50vw;
  }

  @media (max-width: 768px) {
    width: 80vw;
  }

  > :first-child {
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

  > :last-child {
    width: 100%;
    display: flex;
    flex-direction: column;

    > div {
      display: flex;
      justify-content: space-between;
      padding: 10px 20px;
      font-family: 'Montserrat';
      font-weight: 700;
      font-size: 28px;
      color: #fff;
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
  }
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 62%;
  overflow-y: scroll;
  align-items: center;
  justify-content: space-between;

  ::-webkit-scrollbar {
    width: 5px;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: #094299;
    border-radius: 10px;
  }

  > span {
    color: #fff;
    font-size: 28px;
    font-weight: 700;
  }

  > div {
    position: relative;
    background: #ffffff;
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    width: 85%;
    min-height: 95px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    margin: 8px 0;

    > button {
      position: absolute;
      top: -6px;
      right: -6px;
      color: #fff;
      background: #000;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      font-weight: 400;
      font-size: 10px;
      font-family: 'Montserrat';
      cursor: pointer;
    }

    > img {
      width: 15%;
    }

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      > :first-child {
        font-family: 'Montserrat';
        font-weight: 400;
        font-size: 13px;
        color: #2c2c2c;
        max-width: 113px;
        max-height: 90%;
        margin-left: 5px;
      }

      > :last-child {
        font-family: 'Montserrat';
        font-weight: 700;
        color: #2c2c2c;
        min-width: 62px;
      }
    }
  }
`;

export const ItemQuantity = styled.div`
  position: absolute;
  top: 20%;
  right: 30%;

  @media(max-width: 1024px) {
    scale: 1.2;
  }

  > span {
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 6px;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: transparent;
    border: 0.3px solid #bfbfbf;
    border-radius: 4px;
    width: 50px;
    height: 20px;

    > button {
      background: transparent;
      border: none;
      font-family: 'Montserrat';
      font-weight: 600;
      font-size: 12px;
      color: #2c2c2c;
      cursor: pointer;
      text-align: center;
    }

    > span {
      font-family: 'Montserrat';
      font-weight: 400;
      font-size: 8px;
      color: #2c2c2c;
      border-left: #bfbfbf 0.3px solid;
      border-right: #bfbfbf 0.3px solid;
      width: 16px;
      text-align: center;
    }
  }
`;
