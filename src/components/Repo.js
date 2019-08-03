import React, { Component } from "react";
// import { Link } from "react-router-dom";

class Repo extends Component {
  render() {
    const { repo } = this.props;
    return (
      <article className="repo column is-4 message is-link">
        <div className="message-header">
          <p>{repo.name}</p>
        </div>
        <div className="message-body">{repo.description}</div>
        <div className=" is-size-6  tag is-primary ">Forks: {repo.forks}</div>
        <div className=" is-size-6  tag  is-info">
          Stars: {repo.stargazers_count}
        </div>
        <div className=" is-size-6  tag is-success">
          Watchers: {repo.watchers_count}
        </div>
        <a
          href={repo.html_url}
          target={"_blank"}
          className="button repo-btn is-fullwidth is-danger"
        >
          View Repo
        </a>
      </article>
    );
  }
}

export default Repo;
