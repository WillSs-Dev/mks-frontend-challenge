import styled from 'styled-components';

import { ICartSidebarProps } from '../../interfaces/props';

export const Container = styled.aside<ICartSidebarProps>`
  position: absolute;
  z-index: 99;
  top: 0;
  right: 0;
  background: #0F52BA;
  width: 435px;
  min-height: ${props => props.show ? '100%' : 0};

  transition: all 1.5s ease-in-out;
`;
