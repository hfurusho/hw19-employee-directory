import React, { useReducer } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

function EmployeeTable(props) {
  let { users } = props;

  const reducer = (state, action) => {
    let usersNow = [...users];
    if (action === state.type) {
      switch (action) {
        default:
        case "Last Name":
          if (state.order === "ASC") {
            usersNow.sort((a, b) => b.lastName.localeCompare(a.lastName));
          } else {
            usersNow.sort((a, b) => a.lastName.localeCompare(b.lastName));
          }
          break;
        case "First Name":
          if (state.order === "ASC") {
            usersNow.sort((a, b) => b.firstName.localeCompare(a.firstName));
          } else {
            usersNow.sort((a, b) => a.firstName.localeCompare(b.firstName));
          }
          break;
        case "Email":
          if (state.order === "ASC") {
            usersNow.sort((a, b) => b.email.localeCompare(a.email));
          } else {
            usersNow.sort((a, b) => a.email.localeCompare(b.email));
          }
          break;
        case "Age":
          if (state.order === "ASC") {
            usersNow.sort((a, b) => b.age - a.age);
          } else {
            usersNow.sort((a, b) => a.age - b.age);
          }
          break;
        case "Phone Number":
          if (state.order === "ASC") {
            usersNow.sort(
              (a, b) =>
                b.phoneNumber.replace(/[() -]/gi, "") -
                a.phoneNumber.replace(/[() -]/gi, "")
            );
          } else {
            usersNow.sort(
              (a, b) =>
                a.phoneNumber.replace(/[() -]/gi, "") -
                b.phoneNumber.replace(/[() -]/gi, "")
            );
          }
          break;
      }
      users = usersNow;
      return { ...state, order: state.order === "ASC" ? "DESC" : "ASC" };
    } else {
      switch (action) {
        default:
        case "Last Name":
          usersNow.sort((a, b) => a.lastName.localeCompare(b.lastName));
          break;
        case "First Name":
          usersNow.sort((a, b) => a.firstName.localeCompare(b.firstName));
          break;
        case "Email":
          usersNow.sort((a, b) => a.email.localeCompare(b.email));
          break;
        case "Age":
          usersNow.sort((a, b) => a.age - b.age);
          break;
        case "Phone Number":
          usersNow.sort(
            (a, b) =>
              a.phoneNumber.replace(/[() -]/gi, "") -
              b.phoneNumber.replace(/[() -]/gi, "")
          );
          break;
      }
      users = usersNow;

      return { type: action, order: "ASC" };
    }
  };

  const [sort, changeSortOrder] = useReducer(reducer, {
    type: "Last Name",
    order: "ASC"
  });

  return (
    <table className="table table-bordered">
      <TableHead
        colNames={[
          "Last Name",
          "First Name",
          "Age",
          "Email",
          "Phone Number",
          "Img"
        ]}
        changeSortOrder={changeSortOrder}
        sort={sort}
      />
      <TableBody users={users} />
    </table>
  );
}

export default EmployeeTable;
