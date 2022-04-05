import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { vars } from '../../../../../styles/variables';
import { iconButton } from '../../NavItemStyles';

export const DropdownItem = styled(Link)`
  position: relative;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: ${vars.borderRadius};
  transition: background ${vars.animationSpeed};
  padding: 0.5rem;
  color: ${({ theme }) => theme.light};
  z-index: 5;
  margin-top: 1px;

  /* &:after {
    content: '';
    position: absolute;
    left: 1;
    bottom: 0;
    width: 93%;
    height: 1px;
    border-bottom: 1px solid #7a7272; 
  }*/

  &:hover {
    background-color: #a19999;
  }

  .icon-right {
    margin-left: auto;
  }

  .icon-button {
    ${iconButton}
    margin-right: 0.5rem;
    filter: none;
  }
`;
