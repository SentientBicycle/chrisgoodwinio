import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './DropFade.module.css';
import DropFade from './DropFade'

class DropFades extends Component {
  state = {
    words: [
      { id:0, word:'Is\u00a0Hard\u00a0Working', active:true },
      { id:1, word:'Is\u00a0Efficient', active:false },
      { id:2, word:'Is\u00a0Focused', active:false },
      { id:3, word:'Is\u00a0Energetic', active:false },
      { id:4, word:'Has\u00a0a\u00a0Pteradactyl', active:false },
    ]
  }
  setNextActive = (e) => {
    const fadeId =  parseInt(e.originalTarget.getAttribute('place'));
    const nextTarget = fadeId >= this.state.words.length - 1 ? 0 : fadeId + 1; 
    const newState = {...this.state};
    newState.words[nextTarget].active = true;
    newState.words[fadeId].active = false;
    this.setState(newState);
  }

  render (){
  	const tagtype = 'h2';
  	return (
  		<div className={styles['parent-container']}>
	  		<div className={styles['fade-container']}>
		  		{this.state.words.map( (word, index) => {return <DropFade key={word.id} place={word.id} word={word.word} tagtype={tagtype} active={word.active} setNextActive={this.setNextActive} />})}
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
