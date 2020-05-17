import React from 'react';

import { useColor, useMode } from 'Theme';
import { Bullet, Content } from 'components/content';

export default () => {
  const mode = useMode();
  const { complementLight, complement, complementDark } = useColor();

  return (
    <Content align={'right'} id={'about'} title={'About Us'}>
      <Bullet
        align={'right'}
        color={mode === 'dark' ? complementDark : complementLight}
        position={0}
        size={'full'}
        title={'Mobile'}>
        hello world
      </Bullet>
      <Bullet
        align={'right'}
        color={complement}
        position={0}
        size={'full'}
        title={'Desktop'}>
        hello world
      </Bullet>
      <Bullet
        align={'right'}
        color={mode === 'dark' ? complementLight : complementDark}
        position={0}
        size={'full'}
        title={'Web'}>
        hello world
      </Bullet>
    </Content>
  );
};
