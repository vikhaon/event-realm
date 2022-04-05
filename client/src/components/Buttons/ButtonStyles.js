import styled, { css } from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import { vars } from '../../styles/variables';

export const btnReset = css`
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
  color: inherit;
  font-family: inherit;
  padding: 0;
  letter-spacing: 0.9px;
  font-size: 16px;
  font-weight: 400;
`;

export const buttonStyles = css`
  background: ${({ color, theme }) => (color ? color : theme.primary)};
  border-radius: ${vars.borderRadius};
  background: ${({ theme }) => theme.text};
  white-space: nowrap;
  padding: ${({ bigPadding }) => (bigPadding ? '12px 30px' : '8px 16px')};
  color: ${({ theme }) => theme.textInvert};
  font-size: ${({ bigFont }) => (bigFont ? '22px' : '18px')};
  outline: none;
  box-shadow: inset 0 0 0 ${({ color, theme }) => (color ? color : theme.primary)};
  border: none;
  transition: ease-out 0.5s;

  &:hover {
    box-shadow: inset 300px 0 0 ${({ color, theme }) => (color ? color : theme.primary)};
    cursor: pointer;
  }
`;

export const ButtonLS = styled(LinkS)`
  ${buttonStyles}
`;

export const ButtonLR = styled(LinkR)`
  ${buttonStyles}
`;

export const AccountButton = styled.button`
  ${buttonStyles}
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.bg};
`;

export const FormButton = styled.button`
  ${buttonStyles}
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.bg};
  margin-right: 1rem;
  padding: 6px 12px;
  letter-spacing: 0.6px;
`;
