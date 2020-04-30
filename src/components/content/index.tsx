import React from 'react';

import { Bullet, BulletType } from './Bullet';
import { Custom, CustomType } from './Custom';
import { Display, DisplayType } from './Display';
import { InlineImage, InlineImageType } from './InlineImage';
import { Mosaic, MosaicType } from './Mosaic';
import './Content.scss';

export { Bullet, Custom, Display, InlineImage, Mosaic };

export type ContentItemProps = {
  title: string;
  position: number;
};
export type ContentItem =
  | BulletType
  | CustomType
  | DisplayType
  | InlineImageType
  | MosaicType;
export type ContentProps = {
  title?: string;
  id: string;
  align: 'left' | 'right' | 'center';
  children: JSX.Element | Array<JSX.Element>;
};

export type ContentType = (props: ContentProps) => JSX.Element;

export const Content: ContentType = ({
  title,
  id,
  align,
  children,
}: ContentProps) => {
  return (
    <div className={'content-item'} id={id} style={{ alignItems: align }}>
      {title && (
        <h2
          className={'content-title'}
          style={{
            textAlign: align,
            marginLeft: align === 'left' ? 64 : 0,
            marginRight: align === 'right' ? 64 : 0,
          }}>
          {title}
        </h2>
      )}
      <div>{children}</div>
    </div>
  );
};
export type ContentElement = React.ReactElement<ContentProps, ContentType>;

export const Arrow = ({
  length,
  direction,
}: {
  length: number;
  direction: 'left' | 'right' | 'down';
}) => {
  const startX = direction === 'left' ? 0 : direction === 'right' ? length : 9;
  const startY = direction === 'down' ? 0 : 10;
  const endX = direction === 'left' ? length : direction === 'right' ? 0 : 9;
  const endY = direction === 'down' ? length : 10;

  const point1X =
    direction === 'down' ? endX : direction === 'left' ? endX - 12 : endX + 12;

  return (
    <svg
      className={'arrow'}
      height={direction === 'down' ? length : 18}
      style={
        direction === 'down'
          ? { marginBottom: 16 }
          : direction === 'left'
          ? {
              marginRight: 16,
            }
          : { marginLeft: 16 }
      }
      width={direction === 'down' ? 18 : length}>
      <line
        style={{
          stroke: 'rgb(0,0,0)',
          strokeWidth: 1,
        }}
        x1={startX}
        x2={point1X}
        y1={startY}
        y2={endY}
      />
      <line
        style={{
          stroke: 'rgb(0,0,0)',
          strokeWidth: 1,
        }}
        x1={point1X}
        x2={point1X}
        y1={4}
        y2={16}
      />
      <line
        style={{
          stroke: 'rgb(0,0,0)',
          strokeWidth: 1,
        }}
        x1={point1X}
        x2={endX}
        y1={4}
        y2={10}
      />
      <line
        style={{
          stroke: 'rgb(0,0,0)',
          strokeWidth: 1,
        }}
        x1={point1X}
        x2={endX}
        y1={16}
        y2={10}
      />
    </svg>
  );
};
