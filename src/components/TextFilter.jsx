import React, { Component } from "react";

export default class TextFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const { onTextFilter } = this.props;
    const { value } = event.target;

    this.setState({
      input: value
    });

    onTextFilter(value);
  }

  render() {
    console.log("props: ", this.props);
    return (
      <div className="col">
        <label htmlFor="textFilter">Search</label>
        <input
          onChange={this.handleInputChange}
          type="text"
          className="form-control"
          id="textFilter"
        />
      </div>
    );
  }
}
