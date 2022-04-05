import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';

const Modal = ({ open = false, children }) => {
  useEffect(() => {
    if (open === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [open]);

  if (!open) return null;

  return ReactDOM.createPortal(children, document.getElementById('modal-root'));
};

export default Modal;

export const ModalContainer = styled.div`
  width: clamp(20%, 400px, 90%);
  height: min(90%, 700px);
  margin: auto;
  border-radius: 100px;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1000;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
`;

export const CloseBtnX = styled(IoMdClose)`
  font-size: 2rem;
  position: absolute;
  top: 2rem;
  margin-right: 5px;
  color: ${({ theme }) => theme.red2};
  z-index: 2;

  :hover {
    cursor: pointer;
  }
`;
