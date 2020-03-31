import React from "react";
import { connect } from "react-redux";
import { getReadableStories, getFetchError } from "../selectors/story";
import "./Stories.css";

import Story from "./Story";

const COLUMNS = {
  title: {
    label: "Title",
    width: "40%"
  },
  author: {
    label: "Author",
    width: "30%"
  },
  comments: {
    label: "Comments",
    width: "10%"
  },
  points: {
    label: "Points",
    width: "10%"
  },
  archive: {
    label: "Action",
    width: "10%"
  }
};
const mapStateToProps = state => ({
  stories: getReadableStories(state),
  error: getFetchError(state)
});

const Stories = ({ stories, error }) => (
  <div className="stories">
    <StoriesHeader columns={COLUMNS} />
    {error && <p className="error">Something went wrong...</p>}
    {(stories || []).map(story => (
      <Story key={story.objectID} story={story} columns={COLUMNS} />
    ))}
  </div>
);
const StoriesHeader = ({ columns }) => (
  <div className="stories-header">
    {Object.values(columns).map((item, index) => (
      <span key={index} style={{ width: item.width }}>
        {item.label}
      </span>
    ))}
  </div>
);

export default connect(mapStateToProps)(Stories);
