import React from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

const initTodo = [{
    complete: true,
    content: 'go to seoul'
}];

export default () => (
    <div>
        <TodoForm color={'#66d9e8'} />
        <TodoList todo={initTodo} />
    </div>
);