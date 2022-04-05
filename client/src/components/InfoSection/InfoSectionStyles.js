import styled, { css } from 'styled-components';
import { vars } from '../../styles/variables';

export const InfoContainer = styled.div`
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.light};

  @media screen and (max-width: 768px) {
    padding: ${vars.xxlSpacing} 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 870px;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 ${vars.lgSpacing};
  border-bottom: 1px solid ${({ color }) => (color ? color : 'lightgray')};
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: min-max(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

const columStyles = css`
  margin-bottom: ${vars.mdSpacing};
  padding: 0 ${vars.mdSpacing};
`;

export const Column1 = styled.div`
  ${columStyles}
  grid-area: col1;
`;

export const Column2 = styled.div`
  ${columStyles}
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-bottom: ${vars.xxlSpacing};
`;

export const TopLine = styled.p`
  color: ${({ color }) => (color ? color : '#72c259')};
  font-size: 16px;
  line-height: ${vars.mdSpacing};
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-top: 1rem;
  margin-bottom: ${vars.mdSpacing};
`;

export const Heading = styled.h1`
  margin-bottom: ${vars.vkSpacing};
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ theme }) => theme.text};

  @media screen and (max-width: 480px) {
    font-size: ${vars.lgSpacing};
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: ${vars.lgSpacing};
  font-size: 18px;
  line-height: ${vars.vkSpacing};
  color: ${({ theme }) => theme.text};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 1252px) {
    justify-content: space-evenly;
  }
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0;
  padding-right: 0;
  border-radius: ${vars.borderRadius};
`;
