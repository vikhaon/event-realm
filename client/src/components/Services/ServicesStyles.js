import styled from 'styled-components';
import { vars } from '../../styles/variables';

export const ServicesContainer = styled.div`
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.light};

  @media screen and (max-width: 768px) {
    height: auto;
    margin-top: ${vars.mdSpacing};
  }

  @media screen and (max-width: 480px) {
    height: auto;
    margin-top: ${vars.mdSpacing};
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 2fr;
  align-items: center;
  grid-gap: ${vars.mdSpacing};
  padding: 0 ${vars.xlSpacing};

  @media screen and (max-width: 960px) {
    grid-template-columns: 2fr 2fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: ${({ theme }) => theme.blue4};
  color: ${({ theme }) => theme.white};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: ${vars.cardBoxShadow};
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: ${({ color, theme }) => (color ? color : theme.text)};
  margin-bottom: 2rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 1rem;
  color: ${({ color, theme }) => (color ? color : theme.text)};
`;

export const ServicesP = styled.p`
  font-weight: bold;
  text-align: center;
`;
