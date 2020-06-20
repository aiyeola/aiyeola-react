import React from 'react';
import ClassA from './Class/ClassA';

export const UserContext = React.createContext();
export const OccupationContext = React.createContext();

function App() {
  return (
    <div>
      <UserContext.Provider value={'Aiyeola'}>
        <OccupationContext.Provider value={'developer'}>
          <ClassA />
        </OccupationContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;

// context are to be used sparingly and prudently
// context are useful for global variables that never or rarely change during
// user session

// Localization or Theme-ing are good use cases
