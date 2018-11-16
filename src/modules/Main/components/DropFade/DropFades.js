import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './DropFade.module.css';
import DropFade from './DropFade'

class DropFades extends Component {
  state = {
    words: [
      { word:'Is\u00a0Hard\u00a0Working', active:true },
      { word:'Is\u00a0Efficient', active:false },
      { word:'Is\u00a0Focused', active:false },
      { word:'Is\u00a0Energetic', active:false },
      { word:'Has\u00a0a\u00a0Pteradactyl', active:false },
    ],
    active:0,
  }
  setNextActive = () => {
    const currentActive =  this.state.active;
    const nextActive = currentActive >= this.state.words.length - 1 ? 0 : currentActive + 1; 
    const newState = {...this.state};
    newState.words[nextActive].active = true;
    newState.words[currentActive].active = false;
    newState.active = nextActive;
    this.setState(newState);
  }

  render (){
  	const tagtype = 'h2';
  	return (
  		<div className={styles['parent-container']}>
	  		<div className={styles['fade-container']}>
		  		{this.state.words.map( (word, index) => {return <DropFade key={index} word={word.word} tagtype={tagtype} active={word.active} setNextActive={this.setNextActive} />})}
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
