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

    // if section was changed, fetch articles
    if (sectionFilter !== this.state.sectionFilter) {
      this.setState(
        {
          sectionFilter
        },
        () => {
          if (this.state.sectionFilter) {
            this.fetchArticles();
          }
        }
      );
    }

    // if text was changed, filter articles
    if (textFilter !== this.state.textFilter) {
      this.setState(
        {
          textFilter
        },
        () => {
          this.filterStories();
        }
      );
    }
  }

  filterStories() {
    const { stories, textFilter } = this.state;
    let filteredStories = [];

    // user needs to type more than 3 characters to trigger the filter
    if (textFilter.length > 3 && this.state.stories) {
      for (let i = 0; i < stories.length; i++) {
        const { title, abstract } = stories[i];
        if (title.search(textFilter) > -1 || abstract.search(textFilter) > -1) {
          filteredStories.push(stories[i]);
        }
      }
      this.setState({
        filteredStories
      });
    } else {
      this.setState({
        filteredStories: stories
      });
    }
  }

  render() {
    return (
      <div className="container">
        <nav>
          <h1>NY Times Top Stories</h1>
        </nav>
        <FilterContainer onFilterChange={this.handleFilterChange} />
        <StoriesList stories={this.state.filteredStories} />
      </div>
    );
  }
}
