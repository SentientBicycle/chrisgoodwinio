import React, { Component } from 'react';
import styles from './DropFade.module.css';

class DropFade extends Component {

	componentDidMount() {
		this.df.addEventListener('animationend', this.props.setNextActive);
	}
	

  render (){
  	const CustomTag = `${this.props.tagtype}`;
  	return (
  		/*  
		  *  Outputs a custom tag with the initial element containing the active class.
		  *  place: the index of the created element.  Not used right now, however may be
		  *         useful when adding redux.
		  *  word: the actual content of the tag.
		  *  reg:  This is a reference callback to add the animationend event listener.
  		  */
	  	<CustomTag  
	  		ref={elem=> this.df = elem} 
	  		className={`${styles.fader} ${this.props.active === true ? styles.active : ''}`} >
	  		{`${this.props.word}`}
  		</CustomTag>
  	
	);
  }
}

DropFade.contextTypes = {

};

DropFade.propTypes = {

};

export default DropFade;