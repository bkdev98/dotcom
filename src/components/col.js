import React from 'react';

import useWindowSize from '../hooks/useWindowSize';

const Col = ({ lg = '50%', sm = '100%', style, ...props }) => {
  const { width } = useWindowSize();
  return (
    <div
      {...props}
      style={{
        ...style,
        display: 'inline-block',
        width: width >= 809 ? lg : sm,
      }}
    />
  );
}

export default Col;
