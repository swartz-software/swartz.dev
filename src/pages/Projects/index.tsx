import React from 'react';

import { useColor, useMode } from 'Theme';
import { Bullet, Content } from 'components/content';

export default () => {
  const mode = useMode();
  const { analogLight, analog, analogDark } = useColor();
  return (
    <Content align={'left'} id={'projects'} title={'Projects'}>
      <Bullet
        color={mode === 'dark' ? analogDark : analogLight}
        position={0}
        size={'full'}
        title={'Mobile'}>
        hello world
      </Bullet>
      <Bullet color={analog} position={0} size={'full'} title={'Desktop'}>
        hello world
      </Bullet>
      <Bullet
        color={mode === 'dark' ? analogLight : analogDark}
        position={0}
        size={'full'}
        title={'Web'}>
        hello world
      </Bullet>
    </Content>
  );
};
