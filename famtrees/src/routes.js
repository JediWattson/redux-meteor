import React from 'react'
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import CommentsContainer from './containers/CommentsContainer'
import LoginContainer from './containers/LoginContainer'

const CommentRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={props => (
        false ? (
          <Component {...props}/>
        ) : (
          <Redirect to={{
            pathname: '/login',
            state: { from: props.location}
          }}/>
        )
    )}/>
)

export const RenderRoutes  = () => (
  	<BrowserRouter> 
  		<div>
        <CommentRoute />
        <Route path="/login" component={LoginContainer}/>
   			<Route path="/" component={CommentsContainer}/>
    	</div>
	</BrowserRouter>
)