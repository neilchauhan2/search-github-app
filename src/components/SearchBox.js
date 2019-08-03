import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser, getUserRepos } from "../store/actions/githubActions";
import User from "./User";
import Spinner from "./layouts/Spinner";

class SearchBox extends Component {
  state = {
    username: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.getUser(this.state.username);
    this.props.getUserRepos(this.state.username);
  };

  render() {
    return (
      <div className="search-box">
        <section className="hero container">
          <div className="hero-body">
            <div className="container is-fluid">
              <h1 className="title">Enter username to search.</h1>

              <div className="field is-grouped ">
                <p className="control is-expanded">
                  <input
                    name="username"
                    onChange={this.onChange}
                    className="input is-medium "
                    type="text"
                    placeholder="Enter link to shorten"
                  />
                </p>
                <p className="control">
                  <button
                    onClick={this.onSubmit}
                    className="button is-info url-btn is-medium "
                  >
                    Search
                  </button>
                </p>
              </div>
            </div>
          </div>
        </section>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <User user={this.props.user} repos={this.props.repos} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.github.user,
    repos: state.github.repos,
    loading: state.github.loading
  };
};

export default connect(
  mapStateToProps,
  { getUser, getUserRepos }
)(SearchBox);
