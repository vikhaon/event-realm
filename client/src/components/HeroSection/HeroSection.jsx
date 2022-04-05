import React from 'react';
import Earth from '../../assets/images/earth-bg.jpg';
import {
  HeroBg,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  PictureBg,
} from './HeroSectionStyles';

const HeroSection = () => {
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <PictureBg src={Earth} alt='Earth' />
      </HeroBg>
      <HeroContent>
        <HeroH1>
          <b>Create</b> - <b>Share</b> <b className='colorized-text'>& Browse</b> Events
        </HeroH1>
        <HeroP>Sign up for a new account and lose yourself in the Event Realm.</HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
