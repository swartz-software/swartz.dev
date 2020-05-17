import React, { useEffect, useLayoutEffect, useState } from 'react';

import { DarkTheme, LightTheme, ThemeProvider } from 'Theme';
import { Background, Footer } from 'components';
import { About, Contact, Home, Projects, Services } from 'pages';

import './underConstruction.scss';

let underConstruction = false;

const Construction = () => {
  const [periods, setPeriods] = useState('.\xA0\xA0');

  useLayoutEffect(() => {
    setInterval(() => {
      const now = Math.floor(Date.now() / 1000);
      setPeriods('.'.repeat((now % 3) + 1) + '\xA0'.repeat(2 - (now % 3)));
    }, 1000);
  }, []);

  return (
    <div className={'under-construction'}>
      <h2>&nbsp;&nbsp;&nbsp;Coming soon{periods}</h2>
    </div>
  );
};

export default () => {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    document.body.style.backgroundColor =
      themeMode === 'light'
        ? LightTheme.colors.background
        : DarkTheme.colors.background;
  }, [themeMode]);

  return underConstruction ? (
    <Construction />
  ) : (
    <ThemeProvider value={themeMode === 'light' ? LightTheme : DarkTheme}>
      <Background
        headerLinks={[
          { title: 'About Us', to: '#about' },
          { title: 'Projects', to: '#projects' },
          { title: 'Services', to: '#services' },
        ]}
        specialLink={{ title: 'Contact Us', to: '#contact' }}
        title={'Swartz Software'}>
        <Home />
        <About />
        <Projects />
        <Services />
        <Contact />
      </Background>
      <Footer />
    </ThemeProvider>
  );
};
