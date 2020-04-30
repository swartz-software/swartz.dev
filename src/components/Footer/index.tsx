import React from 'react';

import './Footer.scss';
import { useColor } from 'Theme';

export default () => {
  const { backgroundAlt } = useColor();
  return (
    <div className={'footer'} style={{ backgroundColor: backgroundAlt }}></div>
  );
};
