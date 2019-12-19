import React from "react";
import AddNinja from "./AddNinja";

const Ninjas = ({ ninjas }) => {
  const ninjaList = ninjas.map(ninja => {
    if (ninja.age > 20) {
      return (
        <div className="ninja" key={ninja.id}>
          <div>Name : {ninja.name}</div>
          <div>Age : {ninja.age}</div>
          <div>Belt : {ninja.belt}</div>
        </div>
      );
    } else {
      return null;
    }
  });

  return (
    <div className="ninja-list">
      {ninjaList}
      <AddNinja />
    </div>
  );
};

export default Ninjas;
