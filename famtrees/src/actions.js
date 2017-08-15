
export const RECIEVE_COMMENTS = 'RECIEVE_COMMENTS'
export const recieveComments = (json) => ({
		type: RECIEVE_COMMENTS,
		comments: json.comments.map(child => child),
		receivedAt: Date.now()
})

export const fetchComments = (dispatch) => {
	return fetch("http://localhost:3001/publications/comments")
		.then(res => res.json())
		.then(json => dispatch(recieveComments(json)))			
}

export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const updateComment = (dispatch, comment) =>{
	return fetch("http://localhost:3001/writer/",{
		method: "POST",
		body: comment
	})

}

export const INPUT = 'INPUT'
export const input = (dispatch, key, value) => {
	return dispatch({
		type: INPUT,
		key: key,
		value: value
	})
}

export const recieveLogin = (json) => ({
	type: RECIEVE_COMMENTS,
	creds: json,
	loggedIn: true,
	receivedAt: Date.now()
})

export const LOGIN_USER = 'LOGIN_USER'
export const loginUser = (login, dispatch) => {
	console.log(login)
	const opts = {
		method: "POST",
      	headers: {
        	'Accept': 'application/json',
        	'Content-Type': 'application/json'
      	},
      	body: JSON.stringify(login)
	}
	return fetch("http://localhost:3001/users/login", opts)
			.then(res => res.json())
			.then(json => dispatch(recieveLogin(json)))
			.catch(err => console.log(err))
}
