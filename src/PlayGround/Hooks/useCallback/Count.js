import React, { memo } from 'react';

function Count({ text, count }) {
  console.log(`Rendering Title - ${text}`);
  return <div>{`${text} - ${count}`}</div>;
}

export default memo(Count);
