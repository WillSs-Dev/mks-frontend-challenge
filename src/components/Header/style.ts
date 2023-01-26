import styled from 'styled-components';

const HeaderContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 101px;
  left: 0px;
  top: 0px;
  color: #ffffff;
  background: #0f52ba;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HomeIcon = styled.div`
  display: flex;
  width: 10vW;
  height: 80%;
  align-items: center;
  margin-left: 88px;
  justify-content: space-around;
  /* border: 1px solid #ffffff; */
  > span {
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    margin-bottom: 8px;
  }
  &:nth-child(1) {
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 19px;
  }
`;

const CartButton = styled.button`
  display: flex;
  width: 90px;
  height: 45px;
  margin-right: 88px;
  border-radius: 8px;
  align-items: center;
  justify-content: space-evenly;
  background: #ffffff;
  > span {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
  }
`;

export { HeaderContainer, HomeIcon, CartButton };
