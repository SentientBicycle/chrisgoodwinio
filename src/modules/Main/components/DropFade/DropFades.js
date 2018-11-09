import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './DropFade.module.css';
import DropFade from './DropFade.js'

class DropFades extends Component {



  render (){
  	const words = ['Is\u00a0Hard\u00a0Working', 'Is\u00a0Efficient', 'Is\u00a0Focused', 'Is\u00a0Energetic', 'Has\u00a0a\u00a0Pteradactyl', 'Is\u00a0Color\u00a0Blind', 'Can\'t\u00a0Digest\u00a0Lactose' ];
  	const tagtype = 'h2';
  	return (
  		<div className={styles['parent-container']}>
	  		<div className={styles['fade-container']}>
		  		{words.map( (word, index) => {return <DropFade key={index} place={index} word={word} tagtype={tagtype} />})}
		  	</div>
	  	</div>
	);
  }
}

DropFades.contextTypes = {
  router: PropTypes.object,
};

DropFades.propTypes = {

};

export default DropFades;
