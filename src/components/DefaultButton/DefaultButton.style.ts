import { hexToRgba } from '@src/utils';
import styled, { css } from 'styled-components';

export const Wrapper = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border: solid 1px ${theme.colors.primary};
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
    height: 34px;
    color: ${theme.colors.primary};
    transition: background-color 300ms ease-in-out;
    &:hover {
      background-color: ${hexToRgba({ hex: theme.colors.primary, alpha: 0.1 })};
    }
  `}
`;