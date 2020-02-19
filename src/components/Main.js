import React, { useState, useEffect } from "react";
import SearchForm from "../components/SearchForm";
import EmployeeTable from "../components/EmployeeTable";
import Users from "../db/users.js";

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
const initialState = data;

function Main() {
  const [users, setUsers] = useState([]);

  const handleSubmit = data => {
    const { searchTerm, searchCategory } = data;
    let allUsers = initialState;
    if (searchTerm) {
      let usersFiltered = allUsers.filter(user =>
        user[searchCategory]
          .toString()
          .toLowerCase()
          .includes(searchTerm)
      );
      setUsers(usersFiltered);
    } else {
      setUsers(initialState);
    }
  };

  useEffect(() => {
    setUsers(initialState);
  }, []);
  return (
    <div className="col-12">
      <SearchForm handleSubmit={handleSubmit} />
      <EmployeeTable users={users} />
    </div>
  );
}

export default Main;
