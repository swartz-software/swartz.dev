import React, { FunctionComponent } from 'react';

import { Arrow, ContentItemProps } from 'components/content';

import './Bullet.scss';

export type BulletType = FunctionComponent<
  ContentItemProps & {
    align?: 'left' | 'right';
    size: 'full' | '1:1' | '1:2';
  }
>;

export const Bullet: BulletType = ({
  title,
  size,
  align = 'left',
  children,
}) => {
  return (
    <div
      className={'bullet'}
      style={{ justifyContent: align === 'right' ? 'flex-end' : 'flex-start' }}>
      {align === 'left' && <Arrow direction={align} length={32} />}
      <h4 style={{ textAlign: align === 'right' ? 'end' : 'start' }}>
        {title}
      </h4>
      <div>{children}</div>
      {align === 'right' && <Arrow direction={align} length={32} />}
    </div>
  );
};
