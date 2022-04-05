import React, { useContext } from 'react';
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from './common';
import Marginer from '../Marginer/Marginer';
import { AccountContext } from './AccountContext';

export const SignUpForm = () => {
  const { switchToSignIn } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type='text' placeholder='Full Name' />
        <Input type='email' placeholder='Email' />
        <Input type='password' placeholder='Password' />
        <Input type='password' placeholder='Confirm Password' />
      </FormContainer>
      <Marginer direction='vertical' margin={10} />
      <SubmitButton type='submit'>Register</SubmitButton>
      <Marginer direction='vertical' margin='1em' />
      <MutedLink href='#'>
        Already have an account?
        <BoldLink href='#' onClick={switchToSignIn}>
          Sign in
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
};
