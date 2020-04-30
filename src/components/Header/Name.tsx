import React from 'react';

import { useColor } from 'Theme';

import './Name.scss';

export const Name = ({ name, width }: { name: string; width: number }) => {
  const { textBackground } = useColor();

  return (
    <a className={'name'} href={'/'}>
      <h1
        style={{
          color: textBackground,
          width: `${width}px`,
        }}>
        {name}
      </h1>
    </a>
  );
};
