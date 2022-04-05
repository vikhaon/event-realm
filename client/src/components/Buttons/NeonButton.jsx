import React from 'react';
import styled from 'styled-components';
import { vars } from '../../styles/variables';

const NeonButton = ({ children }) => {
  return (
    <StyledNeonButton>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </StyledNeonButton>
  );
};

export default NeonButton;

export const StyledNeonButton = styled.button`
  position: relative;
  display: inline-block;
  padding: ${vars.smSpacing} ${vars.mdSpacing};
  color: ${({ theme, hero }) => (hero ? theme.blue : theme.white)};
  background: none;
  border: none;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-decoration: none;
  overflow: hidden;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    color: #255784;
    background: ${({ theme }) => theme.blue};
    box-shadow: 0 0 10px ${({ theme }) => theme.blue},
      0 0 40px ${({ theme }) => theme.blue}, 0 0 80px ${({ theme }) => theme.blue};
    transition-delay: 1s;
  }

  span {
    position: absolute;
    display: block;
  }

  span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${({ theme }) => theme.blue});
  }

  &:hover span:nth-child(1) {
    left: 100%;
    transition: 1s;
  }

  span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, ${({ theme }) => theme.blue});
  }

  &:hover span:nth-child(3) {
    right: 100%;
    transition: 1s;
    transition-delay: 0.5s;
  }

  span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, ${({ theme }) => theme.blue});
  }

  &:hover span:nth-child(2) {
    top: 100%;
    transition: 1s;
    transition-delay: 0.25s;
  }

  span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, ${({ theme }) => theme.blue});
  }

  &:hover span:nth-child(4) {
    bottom: 100%;
    transition: 1s;
    transition-delay: 0.75s;
  }
`;
