import styled from 'styled-components';

const Container = styled.footer`
  position: relative;
  width: 100%;
  height: 34px;
  background: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    height: 50px;
  }

  > span {
    font-weight: 400;
    font-size: 12px;

    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }
`;

export { Container };
