import React, { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
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
                  onClick={this.onClick}
                  className="button is-info url-btn is-medium "
                >
                  Search
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SearchBox;
