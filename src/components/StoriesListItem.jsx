import React, { Component } from "react";

export default class StoriesListItem extends Component {
  render() {
    const {
      title,
      byline,
      abstract,
      url,
      published_date,
      multimedia
    } = this.props.story;

    const img =
      (multimedia && multimedia[1] && multimedia[1].url) ||
      (multimedia && multimedia[0] && multimedia[0].url);

    return (
      <div className="row">
        <div className="col-sm-8">
          <h5>{title}</h5>
          <p>{abstract}</p>
          <p>
            <small className="text-muted">{byline}</small>
          </p>
        </div>
        <div className="col-sm-4">
          <img src={img} />
        </div>
      </div>
    );
  }
}
