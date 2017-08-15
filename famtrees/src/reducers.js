import { combineReducers } from 'redux'
import { RECIEVE_COMMENTS, LOGIN_USER, INPUT, UPDATE_COMMENT } from './actions';

const login = (state = {}, action) => {
	switch(action.type){
		case LOGIN_USER:
			return{
				...state,
				creds: action.creds,
				loggedIn: true
			}
		default:
			return state;
	}
}

const input = (state = {}, action) => {
	switch(action.type){
		case INPUT:
			return{
				...state,
				[action.key]: action.value
			}
	 	default:
			return state;
	}
}

const comments = (state = {}, action) => {
	switch(action.type){
		case RECIEVE_COMMENTS:
			return{
				...state,
				comments: action.comments,
				isRecieved: true
			}
		case UPDATE_COMMENT:
			return{
				...state,
				comment: action.comment,
				isUpdate: true
			}
		default:
			return state;
	}
}


const promiseApp = combineReducers({
	login,
	comments,
	input
})
export default promiseApp