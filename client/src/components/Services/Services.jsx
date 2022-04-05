import React from 'react';

import Icon1 from '../../assets/images/info-images/events-red.svg';
import Icon2 from '../../assets/images/info-images/around-the-world.svg';
import Icon3 from '../../assets/images/info-images/moments-blue.svg';
import Icon4 from '../../assets/images/info-images/nolimit-orange.svg';

import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesIcon,
  ServicesWrapper,
  ServicesH2,
  ServicesP,
} from './ServicesStyles';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesH2 color='#e64747'>Add your Events</ServicesH2>
          <ServicesIcon src={Icon1} />
          <ServicesP>Whether past, recent or planned. It makes no difference.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2 color='#72c259'>Around the World</ServicesH2>
          <ServicesIcon src={Icon2} />
          <ServicesP>You can access our platform online anywhere in the world.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2 color='#5993df'>Best Moments</ServicesH2>
          <ServicesIcon src={Icon3} />
          <ServicesP>Capture and share the best of them to stand out.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2 color='#ec6934'>Unlimited Amount</ServicesH2>
          <ServicesIcon src={Icon4} />
          <ServicesP>Create and share as many events as you want to.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
