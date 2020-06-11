/** @format */

import React, { useContext } from 'react'
import TodosContext from '../context'

export default function TodoList() {
	//we'll get back what we passed to TodosContext from index.js
	// state and dispatch
	const { state, dispatch } = useContext(TodosContext)
	const title = state.todos.length > 0 ? `${state.todos.length} Todos` : 'Nothing to do'
	return (
		<div className='container mx-auto mx-w-md text-center font-mono'>
			<h1 className='text-bold'>{title}</h1>
			<ul className='list-reset text-white p-0'>
				{state.todos.map((todo) => (
					<li
						style={{ background: 'orange' }}
						key={todo.id}
						className='flex items-center border-black border-dashed border-2 my-2 py-4'
					>
						<span
							onDoubleClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo })}
							className={`cursor-pointer flex-1 ml-12 ${
								todo.complete && 'line-through text-grey-darkest'
							}`}
						>
							{todo.text}
						</span>
						<button>
							<img src='https://icon.now.sh/edit/0050c5' alt='Edit Icon' className='h6' />
						</button>
						<button>
							<img src='https://icon.now.sh/delete/8b000' alt='Edit Icon' className='h-6' />
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}
