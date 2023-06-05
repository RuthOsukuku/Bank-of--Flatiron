import React from "react";

function Transaction({date, description, category, amount, id}) {
  return (
    <tr  key={id}>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
}

export default Transaction;