import React from "react";
import Search from "./Search";

const Navigation = props => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <img
            src="https://logodownload.org/wp-content/uploads/2018/02/reddit-logo-16.png"
            alt=""
          />
        </li>
        <li>
          <p>{props.subreddit}</p>
        </li>
        <li>
          <Search />
        </li>
        <li>
          <button onClick={() => props.getInfo("hot")}>Hot</button>
        </li>
        <li>
          <button onClick={() => props.getInfo("best")}>Best</button>
        </li>
        <li>
          <button onClick={() => props.getInfo("new")}>New</button>
        </li>
        <li>
          <button onClick={() => props.getInfo("top")}>Top</button>
        </li>
        <li>
          <button onClick={() => props.getInfo("rising")}>Rising</button>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
