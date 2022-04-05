import React from 'react';
import { StyledNeonButton } from './NeonButton';

const AccountModalButton = ({ onClick, children }) => {
  return (
    <StyledNeonButton onClick={onClick} data-modal='modal-account' hero>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </StyledNeonButton>
  );
};

export default AccountModalButton;
