import styled from 'styled-components';
import { vars } from '../../../../styles/variables';

export const Dropdown = styled.div`
  position: absolute;
  top: 58px;
  width: 300px;
  transform: translateX(-45%);
  background-color: ${({ theme }) => theme.text2};
  border-radius: ${vars.borderRadius};
  overflow: hidden;
  transition: height ${vars.animationSpeed} ease;

  .menu {
    width: 100%;
    padding: 0.6rem;
  }

  /* CSSTransition classes  */
  .menu-primary-enter {
    position: absolute;
    transform: translateX(-110%);
  }
  .menu-primary-enter-active {
    transform: translateX(0%);
    transition: all ${vars.animationSpeed} ease;
  }
  .menu-primary-exit {
    position: absolute;
  }
  .menu-primary-exit-active {
    transform: translateX(-110%);
    transition: all ${vars.animationSpeed} ease;
  }

  .menu-secondary-enter {
    transform: translateX(110%);
  }
  .menu-secondary-enter-active {
    transform: translateX(0%);
    transition: all ${vars.animationSpeed} ease;
  }
  .menu-secondary-exit {
  }
  .menu-secondary-exit-active {
    transform: translateX(110%);
    transition: all ${vars.animationSpeed} ease;
  }
`;
