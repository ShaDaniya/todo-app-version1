import { useState } from 'react'

function TodoForm() {
    const [todo, setTodo] = useState('')

    function handleFormSubmit(event) {
        event.preventDefault()
    }

    function handleInputChange(e) {
        setTodo(e.target.value)
    }

    return (
        <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Enter new todo" value={todo} onChange={(e) => handleInputChange(e)}/>
        <button type="submit">Submit</button>
        </form>
    )
}

export default TodoForm