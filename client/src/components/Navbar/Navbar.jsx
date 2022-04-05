import React, { useState, useEffect } from 'react';
import { CgMenuRight } from 'react-icons/cg';
import { scrollToHome } from '../../utils/scrollToHome';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  NavLogoName,
  MobileIcon,
  NavMenu,
  NavItemLi,
  NavLinks,
  NavRight,
  ModalButtonWrapper,
} from './NavbarStyles';

import ThemeButton from '../Buttons/ThemeButton/ThemeButton';
import Logo from '../../assets/images/logo/saturn-58.png';
import FormModalButton from '../Buttons/FormModalButton';
import AccountModalButton from '../Buttons/AccountModalButton';
import { ChevronDownIcon } from './NavItem/NavItemStyles';
import DropdownMenu from './NavItem/DropdownMenu/DropdownMenu';
import NavItem from './NavItem/NavItem';

const Navbar = ({ toggle, openTheModal }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={scrollToHome}>
            <NavIcon src={Logo} />
            <NavLogoName>Event Realm</NavLogoName>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <CgMenuRight />
          </MobileIcon>
          <NavMenu>
            <NavItemLi>
              <NavLinks
                to='about'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                color='#e64747'
              >
                About
              </NavLinks>
            </NavItemLi>
            <NavItemLi>
              <NavLinks
                to='account'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                color='#72c259'
              >
                Account
              </NavLinks>
            </NavItemLi>
            <NavItemLi>
              <NavLinks
                to='discover'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                color='#2196f3'
              >
                Discover
              </NavLinks>
            </NavItemLi>

            <NavItemLi>
              <NavLinks
                to='services'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                Services
              </NavLinks>
            </NavItemLi>
          </NavMenu>
          <NavRight>
            <ModalButtonWrapper>
              <FormModalButton onClick={openTheModal}>Create Event</FormModalButton>
            </ModalButtonWrapper>
            <b style={{ color: 'white', margin: '1rem' }}>|</b>
            <ThemeButton />
            <b style={{ color: 'white', margin: '1rem' }}>|</b>
            <AccountModalButton onClick={openTheModal}>Sign in</AccountModalButton>
            <NavItem icon={<ChevronDownIcon />}>
              <DropdownMenu />
            </NavItem>
          </NavRight>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
