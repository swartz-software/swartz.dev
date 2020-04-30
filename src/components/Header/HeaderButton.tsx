import React from 'react';

import { useColor } from 'Theme';

import './HeaderButton.scss';

export const HeaderButton = ({ title, to }: { title: string; to: string }) => {
  const { textBackground } = useColor();
  return (
    <a
      href={to}
      style={{
        color: textBackground,
      }}>
      <div>
        <div className={'title'}>
          <h3>{title}</h3>
        </div>
      </div>
    </a>
  );
};
