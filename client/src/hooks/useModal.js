import { useState } from 'react';

const useModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const isETargetModal = (event) => {
    event.preventDefault();
    const {
      target: {
        dataset: { modal },
      },
    } = event;
    if (modal) setModalOpen(modal);
    console.log('clicked');
  };

  const openTheModal = () => setModalOpen(true);
  const closeTheModal = () => setModalOpen(false);

  return { modalOpen, closeTheModal, openTheModal, isETargetModal };
};

export default useModal;
