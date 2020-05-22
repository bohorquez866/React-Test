import React, { Component } from 'react';


class content extends Component {
  render() {
  return (

<main className="content__container">
<section className="content__card-wrapper">
  <article className="content__card content__card--1">
    <h2 className="content__card-title">This is all products in in our mall online</h2>
    <p className="content__card-send">Send>  <i className="fas fa-user-circle"></i></p>
    </article>


  <article className="content__card content__card--2">
  <h2 className="content__card-title ">This is all companies in in our mall online</h2>
    <p className="content__card-send">Send>   <i className="fas fa-user-circle"></i></p>
    
  </article>

  <article className="content__card content__card--3">
    <h1>Equip Challenge Front</h1>
    <p className="content__card-text">
      Exceptur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
    </p>
  </article>
</section>

<button className="content__btn btn fw-700">Start your project &#8594;</button>
</main>

    );
}
};

export default content;