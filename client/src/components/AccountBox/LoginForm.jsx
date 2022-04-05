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

export const LoginForm = () => {
  const { switchToSignUp } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type='email' placeholder='Email' />
        <Input type='password' placeholder='Password' />
      </FormContainer>
      <Marginer direction='vertical' margin={10} />
      {/* <MutedLink href='#'>Forgot your password?</MutedLink> */}
      <Marginer direction='vertical' margin='1.6em' />
      <SubmitButton type='submit'>Sign in</SubmitButton>
      <Marginer direction='vertical' margin='1em' />
      <MutedLink>
        Don't have an account yet?
        <BoldLink href='#' onClick={switchToSignUp}>
          Sign up
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
};
