import React from 'react';

import useWindowSize from '../hooks/useWindowSize';

const Row = ({ style, ...props }) => {
  const { width } = useWindowSize();
  return (
    <div
      {...props}
      style={{
        ...style,
        display: 'flex',
        width: '100%',
        flexDirection: width >= 809 ? 'row' : 'column',
        justifyContent: 'space-between',
      }}
    />
  );
}

export default Row;
