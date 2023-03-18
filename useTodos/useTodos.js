import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

  
    const init = () => {
        return JSON.parse( localStorage.getItem('todos') || []);
    }
  

export const useTodos = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, [], init );

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ) || []);
    }, [todos]);


    const handleNewTodo = ( todo ) => {
        const action = {
        type: '[TODO] Add Todo',
        payload: todo,
        }

        dispatch( action );
    }

    const onDeleteTodo = ( id ) => {
        console.log(id)
        dispatch({
        type: '[TODO] Remove Todo',
        payload: id,
        });
    }

    const onToggleTodo = ( id ) => {
        console.log({ id })
        dispatch({
        type: '[TODO] Toggle Todo',
        payload: id,
        });
    }

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter( pendientes => !pendientes.done).length,
        handleNewTodo,
        onDeleteTodo,
        onToggleTodo,
    }

}