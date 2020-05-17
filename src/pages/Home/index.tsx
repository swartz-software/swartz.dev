import React from 'react';

import './Home.scss';
import { useColor, useMode } from 'Theme';
import { Bullet, Content } from 'components/content';

export default () => {
  const mode = useMode();
  const { primaryLight, primary, primaryDark } = useColor();

  return (
    <Content align={'left'} id={'home'} title={'Main Bullet Points'}>
      <Bullet
        color={mode === 'dark' ? primaryDark : primaryLight}
        position={0}
        size={'full'}
        title={'Mobile'}>
        Foo bar
      </Bullet>
      <Bullet color={primary} position={0} size={'full'} title={'Desktop'}>
        hello world
      </Bullet>
      <Bullet
        color={mode === 'dark' ? primaryLight : primaryDark}
        position={0}
        size={'full'}
        title={'Web'}>
        hello world
      </Bullet>
    </Content>
  );
};
