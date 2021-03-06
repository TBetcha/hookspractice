/** @format */

import React, { useContext, useState, useReducer } from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import TodosContext from './context'
import TodosReducer from './reducer'
import TodoForm from './components/TodoForm'

import TodoList from './components/TodoList'

const App = () => {
	const initialState = useContext(TodosContext)
	const [state, dispatch] = useReducer(TodosReducer, initialState)

	return (
		<TodosContext.Provider value={{ state, dispatch }}>
			<TodoForm />
			<TodoList />
		</TodosContext.Provider>
	)
}
ReactDOM.render(
	<App />,

	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
