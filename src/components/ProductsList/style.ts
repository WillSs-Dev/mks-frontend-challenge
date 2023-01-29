import styled from 'styled-components';

import { IAddToCartButtonProps, ICardProps } from '../../interfaces/props';

const Container = styled.main`
  min-height: 80vh;
  margin: 4.5% 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 22px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled.div<ICardProps>`
  background: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  height: 285px;
  width: 217.56px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  > img {
    max-height: 138px;
    transition: 0.2s;
    cursor: pointer;

    :hover { 
      opacity: 0.9;
      scale: 1.01;
    }
  }

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90%;

    @media (max-width: 1024px) {
      flex-direction: column;
    }

    > span {
      font-weight: 400;
      font-size: 16px;
      color: #2c2c2c;
    }

    > div {
      padding: 4px 8px;
      color: #fff;
      background: #373737;
      border-radius: 5px;
      width: max-content;
      font-weight: 700;
      font-size: 15px;
    }
  }

  > p {
    margin: 0 10px;
    font-size: 10px;
    font-weight: 300;
    color: #2c2c2c;
  }

`;

const AddToCartButton = styled.button<IAddToCartButtonProps>`
    width: 100%;
    background: #0f52ba;
    border-radius: 0px 0px 8px 8px;
    height: 31.91px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    color: #fff;
    gap: 10px;
    cursor: pointer;
    transition: 0.2s;

    :hover { 
      opacity: 0.9;
      scale: 1.01;
    }
  `;

export { Container, Card, AddToCartButton };
