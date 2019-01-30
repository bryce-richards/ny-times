import React, { Component } from "react";
import { BASE_URL, API_KEY } from "../helpers/constants";
import FilterContainer from "./FilterContainer";
import StoriesList from "../components/StoriesList";

export default class StoriesContainer extends Component {
  componentWillMount() {
    this.setState({
      stories: [],
      section: ""
    });

    // this.onInputChange = this.onInputChange.bind(this);
  }

  buildSectionOptions() {
    return <select />;
  }

  fetchArticles(value) {
    const section = value.length ? `{value}.json` : "";
    const url = `${BASE_URL}/${section}`;
  }

  render() {
    return (
      <div className="container">
        <FilterContainer />
        <StoriesList />
      </div>
    );
  }
}
