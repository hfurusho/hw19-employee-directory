import React from "react";

function TableBody(props) {
  const users = props.users;
  const rowData = users.map(user => {
    return (
      <tr key={user.id}>
        <td className="border-left border-right">{user.lastName}</td>
        <td className="border-left border-right">{user.firstName}</td>
        <td className="border-left border-right">{user.age}</td>
        <td className="border-left border-right">{user.email}</td>
        <td className="border-left border-right">{user.phoneNumber}</td>
        <td className="border-left border-right">
          <img
            src={user.thumbnail}
            alt={`${user.firstName} ${user.lastName}'s thumbnail.`}
          />
        </td>
      </tr>
    );
  });
  return <tbody>{rowData}</tbody>;
}

export default TableBody;
