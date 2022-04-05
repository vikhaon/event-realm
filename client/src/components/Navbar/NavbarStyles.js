import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

import { vars } from '../../styles/variables';

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#000000e1' : 'transparent')};
  height: ${vars.headerHeight};
  margin-top: -${vars.headerHeight};
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: ${vars.animationSpeed} all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  height: ${vars.headerHeight};
  z-index: 1;
  width: 100%;
  padding: 0 ${vars.lgSpacing};
`;

export const NavLogo = styled(LinkR)`
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled.img`
  margin-right: 5px;
  width: 2.5rem;
`;

export const NavLogoName = styled.b`
  color: ${({ theme }) => theme.white};
  letter-spacing: 2px;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ theme }) => theme.primary};
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItemLi = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid ${({ color, theme }) => (color ? color : theme.white)};
  }
`;

export const NavRight = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ModalButtonWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

// export const NavBtnLink = styled.button`
//   border-radius: 50px;
//   background: ${({ theme }) => theme.primary};
//   white-space: nowrap;
//   padding: ${vars.smSpacing} ${vars.mdSpacing};
//   color: ${({ theme }) => theme.bg};
//   font-size: 16px;
//   border: none;
//   outline: none;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;

//   &:hover {
//     transition: all 0.2s ease-in-out;
//     filter: brightness(1.2);
//   }
// `;
