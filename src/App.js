import React from "react";
import axios from "axios";
import Threads from "./components/Threads";
import Navigation from "./components/Navigation";
import Pagination from "./components/Pagination";

import "./styles/main.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      author: "",
      subreddit: "",
      currentPage: 1,
      postsPerPage: 10
    };
  }

  componentDidMount() {
    axios
      .get(`https://www.reddit.com/r/Art/best.json?limit=100`)
      .then(response => {
        let res = response.data.data.children;
        let subreddit =
          response.data.data.children[0].data.subreddit_name_prefixed;
        this.setState({ posts: res, subreddit: subreddit });
      })
      .catch(error => {
        console.log(error);
      });
  }

  getInfo = listing => {
    axios
      .get(`https://www.reddit.com/r/Art/${listing}.json`)
      .then(response => {
        let res = response.data.data.children;
        this.setState({ posts: res });
      })
      .catch(error => {
        console.log(error);
      });
  };

  paginatePage = pageNumber => {
    this.setState({ currentPage: pageNumber });
  };
  render() {
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    const currentPosts = this.state.posts.slice(
      indexOfFirstPost,
      indexOfLastPost
    );
    return (
      <React.Fragment>
        <Navigation getInfo={this.getInfo} subreddit={this.state.subreddit} />
        <Threads posts={currentPosts} />
        <Pagination
          currentPage={this.state.currentPage}
          postsPerPage={this.state.postsPerPage}
          totalPosts={this.state.posts.length}
          paginatePage={this.paginatePage}
        />
      </React.Fragment>
    );
  }
}

export default App;
