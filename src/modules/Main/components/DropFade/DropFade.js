import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './DropFade.module.css';

class DropFade extends Component {

	componentDidMount() {
		this.df.addEventListener('animationend', this.setNextActive);
	}

	setNextActive(e) {
		e.target.classList.remove(styles.active);
		if(e.target.nextSibling){
			e.target.nextSibling.classList.add(styles.active);
		} else {
			e.target.parentNode.firstChild.classList.add(styles.active);
		}
	}

  render (){
  	return (
	  	<p  ref={elem=> this.df = elem} className={`${styles.fader} ${this.props.place === 0 ? styles.active : ''}`} place={this.props.place} >{this.props.word}</p>
	);
  }
}

DropFade.contextTypes = {

};

DropFade.propTypes = {

};

export default DropFade;