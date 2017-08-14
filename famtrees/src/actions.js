
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

export const writeComment = (dispatch, comment) =>{
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
export const loginUser = (login, dispatch) =>{
	console.log(login)
	return fetch("http://localhost:3001/users/login", {
		headers:{
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		method: "POST",
		json: login
	}).then(res => {res.json()})
	.then(json => dispatch(recieveLogin(json)))
}
