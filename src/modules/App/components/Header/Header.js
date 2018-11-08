import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { cssConcat } from '../../../../utils/css-concat';

export function Header(props, context) {

	const siteTitleCss = cssConcat(styles['vert-center'], styles['site-title']);
	const siteLinksCss = cssConcat(styles.link);
  return (
  	<nav>
	    <div className={styles.header}>
	      <div className={styles.content}>
	        <h1 className={siteTitleCss}>
	        	<Link to="/">
	        		CG
	        	</Link>
	        </h1>
	        <div className={siteLinksCss}>
	        	<Link to="/Blog">
	        		Blog
	        	</Link>
	        	<Link to="/Modules">
	        		Modules
	        	</Link>
	        	<Link to="/DailyCoder">
	        		Daily&nbsp;Coder
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
