import React from "react";

export default function TableList(props) {
  return (
    <table>
      <thead>
        <tr>
          {props.head.map(item => (
            <th key={item}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.body.length !== 0 ? (
          props.body.map(item => (
            <tr key={item.name}>
              {Object.keys(item).map((itemData, i) => (
                <td key={i}>{item[itemData]} </td>
              ))}
            </tr>
          ))
        ) : (
          <tr>
            <td>‘Sorry No Matches found’.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
