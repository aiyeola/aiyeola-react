import React, { useContext } from 'react';
import ClassC from './ClassC';
import { UserContext, OccupationContext } from '..';

function ClassB() {
  const user = useContext(UserContext);
  const occupation = useContext(OccupationContext);

  return (
    <div>
      <ClassC />
      {user} - {occupation}
    </div>
  );
}

export default ClassB;
