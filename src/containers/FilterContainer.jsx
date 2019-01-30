import React, { Component } from "react";
import TextFilter from "../components/TextFilter";
import SectionFilter from "../components/SectionFilter";

export default class FilterContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textFilter: "",
      sectionFilter: ""
    };

    this.handleTextFilter = this.handleTextFilter.bind(this);
    this.handleSectionFilter = this.handleSectionFilter.bind(this);
  }

  handleTextFilter(textFilter) {
    const { onFilterChange } = this.props;

    this.setState({ textFilter }, () => {
      onFilterChange(this.state);
    });
  }

  handleSectionFilter(sectionFilter) {
    const { onFilterChange } = this.props;

    this.setState({ sectionFilter }, () => {
      onFilterChange(this.state);
    });
  }

  render() {
    return (
      <div className="row">
        <form className="col">
          <div className="row form-group">
            <SectionFilter onSectionFilter={this.handleSectionFilter} />
            <TextFilter onTextFilter={this.handleTextFilter} />
          </div>
        </form>
      </div>
    );
  }
}
