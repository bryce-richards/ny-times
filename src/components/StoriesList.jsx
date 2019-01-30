import React, { Component } from "react";
import StoriesListItem from "./StoriesListItem";

export default class StoriesList extends Component {
  constructor(props) {
    super(props);
  }

  buildStoryListItems() {
    const { stories } = this.props;
    const maxStories = stories.slice(0, 30);

    return maxStories.map((story, i) => {
      return <StoriesListItem key={i} story={story} />;
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col">{this.buildStoryListItems()}</div>
      </div>
    );
  }
}
