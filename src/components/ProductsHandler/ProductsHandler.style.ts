import styled, { css } from 'styled-components';
import { ProductsHandlerStyleProps } from './ProductsHandler.types';

export const Wrapper = styled.ul`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const Product = styled.li`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    width: 224px;
    border-radius: 4px;
    padding: 15px 10px;
  `}
`;

export const Thumb = styled.div<ProductsHandlerStyleProps>`
  ${({ theme, image }) => css`
    background-image: url(${image});
    height: 125px;
    background-position: top;
    background-size: contain;
    background-repeat: no-repeat;
    margin-bottom: 10px;
    border-bottom: solid ${theme.colors.light} 1px;
  `}
`;

export const Details = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  `}
`;

export const Price = styled.p`
  color: black;
`;

export const Title = styled.p`
  color: black;
`;
