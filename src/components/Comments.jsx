import React from "react";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: this.props.isActive
    };
  }

  componentWillReceiveProps = props => {
    this.setState({ isOn: this.props.isActive });
  };

  removeSide = () => {
    const active = this.state.isOn;
    this.setState({ isOn: !active });
  };

  render() {
    return (
      <React.Fragment>
        <ul
          className={
            this.state.isOn && this.props.comments.length > 0
              ? "sideBar active"
              : "sideBar"
          }
        >
          <i
            class="fa fa-window-close"
            aria-hidden="true"
            onClick={this.removeSide}
          ></i>
          {this.props.comments.map((comment, i) => (
            <li key={i} className="comment">
              <p className="author">
                {comment.data.author}{" "}
                {comment.data.ups <= 1 ? (
                  <span>{comment.data.ups} point</span>
                ) : (
                  <span> {comment.data.ups} points</span>
                )}
              </p>

              <p>{comment.data.body}</p>
              <ul className="comment-links">
                <li>
                  <a href="!#">Reply</a>
                </li>
                <li>
                  <a href="!#">Give Award</a>
                </li>
                <li>
                  <a href="!#">Share</a>
                </li>
                <li>
                  <a href="!#">Report</a>
                </li>
                <li>
                  <a href="!#">Save</a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default Comments;
