import styled, { css } from 'styled-components';
import { vars } from '../../../styles/variables';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

export const Items = styled.li`
  width: calc(${vars.headerHeight} * 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const iconButton = css`
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 50%;
  padding: 5px;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 300ms;
`;

export const IconButtonLink = styled(Link)`
  ${iconButton}

  &:hover {
    filter: brightness(1.2);
  }
`;

const iconsStyles = css`
  fill: ${({ theme }) => theme.bg};
  width: 1rem;
  height: 1rem;
`;

export const ChevronDownIcon = styled(FaChevronDown)`
  ${iconsStyles}
`;
