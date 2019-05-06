import React, { Component } from 'react';

const searchBar = props => (
  <article>
    <h2>{props.title}</h2>
    <div>
      <img src={props.picture} />
      <p>{props.content}</p>
    </div>
  </article>
);
