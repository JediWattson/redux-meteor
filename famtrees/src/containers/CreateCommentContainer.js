import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Button, FormGroup, FormControl, ControlLabel, ButtonToolbar } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { logout, input } from '../actions';

let settings = false

class CreateCommentComponent extends Component{

  handleChange = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    input(dispatch, e.target.id, e.target.value)
  }


  deleteAll = (e) => {
    e.preventDefault()

  }
  
  logout = (e) => {
    e.preventDefault()

  }


  render(){
    const { login, input  } = this.props
   if(login.loggedIn)
   return(
        <Redirect from="/" to="/login"/>
      )
    else if(settings)
      return(
        <Redirect from="/" to="/settings"/>
      )
  
    return( 
      <div className="container">   

        <ButtonToolbar>          
          <Button bsStyle="danger" type="submit" onClick={this.logout} active>Logout</Button>
          <Button onClick={settings => !settings} active>Settings</Button>
        </ButtonToolbar>

        <FormGroup controlId="formControlsTextarea">
          <ControlLabel> <h1>Write a comment:</h1></ControlLabel>
          <FormControl 
            componentClass="textarea" 
            placeholder="Comment area" 
            value={input.comment} 
            onChange={this.handleChange}
            />
        </FormGroup>

        <Button onClick={this.deleteAll} bsStyle="warning" type="submit" active>Delete these comments</Button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { login, input } = state
  return{
    login,
    input
  }
}

const CreateCommentContainer = connect(mapStateToProps)(CreateCommentComponent)

export default CreateCommentContainer