import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

import { todoAdd } from '../../store/modules/todo'

export default () => {
    const initTodo = useSelector((state: any) => state.todo.todo);
    const dispatch = useDispatch();
    return (
        <div>
            <TodoForm 
                color={'#66d9e8'}
                add={(content: string) => dispatch(todoAdd(content))}
                content="hello world!"
            />
            <TodoList todo={initTodo} />
        </div>
    );
};