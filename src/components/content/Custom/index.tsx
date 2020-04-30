import React, { FunctionComponent } from 'react';

import { Arrow, ContentItemProps } from 'components/content';

export type CustomType = FunctionComponent<
  ContentItemProps & {
    align?: 'left' | 'right';
    size: 'full' | '1:1' | '1:2';
  }
>;

export const Custom: CustomType = ({
  title,
  size,
  align = 'left',
  children,
}) => {
  return (
    <div
      className={'custom'}
      style={{ justifyContent: align === 'left' ? 'flex-start' : 'flex-end' }}>
      {align === 'left' && <Arrow direction={align} length={32} />}
      <h4>{title}</h4>
      <div>{children}</div>
      {align === 'right' && <Arrow direction={align} length={32} />}
    </div>
  );
};
