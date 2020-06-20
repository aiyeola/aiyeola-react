import React, { useState } from 'react';
import HookEffect from './HookEffect';

function EffectContainer() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <HookEffect />}
    </div>
  );
}

export default EffectContainer;
