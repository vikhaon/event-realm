import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import {
  FaAngleRight,
  FaArrowLeft,
  FaBolt,
  FaBook,
  FaCog,
  FaSignOutAlt,
} from 'react-icons/fa';

import DropdownItem from './DropdownItem/DropdownItem';

import * as S from './DropdownMenuStyles';

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  const calcHeight = (el) => {
    const height = el.offsetHeight;
    setMenuHeight(height);
  };

  const handleMenuChange = (el) => {
    setActiveMenu(el);
  };

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  return (
    <S.Dropdown style={{ height: menuHeight }} ref={dropdownRef}>
      {/* MAIN - START */}
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames='menu-primary'
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className='menu'>
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<FaCog />}
            rightIcon={<FaAngleRight size={24} />}
            goToMenu='settings'
            handleMenuChange={handleMenuChange}
          >
            Settings
          </DropdownItem>
          <DropdownItem
            leftIcon={<FaBook />}
            rightIcon={<FaAngleRight size={24} />}
            goToMenu='topics'
            handleMenuChange={handleMenuChange}
          >
            Topics
          </DropdownItem>
          <DropdownItem leftIcon={<FaSignOutAlt />}>Logout</DropdownItem>
        </div>
      </CSSTransition>
      {/* MAIN - END */}

      {/* SETTINGS SUB-MENU - START*/}
      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames='menu-secondary'
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className='menu'>
          <DropdownItem
            goToMenu='main'
            handleMenuChange={handleMenuChange}
            leftIcon={<FaArrowLeft handleMenuChange={handleMenuChange} />}
          >
            <h2>Settings</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<FaBolt />}>Setting 1</DropdownItem>
          <DropdownItem leftIcon={<FaBolt />}>Setting 2</DropdownItem>
          <DropdownItem leftIcon={<FaBolt />}>Setting 3</DropdownItem>
          <DropdownItem leftIcon={<FaBolt />}>Setting 4</DropdownItem>
          <DropdownItem leftIcon={<FaBolt />}>Setting 5</DropdownItem>
          <DropdownItem leftIcon={<FaBolt />}>Setting 6</DropdownItem>
          <DropdownItem leftIcon={<FaBolt />}>Setting 7</DropdownItem>
        </div>
      </CSSTransition>
      {/* SETTINGS SUB-MENU - END */}

      {/* TOPICS SUB-MENU - START*/}
      <CSSTransition
        in={activeMenu === 'topics'}
        timeout={500}
        classNames='menu-secondary'
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className='menu'>
          <DropdownItem
            goToMenu='main'
            handleMenuChange={handleMenuChange}
            leftIcon={<FaArrowLeft />}
          >
            <h2>Topics</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<FaBolt />}>Topic 1</DropdownItem>
          <DropdownItem leftIcon={<FaBolt />}>Topic 2</DropdownItem>
          <DropdownItem leftIcon={<FaBolt />}>Topic 3</DropdownItem>
          <DropdownItem leftIcon={<FaBolt />}>Topic 4</DropdownItem>
        </div>
      </CSSTransition>
      {/* TOPICS SUB-MENU - END */}
    </S.Dropdown>
  );
}

export default DropdownMenu;
