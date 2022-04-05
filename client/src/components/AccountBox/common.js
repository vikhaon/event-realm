import styled, { css } from 'styled-components';

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const MutedLink = styled.p`
  font-size: 11px;
  color: ${({ theme }) => (theme.light ? theme.dark : theme.light)};
  font-weight: 500;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 11px;
  color: ${({ theme }) => theme.orange};
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;

export const InputsDefault = css`
  background-color: ${({ theme }) => (theme.light ? theme.dark : theme.light)};
  color: ${({ theme }) => (theme.light ? theme.light : theme.dark)};
  width: 100%;
  height: 45px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  border-radius: 12px;
  margin: 3px;
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 13px;

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }

  ::placeholder {
    color: ${({ theme }) => theme.bg};
  }

  &:focus {
    outline: none;
    border-bottom: 3px solid ${({ theme }) => theme.orange};
  }
`;

export const Input = styled.input`
  ${InputsDefault}
`;

export const TextArea = styled.textarea`
  ${InputsDefault}
  resize: none;
  height: 100px;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  ::placeholder {
    color: ${({ theme }) => theme.bg};
  }
`;

export const formCTAButton = css`
  font-size: 16px;
  font-weight: 500;
  background: ${({ theme }) => theme.colorGradient};
  color: ${({ theme }) => theme.light};
  letter-spacing: 1.5px;
  width: 50%;
  cursor: pointer;
  padding: 10px;
  margin: 3px;
  margin-top: 0.5rem;
  border: none;
  border-radius: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.46), 0 3px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.1);
    transition: all, 150ms ease;
    filter: brightness(1.2);
  }
`;

export const SubmitButton = styled.button`
  ${formCTAButton}
`;

export const ClearButton = styled.button`
  ${formCTAButton}

  ${({ clear }) =>
    clear &&
    css`
      background: ${({ theme }) => theme.red2};
      /* padding: 5px; */
    `}
`;
