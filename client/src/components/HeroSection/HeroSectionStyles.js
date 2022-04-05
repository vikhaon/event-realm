import styled from 'styled-components';
import { vars } from '../../styles/variables';

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${vars.lgSpacing};
  height: 100vh;
  position: relative;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.4) 100%),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const PictureBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: ${vars.smSpacing} ${vars.vkSpacing};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.div`
  color: ${({ theme }) => theme.white};
  font-size: 48px;
  text-align: center;
  animation: slideUp 0.7s ease;

  @keyframes slideUp {
    0% {
      transform: translateY(250px);
    }
    100% {
      transform: translateY(0);
    }
  }

  .colorized-text {
    color: ${({ theme }) => theme.primary};
  }

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: ${vars.lgSpacing};
  }
`;

export const HeroP = styled.p`
  color: ${({ theme }) => theme.white};
  margin-top: ${vars.vkSpacing};
  font-size: ${vars.vkSpacing};
  text-align: center;
  max-width: 600px;
  line-height: 1.5;
  letter-spacing: 1.5px;
  animation: slideUp 1s ease;

  @media screen and (max-width: 768px) {
    font-size: ${vars.vkSpacing};
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
