import React from 'react';
import { StyledNeonButton } from './NeonButton';

const FormModalButton = ({ onClick, children }) => {
  return (
    <StyledNeonButton onClick={onClick} data-modal='modal-form'>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </StyledNeonButton>
  );
};

export default FormModalButton;
