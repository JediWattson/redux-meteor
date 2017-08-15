import React from 'react'
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import { Provider } from 'react-redux'
import CommentsContainer from './containers/CommentsContainer'
import LoginContainer from './containers/LoginContainer'
import CreateCommentContainer from './containers/CreateCommentContainer'

const select = (state) => {
  console.log(state)
  return state
}

const CommentRoute = ({ component: Component, props, ...rest }) => (
	<Route {...rest} render={props => (
    select(false) ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location}
      }}/>
    )
  )}/>
)
const RenderRoutes = ({store}) =>  (
 	<BrowserRouter> 
 		<div>
      <CommentRoute exact path="/" state={store.getState()} component={CreateCommentContainer}/>
      <Route path="/login" component={LoginContainer}/>
 			<Route path="/" component={CommentsContainer}/>
  	</div>
  </BrowserRouter>
)

export default RenderRoutes 
