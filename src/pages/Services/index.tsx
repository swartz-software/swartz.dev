import React from 'react';

import TestImage from 'assets/profile.png';
import { Content, InlineImage } from 'components/content';

export default () => {
  return (
    <Content align={'right'} id={'services'} title={'image test'}>
      <InlineImage
        align={'right'}
        position={0}
        size={'full'}
        src={TestImage}
        title={'test'}>
        <h2>Some stuff</h2>
        <p>Something something something something</p>
      </InlineImage>
    </Content>
  );
};
