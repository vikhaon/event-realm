import React from 'react';
import { AccountBox } from '../../AccountBox/AccountBox';
import Modal, { CloseBtnX, ModalContainer, Overlay } from '../Modal';

const ModalForm = ({ closeFn = () => null, open = false }) => {
  return (
    <>
      <Modal open={open}>
        <Overlay onClick={closeFn} />
        <ModalContainer>
          <CloseBtnX onClick={closeFn} />
          <AccountBox realm />
        </ModalContainer>
      </Modal>
    </>
  );
};

export default ModalForm;
