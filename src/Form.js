import React from "react";

export default function Form() {
  return (
    <form id="city-form">
      <div className="row">
        <div className="col-9" id="city-search">
          <input
            id="city-input"
            type="search"
            placeholder="Enter a city"
            autofocus="on"
            autocomplete="off"
            className="form-control search-input"
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            className="btn btn-primary w-100"
            id="button-search"
            value="Search"
          />
        </div>
      </div>
    </form>
  );
}
