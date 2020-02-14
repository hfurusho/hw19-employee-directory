import React from "react";

function TableHead(props) {
  const { colNames } = props;
  const tableHeaders = colNames.map(colName => <th scope="col">{colName}</th>);

  return (
    <thead>
      <tr>{tableHeaders}</tr>
    </thead>
  );
}

export default TableHead;
