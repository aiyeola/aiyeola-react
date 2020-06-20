import React from 'react';
import { UserContext, OccupationContext } from '..';

function ClassC() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => (
          <OccupationContext.Consumer>
            {(occupation) => (
              <div>
                User context value {user}, Occupation context value {occupation}
              </div>
            )}
          </OccupationContext.Consumer>
        )}
      </UserContext.Consumer>
    </div>
  );
}

export default ClassC;
