import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { NavIcon, NavLogo } from '../Navbar/NavbarStyles';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  ArrowUp,
} from './FooterStyles';
import Logo from '../../assets/images/logo/saturn-58.png';
import { scrollToHome } from '../../utils/scrollToHome';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          The Event Realm is <u>waiting</u> for <b style={{ color: '#e64747' }}>you</b>.
        </FooterSubHeading>
      </FooterSubscription>

      <SocialMedia>
        <SocialMediaWrap>
          <NavLogo to='/' onClick={scrollToHome}>
            <ArrowUp /> <i style={{ marginRight: '5px' }}>scroll up</i>
            <NavIcon src={Logo} />
          </NavLogo>
          <WebsiteRights>
            Event Realm © Copyright {new Date().getFullYear()} |{' '}
            <span>All Rights Reserved.</span>
          </WebsiteRights>
          <SocialIcons>
            <SocialIconLink
              href='//facebook.com'
              target='_blank'
              aria-label='Facebook'
              color='#1877F2'
            >
              <FaFacebook />
            </SocialIconLink>

            <SocialIconLink href='//instagram.com' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href='//youtube.com'
              target='_blank'
              aria-label='Youtube'
              color='#e64747'
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink
              href='//twitter.com'
              target='_blank'
              aria-label='Twitter'
              color='#1880C6'
            >
              <FaTwitter />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
