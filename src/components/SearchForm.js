import React from "react";

function SearchForm(props) {
  const { handleSubmit } = props;

  function getValues() {
    const searchTerm = document
      .getElementById("searchField")
      .value.trim()
      .toLowerCase();
    const searchSelect = document.getElementById("searchSelect");
    const searchCategory =
      searchSelect.options[searchSelect.selectedIndex].value;
    return { searchTerm, searchCategory };
  }

  return (
    <form className="form-inline my-3">
      <div className="form-group">
        <label htmlFor="searchField">Search Term</label>
        <input
          type="text"
          className="form-control mx-2"
          id="searchField"
          placeholder="Name, email, etc."
        />
      </div>
      <select className="form-control mx-2" id="searchSelect">
        <option value="firstName">First Name</option>
        <option value="lastName">Last Name</option>
        <option value="age">Age</option>
        <option value="email">Email</option>
        <option value="phoneNumber">Phone Number</option>
      </select>
      <button
        type="button"
        className="btn btn-primary mx-2"
        onClick={() => handleSubmit(getValues())}
      >
        Submit
      </button>
    </form>
  );
}

export default SearchForm;
