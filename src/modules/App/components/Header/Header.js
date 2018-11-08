import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export function Header(props, context) {
  return (
  	<nav>
	    <div className={styles.header}>
	      <div className={styles.content}>
	        <h1 className={styles['site-title']}>
	        	<Link to="/">
	        		Chris Goodwin
	        	</Link>
	        </h1>
	        <div className={styles['link']}>
	        	<Link to="/blog">
	        		Blog
	        	</Link>
	        	<Link to="/Modules">
	        		Modules
	        	</Link>
	        	<Link to="/DailyCoder">
	        		Daily Coder
	        	</Link>
	        </div>
	      </div>
	    </div>
	</nav>
  );
}

Header.contextTypes = {
  router: PropTypes.object,
};

Header.propTypes = {

};

export default Header;
