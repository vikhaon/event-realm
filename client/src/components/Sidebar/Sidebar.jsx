import React from 'react';
import AccountModalButton from '../Buttons/AccountModalButton';
import FormModalButton from '../Buttons/FormModalButton';
import ThemeButton from '../Buttons/ThemeButton/ThemeButton';
import {
  SidebarContainer,
  IconX,
  IconTheme,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
} from './SidebarStyles';

const Sidebar = ({ isOpen, toggle, openTheModal }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <IconX onClick={toggle}>
        <CloseIcon />
      </IconX>
      <IconTheme>
        <ThemeButton />
      </IconTheme>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to='account' onClick={toggle}>
            Account
          </SidebarLink>
          <SidebarLink to='discover' onClick={toggle}>
            Discover
          </SidebarLink>
          <SidebarLink to='services' onClick={toggle}>
            Services
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <FormModalButton onClick={openTheModal}>Create Event</FormModalButton>
          <AccountModalButton onClick={openTheModal}>Sign in</AccountModalButton>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
