import React from 'react';

import HeroSection from '../../components/HeroSection/HeroSection';
import InfoSection from '../../components/InfoSection/InfoSection';
import Services from '../../components/Services/Services';
import Footer from '../../components/Footer/Footer';
import {
  aboutObjectData,
  signUpObjectData,
  discoverObjectData,
} from '../../components/InfoSection/data';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <InfoSection {...aboutObjectData} />
      <InfoSection {...signUpObjectData} />
      <InfoSection {...discoverObjectData} />
      <Services />
      <Footer />
    </>
  );
};

export default HomePage;
