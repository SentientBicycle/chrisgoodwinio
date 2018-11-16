import React, { Component } from 'react';
import styles from './DropFade.module.css';

class DropFade extends Component {
	state = {
		active: this.props.active,
		place: 0,
	}

	componentDidMount() {
		this.df.addEventListener('animationend', this.props.setNextActive);
		this.setState(() => {if(this.props.place === 0)return { active: true}})
	}

	componentWillReceiveProps(newProps) {
		this.setState({active: newProps.active});
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
	  	<CustomTag  ref={elem=> this.df = elem} className={`${styles.fader} ${this.state.active === true ? styles.active : ''}`} place={this.props.place} >{`${this.props.word}`}</CustomTag>
  	
	);
  }
}

DropFade.contextTypes = {

};

DropFade.propTypes = {

};

export default DropFade;