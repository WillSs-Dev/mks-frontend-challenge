import styled from 'styled-components';

import { ICartSidebarProps } from '../../interfaces/props';

export const Container = styled.aside<ICartSidebarProps>`
  position: absolute;
  z-index: 99;
  top: 0;
  right: 0;
  background: #0F52BA;
  width: 435px;
  height: 100vh;
  transform: translate(${({ show }) => (show ? '0' : '100%')});

  transition: all 1.5s ease-in-out;
`;
