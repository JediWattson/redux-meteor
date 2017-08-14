import React from 'react'
import { Panel } from 'react-bootstrap'
const CommentComponent = (props) => (
	<Panel 
		header={props.comment.handle}
		footer={String(Date(props.comment.createdAt).toLocaleString())} 
		bsStyle="primary"
	>
		<p>{props.comment.message}</p>
	</Panel>	
)

const RenderComments = (props) => (
  	<div>
    	{props.comments.map((comment) => (
    		<CommentComponent key={comment._id} comment={comment}/>
    	))}
    </div>    
)

export default RenderComments;