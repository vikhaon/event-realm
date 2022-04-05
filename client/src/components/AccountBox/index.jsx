import React, { useState } from 'react';
import styled from 'styled-components';
import { LoginForm } from './LoginForm';
import { motion } from 'framer-motion';
import { AccountContext } from './AccountContext';
import { SignUpForm } from './SignUpForm';
import { CreateRealmForm } from './CreateRealmForm';

export const AccountBox = ({ realm, account }) => {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState('signin');

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1600);
  };

  const switchToSignUp = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive('signup');
    }, 400);
  };

  const switchToSignIn = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive('signin');
    }, 400);
  };

  const contextValue = { switchToSignUp, switchToSignIn };

  return (
    <AccountContext.Provider value={contextValue}>
      <BoxContainer>
        <TopContainer>
          <MBackDrop
            initial={false}
            animate={isExpanded ? 'expanded' : 'collapsed'}
            variants={backdropVariants}
            transition={expandingTransition}
          />
          {account && active === 'signin' && (
            <HeaderContainer>
              <HeaderText>Welcome</HeaderText>
              <HeaderText>Back</HeaderText>
              <SmallText>Please sign-in to continue!</SmallText>
            </HeaderContainer>
          )}
          {account && active === 'signup' && (
            <HeaderContainer>
              <HeaderText>Create</HeaderText>
              <HeaderText>Account</HeaderText>
              <SmallText>Please sign-up to continue!</SmallText>
            </HeaderContainer>
          )}
          {realm && (
            <HeaderContainer>
              <HeaderText>Event</HeaderText>
              <HeaderText>Realm</HeaderText>
              <SmallText>Create an Event by filling out the form!</SmallText>
            </HeaderContainer>
          )}
        </TopContainer>
        <InnerContainer>
          {account && active === 'signin' && <LoginForm />}
          {account && active === 'signup' && <SignUpForm />}
          {realm && <CreateRealmForm />}
        </InnerContainer>
      </BoxContainer>
    </AccountContext.Provider>
  );
};

// ANIMATION
const backdropVariants = {
  expanded: {
    width: '233%',
    height: '1095px',
    borderRadius: '20%',
    transform: 'rotate(60deg)',
  },
  collapsed: {
    width: '130%',
    height: '500px',
    borderRadius: '50%',
    transform: 'rotate(60deg)',
  },
};

const expandingTransition = {
  type: 'spring',
  duration: 2.3,
  stiffness: 30,
};

// STYLES
const BoxContainer = styled.div`
  width: 100%;
  min-height: 650px;
  display: flex;
  flex-direction: column;
  border-radius: 18px;
  background-color: ${({ theme }) => theme.bg2};
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const MBackDrop = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -285px;
  left: -50px;
  background: ${({ theme }) => theme.tricolorGradient};
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const HeaderText = styled.h2`
  color: ${({ theme }) => theme.white};
  font-size: 30px;
  font-weight: 500;
  line-height: 1.24;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
  color: ${({ theme }) => theme.white};
  filter: brightness(1.3);
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: 0;
  margin-top: 1rem;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
  height: 115%;
  justify-content: flex-start;
`;
