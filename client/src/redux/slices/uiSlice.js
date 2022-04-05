import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    theme: 'light',
    menuOpen: false,
  },
  reducers: {
    themeToggler(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    menuToggler(state) {
      state.menuOpen = !state.menuOpen;
    },
    menuCloser(state) {
      state.menuOpen = false;
    },
  },
});

export const { themeToggler, menuToggler, menuCloser } = uiSlice.actions;

export default uiSlice.reducer;
