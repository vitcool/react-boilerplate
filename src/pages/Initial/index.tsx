import React from 'react';
import { Props } from './types';

const Initial = (props: Props) => {
  const switchStarted = () => {
    props.exampleAction(!props.isStarted);
  }
  return (
    <div>
      <button onClick={switchStarted}>Switch state</button>
    </div>
  );
};

export default Initial;
