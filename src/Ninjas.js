import React from "react";
// This is a UI component
const Ninjas = ({ ninjas , deleteNinja }) => {
  // CONDITIONAL OUTPUTS 
//   const ninjaList = ninjas.map(ninja => {
//     if (ninja.age > 20) {
//       return (
//         <div className="ninja" key={ninja.id}>
//           <div>Name: {ninja.name}</div>
//           <div>Age: {ninja.age}</div>
//           <div>Belt: {ninja.belt}</div>
//         </div>
//       );
//     } else return null;
//   });
// }; 
  // Second Conditional Statement
  const ninjaList = ninjas.map(ninja => {
    return ninja.age > 20 ? (
      <div className="ninja" key={ninja.id}>
        <div>Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <div>Belt: {ninja.belt}</div>
        <button onClick={() => {deleteNinja(ninja.id)}}>Delete ninja </button>
      </div>
    ) : null;
  });
  return <div className="ninja-list">{ninjaList}</div>;
}

export default Ninjas;
