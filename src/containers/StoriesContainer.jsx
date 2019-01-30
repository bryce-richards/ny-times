import React, { Component } from "react";
import { BASE_URL, API_KEY } from "../helpers/constants";
import FilterContainer from "./FilterContainer";
import StoriesList from "../components/StoriesList";

export default class StoriesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stories: [],
      sectionFilter: "",
      textFilter: ""
    };

    this.fetchArticles = this.fetchArticles.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.filterStories = this.filterStories.bind(this);
  }

  fetchArticles() {
    const section = this.state.sectionFilter.length
      ? `${this.state.sectionFilter}.json`
      : "";
    const url = `${BASE_URL}/${section}?api-key=${API_KEY}`;
    console.log("url: ", url);
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(json => {
        this.setState(
          {
            stories: json.results
          },
          () => {
            this.filterStories();
          }
        );
      })
      .catch(e => {
        console.log("Error: ", e);
      });
  }

  handleFilterChange(state) {
    const { textFilter, sectionFilter } = state;
    this.setState(
      {
        textFilter,
        sectionFilter
      },
      () => {
        this.fetchArticles();
      }
    );
  }

  filterStories() {}

  render() {
    return (
      <div className="container">
        <nav>
          <h1>NY Times Top Stories</h1>
        </nav>
        <FilterContainer onFilterChange={this.handleFilterChange} />
        <StoriesList stories={this.state.stories} />
      </div>
    );
  }
}
