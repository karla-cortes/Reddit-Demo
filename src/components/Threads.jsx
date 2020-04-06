import React, { Component } from "react";
import Comments from "./Comments";
import axios from "axios";

class Threads extends Component {
  state = {
    comments: [],
    isActive: false
  };

  showComment = post => {
    axios
      .get(`https://www.reddit.com/r/Art/comments/${post}.json?limit=100`)
      .then(response => {
        let res = response.data[1].data.children;
        this.setState({ comments: res, isActive: !this.state.isActive });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <React.Fragment>
        <div className="threads">
          <h2>{this.state.subreddit}</h2>
          {this.props.posts.map((post, i) => (
            <div
              onClick={() => this.showComment(post.data.id)}
              key={i}
              className="indvidual-thread"
            >
              <div className="up-down">
                <i class="fa fa-angle-up" aria-hidden="true"></i>
                <span>{post.data.ups}</span>
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </div>
              <img
                src={post.data.thumbnail}
                alt="thumbnail"
                width="80"
                height="80"
              />
              <div className="title-author">
                <p>{post.data.title}</p>
                <div className="author">
                  <p>Posted by: u/{post.data.author}</p>
                </div>
              </div>
              <div className="comments">
                <i class="fa fa-comments" aria-hidden="true"></i>
                <a href="!#">{post.data.num_comments}</a>
              </div>
            </div>
          ))}
        </div>
        <Comments
          comments={this.state.comments}
          isActive={this.state.isActive}
        />
      </React.Fragment>
    );
  }
}

export default Threads;
