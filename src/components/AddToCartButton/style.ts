import styled from "styled-components";

const Container = styled.button`
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

    > span {
      font-size: 11px;
    }
  `;

export { Container };