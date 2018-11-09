import React, { Component } from 'react';
import styles from './DropFade.module.css';

class DropFade extends Component {

	componentDidMount() {
		this.df.addEventListener('animationend', this.setNextActive);
	}

	/*  Not especially fond of this implmentation
	 *  however it gets the job done no matter how many
	 *  dropefades are created.  Once redux is put in
	 *  I may change it so there is a reference to each
	 *  element in the props.
	*/
	setNextActive(e) {
		e.target.classList.remove(styles.active);
		if(e.target.nextSibling){
			e.target.nextSibling.classList.add(styles.active);
		} else {
			e.target.parentNode.firstChild.classList.add(styles.active);
		}
	}

  render (){
  	const CustomTag = `${this.props.tagtype}`;
  	return (
  		/*  
		  *  Outputs a paragraph tag with the initial element containing the active class.
		  *  place: the index of the created element.  Not used right now, however may be
		  *         useful when adding redux.
		  *  word: the actual content of the tag.
		  *  reg:  This is a reference callback to add the animationend event listener.
  		  */
	  	<CustomTag  ref={elem=> this.df = elem} className={`${styles.fader} ${this.props.place === 0 ? styles.active : ''}`} place={this.props.place} >{`${this.props.word}`}</CustomTag>
  	
	);
  }
}

DropFade.contextTypes = {

};

DropFade.propTypes = {

};

export default DropFade;