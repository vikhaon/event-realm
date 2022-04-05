import React from 'react';
import ModalForm from './Modals/ModalForm';
import ModalAccount from './Modals/ModalAccount';

const ModalManager = ({ closeFn, modal = '' }) => {
  return (
    <>
      <ModalForm closeFn={closeFn} open={modal === 'modal-form'} />
      <ModalAccount closeFn={closeFn} open={modal === 'modal-account'}></ModalAccount>
    </>
  );
};

export default ModalManager;
