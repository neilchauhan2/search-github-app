import React, { Component } from "react";
import { connect } from "react-redux";

import Repo from "./Repo";
// import Spinner from "./layouts/Spinner";

class User extends Component {
  render() {
    const { user, repos } = this.props;
    return (
      <div>
        {user ? (
          <div className="container user-container">
            <div className="columns">
              <div className="column is-3">
                <div className="user-image">
                  <figure class=" image is-128x128">
                    <img alt="user" src={user.avatar_url} />
                    <div className="info">
                      <div className=" is-size-3 has-text-centered info-name">
                        {" "}
                        {user.name}{" "}
                      </div>
                      <div className=" is-size-4 has-text-centered info-username">
                        {user.login}
                      </div>
                    </div>
                    <a href={user.html_url} target={"_blank"}>
                      <button className="is-fullwidth profile-btn button is-link">
                        View Profile
                      </button>
                    </a>
                  </figure>
                </div>
              </div>

              <div className="column has-text-centered">
                <div className="conatainer">
                  <div className="columns is-multiline">
                    <div className=" is-size-6 column is-2 tag is-primary ">
                      Repositories: {user.public_repos}
                    </div>
                    <div className=" is-size-6 column is-2 tag  is-info">
                      Followers: {user.followers}
                    </div>
                    <div className=" is-size-6 column is-2 tag is-success">
                      Following: {user.following}
                    </div>
                    <div className=" is-size-6 column is-2 tag  is-danger">
                      Gists: {user.public_gists}
                    </div>
                    {repos && repos.map(repo => <Repo repo={repo} />)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.github.loading
  };
};

export default connect(mapStateToProps)(User);
