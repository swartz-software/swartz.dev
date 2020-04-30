import React, { useEffect, useState } from 'react';

import { DarkTheme, LightTheme, ThemeProvider } from 'Theme';
import { Background, Footer } from 'components';
import { Bullet, Content, InlineImage } from 'components/content';

export default () => {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    document.body.style.backgroundColor =
      themeMode === 'light'
        ? LightTheme.colors.background
        : DarkTheme.colors.background;
  }, [themeMode]);

  return (
    <ThemeProvider value={themeMode === 'light' ? LightTheme : DarkTheme}>
      <Background
        headerLinks={[
          { title: 'About Us', to: '#about' },
          { title: 'Projects', to: '#projects' },
          { title: 'Services', to: '#services' },
        ]}
        specialLink={{ title: 'Contact Us', to: '#contact' }}
        title={'Swartz Software'}>
        <Content align={'left'} id={'about'} title={'bullet points'}>
          <Bullet position={0} size={'full'} title={'Mobile'}>
            hello world
          </Bullet>
          <Bullet position={0} size={'full'} title={'Desktop'}>
            hello world
          </Bullet>
          <Bullet position={0} size={'full'} title={'Web'}>
            hello world
          </Bullet>
        </Content>
        <Content align={'right'} id={'projects'} title={'bullet points'}>
          <Bullet align={'right'} position={0} size={'full'} title={'Mobile'}>
            hello world
          </Bullet>
          <Bullet align={'right'} position={0} size={'full'} title={'Desktop'}>
            hello world
          </Bullet>
          <Bullet align={'right'} position={0} size={'full'} title={'Web'}>
            hello world
          </Bullet>
        </Content>
        <Content align={'left'} id={'services'} title={'image test'}>
          <InlineImage position={0} size={'full'} title={'test'} />
        </Content>
        <Content align={'right'} id={'contact'} title={'bullet points'}>
          <Bullet align={'right'} position={0} size={'full'} title={'Mobile'}>
            hello world
          </Bullet>
          <Bullet align={'right'} position={0} size={'full'} title={'Desktop'}>
            hello world
          </Bullet>
          <Bullet align={'right'} position={0} size={'full'} title={'Web'}>
            hello world
          </Bullet>
        </Content>
        <Content align={'left'} id={'inlineimage'} title={'image test'}>
          <InlineImage position={0} size={'full'} title={'test'} />
        </Content>
      </Background>
      <Footer />
    </ThemeProvider>
  );
};
