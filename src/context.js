/** @format */

import React from 'react'

const TodosContext = React.createContext({
	todos: [
		{ id: 1, text: 'eat breakfast', complete: false },

		{ id: 2, text: 'finsih project ', complete: true },

		{ id: 3, text: 'make bed', complete: false },
	],
	currentTodo: {},
})

export default TodosContext
