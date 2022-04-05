import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route } from 'react-router';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import HomePage from './pages/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';

import { GlobalStyles } from './styles/globalStyles';
import { darkTheme, lightTheme } from './styles/themes';
import Sidebar from './components/Sidebar/Sidebar';
import useModal from './hooks/useModal';
import ModalManager from './components/Modal/ModalManager';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useSelector((state) => state.ui);
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;
  const { modalOpen, closeTheModal, openTheModal, isETargetModal } = useModal();

  const handleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Helmet>
        <title>Home - Event Realm</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <div onClick={isETargetModal}>
        <ModalManager closeFn={closeTheModal} modal={modalOpen} />
        <Sidebar isOpen={isOpen} toggle={handleSidebar} />
        <Navbar toggle={handleSidebar} openTheModal={openTheModal} />
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}
