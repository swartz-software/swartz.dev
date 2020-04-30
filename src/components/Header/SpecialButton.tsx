import React from 'react';

import { useColor } from 'Theme';

export const SpecialButton = ({
  className,
  title,
  to,
}: {
  className: string;
  title: string;
  to: string;
}) => {
  const { highlight, textHighlight } = useColor();

  return (
    <a
      href={to}
      style={{
        color: textHighlight,
      }}>
      <div
        className={className}
        style={{
          backgroundColor: highlight,
          boxShadow: '0 1px 2px black',
        }}>
        <div className={'title'}>
          <h3
            style={{
              textShadow: '0 -1px 1px #117711',
            }}>
            {title}
          </h3>
        </div>
      </div>
    </a>
  );
};
