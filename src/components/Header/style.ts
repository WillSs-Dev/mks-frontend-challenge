import styled from 'styled-components';

import { ICartButtonProps } from '../../interfaces/props';

const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  color: #ffffff;
  background: #0f52ba;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 1.5s ease-in-out;

  @media (max-width: 1024px) {
    height: 70px;
  }

  @media (max-width: 768px) {
    height: 48px;
  }
`;

const HomeIcon = styled.div`
  display: flex;
  width: 10vw;
  align-items: center;
  margin-left: 88px;
  justify-content: space-around;

  > :first-child {
    font-weight: 600;
    font-size: 40px;

    @media (max-width: 768px) {
      font-size: 32px;
    }
  }
  > :last-child {
    position: relative;
    font-weight: 300;
    left: 10px;
    top: 7px;
    font-size: 20px;

    @media (max-width: 768px) {
      font-size: 18px;
      top: 5px;
      left: 8px;
    }
  }
`;

const CartButton = styled.button<ICartButtonProps>`
  display: flex;
  width: fit-content;
  padding: 0 10px;
  height: 45px;
  margin-right: 88px;
  border-radius: 8px;
  align-items: center;
  justify-content: space-evenly;
  background: #ffffff;
  border: none;
  cursor: pointer;

  @media (max-width: 1024px) {
    height: 40px;
  }

  @media (max-width: 768px) {
    height: 30px;
    width: 62px;
    margin-right: 44px;
  }

  :hover {
    scale: 1.01;
  }

  > img {
    width: 18px;
    margin-right: 5px;
  }

  > span {
    font-weight: 700;
    font-size: 18px;

    @media (max-width: 768px) {
    font-size: 12px;
  }
  }
`;

export { HeaderContainer, HomeIcon, CartButton };
