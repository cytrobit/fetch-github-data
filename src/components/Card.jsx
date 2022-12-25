import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="imgbox">
        <img alt="avatar" src={props.avatar_url} />
      </div>
      <div>
        {props.name ? (
          <div className="username">{props.name}</div>
        ) : (
          <div className="username">{props.login}</div>
        )}
        <div className="blog">
          {props.blog ? (
            <a className="links" href={props.blog} target="_blank" rel="noreferrer">
              {props.blog}
            </a>
          ) : (
            <a className="links" href={props.html_url} target="_blank" rel="noreferrer">
              {props.html_url}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
