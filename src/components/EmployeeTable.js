import React, { useEffect, useState } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import Users from "../db/users.js";

function EmployeeTable() {
  const [users, setUsers] = useState({
    users: []
  });

  useEffect(() => {
    let data = Users.map(user => {
      let {
        name: { first: firstName, last: lastName },
        email,
        login: { uuid: id },
        dob: { age },
        phone: phoneNumber,
        picture: { thumbnail }
      } = user;
      return { firstName, lastName, email, id, age, phoneNumber, thumbnail };
    });
    data.sort((a, b) => a.lastName.localeCompare(b.lastName));
    setUsers({ users: data });
  }, []);
  return (
    <table className="table">
      <TableHead
        colNames={[
          "Last Name",
          "First Name",
          "Age",
          "Email",
          "Phone Number",
          "Thumbnail"
        ]}
      />
      <TableBody users={users} />
    </table>
  );
}

export default EmployeeTable;
