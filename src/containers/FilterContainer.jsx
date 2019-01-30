import React, { Component } from "react";
import { SECTIONS } from "../helpers/constants";

export default class FilterContainer extends Component {
  buildSectionOptions() {
    return SECTIONS.map(section => {
      const { name, value } = section;
      return (
        <option key={value} value={value}>
          {name}
        </option>
      );
    });
  }

  render() {
    return (
      <div className="row">
        Filter Container
        <form>
          <div className="form-group">
            <label htmlFor="sectionFilter">Section</label>
            <select className="form-control" id="sectionFilter">
              {this.buildSectionOptions()}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="textFilter">Search</label>
            <input type="text" className="form-control" id="textFilter" />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
