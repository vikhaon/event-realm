import React from 'react';
import { HiMoon } from 'react-icons/hi';
import { FaSun } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import { themeToggler } from '../../../redux/slices/uiSlice';
import * as S from './ThemeButtonStyles';

export default function ThemeButton() {
  const { theme } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const toggleThemeHandler = () => {
    dispatch(themeToggler());
  };

  return (
    <S.ThemeButtonContainer>
      <label htmlFor='checkbox' className='switch'>
        <input id='checkbox' type='checkbox' />
        <S.Icons className='slider round' onClick={toggleThemeHandler}>
          {theme !== 'light' ? (
            <>
              <HiMoon style={{ marginLeft: '6px', height: '16px', color: '#FFBD7B' }} />
            </>
          ) : (
            <>
              <FaSun style={{ marginLeft: '42px', height: '16px', color: '#dfa56c' }} />
            </>
          )}
        </S.Icons>
      </label>
    </S.ThemeButtonContainer>
  );
}
