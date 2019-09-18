import React from "react";

export default function Searchtext(props) {
  return (
    <div className="search">
      <input type="text" onChange={props.findArrayElementByTitle} />
    </div>
  );
}
