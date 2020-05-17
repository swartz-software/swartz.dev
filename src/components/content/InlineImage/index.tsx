import React, { FunctionComponent } from 'react';

import { useColor } from 'Theme';
import { Arrow, ContentItemProps } from 'components/content';

import './InlineImage.scss';

export type InlineImageType = FunctionComponent<
  ContentItemProps & {
    align?: 'left' | 'right';
    size: 'full' | '1:1' | '1:2';
    color?: string;
    src: string;
  }
>;

export const InlineImage: InlineImageType = ({
  title,
  size,
  align = 'left',
  color,
  src,
  children,
}) => {
  const { primary } = useColor();

  return (
    <div className={'inline-image-container'}>
      {align === 'left' && <Arrow direction={align} length={32} />}
      <div
        className={'inline-image'}
        style={{
          backgroundColor: color ?? primary,
          marginRight: align === 'left' ? 48 : 0,
          marginLeft: align === 'right' ? 48 : 0,
        }}>
        <h4 style={{ textAlign: 'center' }}>{title}</h4>
        <div
          className={'inline-image-content'}
          style={{
            textAlign: align,
          }}>
          {align === 'right' && <img src={src} />}
          <div className={'inline-image-children'}>{children}</div>
          {align === 'left' && <img src={src} />}
        </div>
      </div>
      {align === 'right' && <Arrow direction={align} length={32} />}
    </div>
  );
};
