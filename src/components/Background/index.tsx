import React, { useLayoutEffect, useState } from 'react';

import './Background.scss';
import { HeaderButton, Name, SpecialButton } from 'components';
import { ContentElement } from 'components/content';

type Link = {
  title: string;
  to: string;
};
type Props = {
  title: string;
  headerLinks: Link[];
  specialLink?: Link;
  children: ContentElement | Array<ContentElement>;
};

const CurvedCorner = ({
  x1,
  y1,
  x2,
  y2,
  orientation,
  radius,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  orientation: number;
  radius: number;
}) => (
  <path
    d={`M ${x1} ${y1} A ${radius} ${radius} 0 0 ${orientation} ${x2} ${y2}`}
    fill="none"
    stroke="black"
    stroke-width="1"
    strokeDasharray={'4 2'}
  />
);

const getContentVars = (
  side: 'left' | 'right',
  top: boolean,
  size: number,
  radius: number,
  width: number,
) => {
  if (top) {
    return {
      height: radius,
      width: size,
      cornerOrientation: side === 'left' ? 1 : 0,
      cornerX1: side === 'left' ? size : 0,
      cornerX2: side === 'left' ? size - radius : radius,
      cornerY1: 0,
      cornerY2: radius,
      lineX1: radius,
      lineX2: size - radius,
      lineY1: radius,
      lineY2: radius,
    };
  } else if (side === 'left') {
    return {
      height: size,
      width: radius,
      cornerOrientation: 0,
      cornerX1: radius,
      cornerX2: 0,
      cornerY1: 0,
      cornerY2: radius,
      lineX1: 0,
      lineX2: 0,
      lineY1: radius,
      lineY2: size,
    };
  } else {
    return {
      height: size,
      width: radius,
      cornerOrientation: 1,
      cornerX1: width - radius,
      cornerX2: width,
      cornerY1: 0,
      cornerY2: radius,
      lineX1: width,
      lineX2: width,
      lineY1: radius,
      lineY2: size,
    };
  }
};

const ContentLine = ({
  side,
  top,
  size,
  radius,
  width: backgroundWidth,
}: {
  side: 'left' | 'right';
  top?: boolean;
  size: number;
  radius: number;
  width: number;
}) => {
  const {
    height,
    width,
    cornerOrientation,
    cornerX1,
    cornerX2,
    cornerY1,
    cornerY2,
    lineX1,
    lineX2,
    lineY1,
    lineY2,
  } = getContentVars(side, top ?? false, size, radius, backgroundWidth);

  return (
    <div
      className={'background-content'}
      style={{
        width: backgroundWidth,
        justifyContent: side === 'right' ? 'flex-end' : 'flex-start',
        flexDirection: top ? 'column' : 'row',
      }}>
      <svg height={height} width={width}>
        <CurvedCorner
          orientation={cornerOrientation}
          radius={radius}
          x1={cornerX1}
          x2={cornerX2}
          y1={cornerY1}
          y2={cornerY2}
        />
        <line
          style={{
            stroke: 'rgb(0,0,0)',
            strokeWidth: 1,
          }}
          x1={lineX1}
          x2={lineX2}
          y1={lineY1}
          y2={lineY2}
        />
      </svg>
    </div>
  );
};

export default ({ title, headerLinks, specialLink, children }: Props) => {
  const titleLength = title.length * 36;
  const nContent = children instanceof Array ? children.length : 1;
  const [width, setWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);

    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  return (
    <div>
      <div className={'header'}>
        <Name name={title} width={titleLength} />
        <nav>
          {headerLinks.map(({ title, to }) => (
            <HeaderButton title={title} to={to} />
          ))}
          {specialLink && (
            <SpecialButton
              className={'special'}
              title={specialLink.title}
              to={specialLink.to}
            />
          )}
        </nav>
      </div>
      <div className={'content'}>{children}</div>
      <div className={'background'} style={{ width: width }}>
        <svg className={'background-header'} height={96}>
          <line
            style={{
              stroke: 'rgb(0,0,0)',
              strokeWidth: 1,
            }}
            x1={0}
            x2={0}
            y1={0}
            y2={10}
          />
          <line
            style={{
              stroke: 'rgb(0,0,0)',
              strokeWidth: 1,
            }}
            x1={0}
            x2={titleLength}
            y1={5}
            y2={5}
          />
          <line
            style={{
              stroke: 'rgb(0,0,0)',
              strokeWidth: 1,
            }}
            x1={titleLength}
            x2={titleLength}
            y1={0}
            y2={10}
          />
          <line
            style={{
              stroke: 'rgb(0,0,0)',
              strokeWidth: 1,
            }}
            x1={titleLength / 2}
            x2={titleLength / 2}
            y1={5}
            y2={64}
          />
          <CurvedCorner
            orientation={1}
            radius={32}
            x1={titleLength / 2}
            x2={titleLength / 2 - 32}
            y1={64}
            y2={96}
          />
          <line
            style={{
              stroke: 'rgb(0,0,0)',
              strokeWidth: 1,
            }}
            x1={32}
            x2={width - 224}
            y1={96}
            y2={96}
          />
        </svg>
        {children instanceof Array ? (
          children.map((e, i) => (
            <>
              {i !== 0 && (
                <ContentLine
                  top
                  radius={32}
                  side={i % 2 === 0 ? 'left' : 'right'}
                  size={width - 143}
                  width={width - 143}
                />
              )}
              <ContentLine
                radius={32}
                side={i % 2 === 0 ? 'left' : 'right'}
                size={512}
                width={width - 143}
              />
            </>
          ))
        ) : (
          <svg className={'background-content content-1'} height={512}>
            <line
              style={{
                stroke: 'rgb(0,0,0)',
                strokeWidth: 1,
              }}
              x1={0}
              x2={0}
              y1={0}
              y2={448}
            />
            <line
              style={{
                stroke: 'rgb(0,0,0)',
                strokeWidth: 1,
              }}
              x1={0}
              x2={10}
              y1={448}
              y2={448}
            />
          </svg>
        )}
      </div>
    </div>
  );
};
