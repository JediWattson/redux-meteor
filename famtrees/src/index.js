import React from 'react';
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom';
import reducer from './reducers'
import { RenderRoutes } from './routes'
import './index.css'

const store = createStore(
	reducer,
	applyMiddleware(thunkMiddleware)
)

render(
	<Provider store={store}>
		<RenderRoutes/>
	</Provider>, 	
	document.getElementById('root')
)  
