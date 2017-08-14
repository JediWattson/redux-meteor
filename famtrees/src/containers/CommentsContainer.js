import React, { Component } from 'react'
import { connect } from 'react-redux'
import RenderComments from '../components/RenderComments';
import { fetchComments } from '../actions';

class CommentsContainer extends Component{
	componentWillMount(){
		const { dispatch } = this.props
		fetchComments(dispatch)
	}

	shouldComponentUpdate(){
		return !this.props.comments.isRecieved
	}

	render(){
		const {comments, isRecieved} = this.props.comments
		if(isRecieved){
			return (
				<div>
					<RenderComments comments={comments} />
				</div>
			)
		}
		else{
			return(
				<div>loading...</div>
			)
		}
	}
}


const mapStateToProps = state => {
	const { comments } = state
	return{
		comments
	}
}

const Comments = connect(mapStateToProps)(CommentsContainer)

export default Comments;