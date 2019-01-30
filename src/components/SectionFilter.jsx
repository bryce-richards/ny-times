import React, { Component } from "react";
import { SECTIONS } from "../helpers/constants";

export default class SectionFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      select: ""
    };

    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

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

  handleSelectChange(event) {
    const { onSectionFilter } = this.props;
    const { value } = event.target;

    this.setState({
      select: value
    });

    onSectionFilter(value);
  }

  render() {
    return (
      <div className="col">
        <label htmlFor="sectionFilter">Section</label>
        <select
          className="form-control"
          id="sectionFilter"
          onChange={this.handleSelectChange}
        >
          {this.buildSectionOptions()}
        </select>
      </div>
    );
  }
}
