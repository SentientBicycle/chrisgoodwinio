/* eslint-disable global-require */
import React from 'react';
import App from './modules/App/App';
import Blog from './modules/Blog/Blog';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  //require('./modules/Post/pages/PostListPage/PostListPage');
  //require('./modules/Post/pages/PostDetailPage/PostDetailPage');
}

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/

const Root = ({store}) => (
  <Provider store={store}>
  <Router>
    <Route path="/" component={App}>
    <Route path="/chrisgoodwinio" component={App}>
    </Route>
  </Router>
)

Root.proptypes = {
  store: Proptypes.object.isRequired
}

export default Root
