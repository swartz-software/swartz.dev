import React, { FunctionComponent } from 'react';

import { useColor } from 'Theme';
import { Arrow, ContentItemProps } from 'components/content';

import './Bullet.scss';

export type BulletType = FunctionComponent<
  ContentItemProps & {
    align?: 'left' | 'right';
    size: 'full' | '1:1' | '1:2';
    color?: string;
  }
>;

export const Bullet: BulletType = ({
  title,
  size,
  align = 'left',
  color,
  children,
}) => {
  const { primary } = useColor();
  return (
    <div
      className={'bullet-container'}
      style={{
        justifyContent: align === 'right' ? 'flex-end' : 'flex-start',
      }}>
      {align === 'left' && <Arrow direction={align} length={32} />}
      <div
        className={'bullet'}
        style={{
          justifyContent: align === 'right' ? 'flex-end' : 'flex-start',
          backgroundColor: color ?? primary,
          marginRight: align === 'left' ? 48 : 0,
          marginLeft: align === 'right' ? 48 : 0,
        }}>
        {align === 'left' && <h4 style={{ textAlign: 'start' }}>{title}</h4>}
        <div
          style={{
            marginLeft: align === 'left' ? 16 : 0,
            marginRight: align === 'right' ? 16 : 0,
          }}>
          {children}
        </div>
        {align === 'right' && <h4 style={{ textAlign: 'end' }}>{title}</h4>}
      </div>
      {align === 'right' && <Arrow direction={align} length={32} />}
    </div>
  );
};
