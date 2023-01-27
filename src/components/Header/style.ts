import styled from 'styled-components';

import { ICartButtonProps } from '../../interfaces/props';

const HeaderContainer = styled.div`
  width: 100%;
  height: 101px;
  color: #ffffff;
  background: #0f52ba;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HomeIcon = styled.div`
  display: flex;
  width: 10vw;
  height: 80%;
  align-items: center;
  margin-left: 88px;
  justify-content: space-around;
  /* border: 1px solid #ffffff; */
  > :first-child {
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
  }
  > :last-child {
    position: relative;
    font-style: normal;
    font-weight: 300;
    left: 10px;
    top: 7px;
    font-size: 20px;
  }
`;

const CartButton = styled.button<ICartButtonProps>`
  display: flex;
  width: 90px;
  height: 45px;
  margin-right: 88px;
  border-radius: 8px;
  align-items: center;
  justify-content: space-evenly;
  background: #ffffff;
  border: none;
  cursor: pointer;

  :hover {
    scale: 1.01;
  }

  > img {
    width: 18px;
  }

  > span {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
  }
`;

export { HeaderContainer, HomeIcon, CartButton };
