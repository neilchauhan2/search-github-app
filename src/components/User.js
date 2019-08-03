import React, { Component } from "react";
import { connect } from "react-redux";
// import Spinner from "./layouts/Spinner";

class User extends Component {
  render() {
    return (
      <div className="container user-container">
        <div className="columns">
          <div className="column is-3">
            <div className="user-image">
              <figure class=" image is-128x128">
                <img
                  alt="user"
                  src="https://bulma.io/images/placeholders/128x128.png"
                />
                <div className="info">
                  <div className=" is-size-2 info-name"> Neil Chauhan </div>
                  <div className=" is-size-3 info-username">neilchauhan2</div>
                </div>
                <button className="is-fullwidth profile-btn button is-link">
                  View Profile
                </button>
              </figure>
            </div>
          </div>

          <div className="column">
            <div className="conatainer">
              <div className="columns is-multiline">
                <div className=" is-size-6 column is-2 tag is-primary ">
                  Repositories:{" "}
                </div>
                <div className=" is-size-6 column is-2 tag  is-info">
                  Followers:{" "}
                </div>
                <div className=" is-size-6 column is-2 tag is-success">
                  Following:{" "}
                </div>
                <div className=" is-size-6 column is-2 tag  is-danger">
                  Gists:{" "}
                </div>

                <div className="column is-4">HEllo</div>
                <div className="column is-4">HEllo</div>
                <div className="column is-4">HEllo</div>
                <div className="column is-4">HEllo</div>
                <div className="column is-4">HEllo</div>
                <div className="column is-4">HEllo</div>
              </div>
            </div>
          </div>
        </div>
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
