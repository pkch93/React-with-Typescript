import React from 'react';

interface TodoListProps {
    todo: string[]
}

const TodoList: React.FC<TodoListProps> = ({ todo }) => {
    const todoElements = todo.map((each, i) => (
        <div key={i}>
            <h3>{each}</h3>
        </div>
    ));

    return (
        <>
        { todoElements }
        </>
    );
};

export default TodoList;