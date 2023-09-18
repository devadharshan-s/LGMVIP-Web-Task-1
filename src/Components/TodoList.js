import { useState } from "react"
import TodoForm from "./TodoForm"
import Todo from "./Todo"
function TodoList(){
     const [todos,setTodos]=useState([])
     //ADD TASK
     const addTask = (nextTask) => {
            if(!nextTask.text)
                return
            const newTodo = [...todos,nextTask]
            setTodos(newTodo)
     }

     //REMOVE TASK
        const removeTask = id =>{
            let updatedTasks = [...todos].filter(task=>task.id !== id)
            setTodos(updatedTasks)
        }


     //TASK DONE
     const completeTask = id => {
        let updatedTasks = todos.map(todo=>{
            if(todo.id === id){
                todo.isComplete = true;
            }
            return todo;
        })
        setTodos(updatedTasks)
     }
        return (
        <div>
            <TodoForm addTask={addTask}/>
            <Todo todos ={todos} completeTask = {completeTask} removeTask={removeTask} />
        </div>
    )
}
export default TodoList