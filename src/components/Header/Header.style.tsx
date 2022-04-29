import styled, { css } from 'styled-components';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
  `}
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  max-width: 1200px;
  padding: 20px 10px;
`;

export const Brand = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    display: flex;
    flex: 1;
  `}
`;

export const Search = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    display: flex;
    flex: 2;
    justify-content: center;
  `}
`;

export const Cart = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    display: flex;
    flex: 1;
    justify-content: flex-end;
  `}
`;
