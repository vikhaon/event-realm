import React from 'react';
import * as S from './DropdownItemStyles';

function DropdownItem({ leftIcon, rightIcon, children, goToMenu, handleMenuChange }) {
  return (
    <S.DropdownItem to='' onClick={() => goToMenu && handleMenuChange(goToMenu)}>
      <span className='icon-button'>{leftIcon}</span>
      {children}
      <span className='icon-right'>{rightIcon}</span>
    </S.DropdownItem>
  );
}

export default DropdownItem;
