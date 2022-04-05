import styled from 'styled-components';
import { HiOutlineArrowNarrowUp } from 'react-icons/hi';
import { vars } from '../../styles/variables';

export const FooterContainer = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: ${vars.mdSpacing} 0;
  background: ${({ theme }) => theme.light};
`;

export const FooterSubscription = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: ${vars.vkSpacing};
  color: ${({ theme }) => theme.text};
  width: 100%;
`;

export const FooterSubHeading = styled.p`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans',
    Arial, sans-serif;
  font-size: 24px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    margin-top: ${vars.xxlSpacing};
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 75%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin-top: ${vars.lgSpacing};

  @media screen and (max-width: 860px) {
    flex-direction: column;
  }

  span {
    @media screen and (max-width: 992px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const WebsiteRights = styled.small`
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  /* margin: 0 auto; */

  @media screen and (max-width: 860px) {
    margin: ${vars.mdSpacing};
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SocialIconLink = styled.a`
  color: ${({ theme }) => theme.text};
  font-size: 24px;
  margin: 5px;

  &:hover {
    color: ${({ color, theme }) => (color ? color : theme.primary)};
  }
`;

export const ArrowUp = styled(HiOutlineArrowNarrowUp)`
  color: ${({ theme }) => theme.textInverse};
`;
