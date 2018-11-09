import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './DropFade.module.css';
import DropFade from './DropFade.js'

class DropFades extends Component {



  render (){
  	const words = ['Hard Working', 'Efficient', 'Focused', 'Energetic', 'Pteradactyl'];
  	return (
	  	<div className={styles['fade-container']}>
	  		{words.map( (word, index) => {return <DropFade key={index} place={index} word={word} />})}
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
