import React from 'react';
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { render } from 'react-dom';
import promiseApp from './reducers'
import RenderRoutes from './routes'
import './index.css'

const store = createStore(
	promiseApp,
	applyMiddleware(thunkMiddleware)
)

render(
	<RenderRoutes store={store}/>,
	document.getElementById('root')
)  
