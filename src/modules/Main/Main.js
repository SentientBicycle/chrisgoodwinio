import React, { Component } from 'react';
import style from './Main.module.css';
import DropFades from './components/DropFade/DropFades';
import HeaderImage from './resources/my-life-through-a-lens-110632-unsplash.jpg'

class Main extends Component {
  render() {
    return (
    	<React.Fragment>
      <section className={style['main-section']}>
        <h1 className={style['title-header']}>Chris Goodwin</h1>
        <DropFades/>
      	<p className={style['hero-copy']}>Hello and welcome to my humble website.  I made everything you see before you from scratch.</p>
      </section>
      <section>
      <figure className={style.figure}>
      		<img className={style.image} src={HeaderImage} alt=""/>
      	</figure>
      </section>
      </React.Fragment>
    );
  }
}

export default Main;
