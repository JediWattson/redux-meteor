import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Button, FormGroup, FormControl, ControlLabel, ButtonToolbar } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { createContainer } from 'meteor/react-meteor-data';


class CreateCommentComponent extends React.Component{
  constructor(props){
    super(props) 
    this.state = {
      comment: '',
      commentId: null,
      settingsRed: false,
      currTime: null
    };
    this.handleChangeComment = this.handleChangeComment.bind(this);
    this.deleteAll = this.deleteAll.bind(this);
    this.logout = this.logout.bind(this)
    this.settings = this.settings.bind(this)
  }

  handleChangeComment(e){
    if(!this.state.comment && !this.state.commentId){
      Meteor.call(
        'insert.comment', 
        {comment: e.target.value}, 
        (err, ret) => { 
          this.setState({ commentId: ret })
        }
      )
    }
    else if(this.state.comment !== ''){
      let val = e.target.value
      let curr = new Date().getTime()
      this.setState({ currTime: curr })
      setTimeout(()=>{
        if(curr === this.state.currTime)
          Meteor.call('update.comment', {id: this.state.commentId, comment: val})
      }, 40)
    }
    this.setState({comment: e.target.value})
  }

  deleteAll(e){
    e.preventDefault()
    Meteor.call('reset.comments')
  }
  
  logout(e){
    e.preventDefault()
    Meteor.logout(()=> this.setState({comment: ""}))
  }

  settings(e){
    e.preventDefault()
    this.setState({settingsRed: true})
  }

  render(){
    if(!Meteor.userId())
      return(
        <Redirect from="/" to="/login"/>
      )
    else if(this.state.settingsRed)
      return(
        <Redirect from="/" to="/settings"/>
      )
  
    return( 
      <div className="container">   

        <ButtonToolbar>          
          <Button bsStyle="danger" type="submit" onClick={this.logout} active>Logout</Button>
          <Button onClick={this.settings} active>Settings</Button>
        </ButtonToolbar>

        <FormGroup controlId="formControlsTextarea">
          <ControlLabel> <h1>Write a comment:</h1></ControlLabel>
          <FormControl 
            componentClass="textarea" 
            placeholder="Comment area" 
            value={this.state.comment} 
            onChange={this.handleChangeComment}
            />
        </FormGroup>

        <Button onClick={this.deleteAll} bsStyle="warning" type="submit" active>Delete these comments</Button>
      </div>
    )
  }
}

export default CreateCommentContainer = createContainer(() => {
  return{};
}, CreateCommentComponent);
