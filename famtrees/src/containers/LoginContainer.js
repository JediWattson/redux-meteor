import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { Route, Link, Redirect } from 'react-router-dom';
import { Button, FormGroup, controlLabel, FormControl } from 'react-bootstrap';
import { loginUser, input } from '../actions';


class LoginComponent extends Component{

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch, input } = this.props
    loginUser(input, dispatch)
  }

  handleChange = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    input(dispatch, e.target.id, e.target.value)
  }

  handleRegsiterLink = (e) => {
    e.preventDefault()
  }

  handleFBLogin = (e) => {
    e.preventDefault()
  }

  render(){
    const {handle, password, loggedIn, registerLink} = this.props.input
    if(loggedIn)
      return(
        <Redirect from="/login" to="/"/>
      )
    else if(registerLink)
      return(
        <Redirect from="/login" to="/register"/>
      )
    return( 
     <div className="container">
       <header>
        <form onSubmit={this.handleSubmit}>
          <ul>
            <FormGroup controlId="username">
              <controlLabel>Handle:</controlLabel> 
              <FormControl type="text" placeholder="Enter Handle" value={handle} onChange={this.handleChange} />
            </FormGroup>
          </ul>
          <ul>
            <FormGroup controlId="password">
              <controlLabel>Password:</controlLabel> 
              <FormControl type="password" placeholder="Enter Password" value={password} onChange={this.handleChange} />
            </FormGroup>
          </ul>        
          <ul>
            <Button bsStyle="success" bsSize="large" type="submit">Login</Button>
          </ul>      
        </form>

        <form onSubmit={this.handleRegsiterLink}>
          <ul>
            <Button bsStyle="warning" bsSize="sm" type="submit">Or register</Button>
          </ul>
        </form>

        <form onSubmit={this.handleFBLogin}>
          <ul>
            <Button bsStyle="info" bsSize="sm" type="submit">fb</Button>
          </ul>
        </form>

      </header>
     </div>
    );
  }
}

const mapStateToProps = state => {
  const { login, input } = state
  return{
    login,
    input
  }
}

const LoginContainer = connect(mapStateToProps)(LoginComponent)

export default LoginContainer