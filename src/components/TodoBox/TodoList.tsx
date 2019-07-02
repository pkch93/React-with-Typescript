import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 5px 20px;
    margin: 20px 2vw;
    border: 1px solid #a9a9a9;
`;

const TodoText = styled.h3<{ complete: boolean }>`
    font-size: 20px;
    border-bottom: 1px solid #696969;
    padding: 20px;
    color: ${({ complete }) => complete ? "gray" : "#000"};
    text-decoration: ${({ complete }) => complete ? "line-through" : "none"};
`;

interface Todo {
    complete: boolean;
    content: string;
}

interface TodoListProps {
    todo: Todo[]
}

const TodoList: React.FC<TodoListProps> = ({ todo }) => {
    const todoElements = todo.map((each, i) => (
        <Wrapper key={i}>
            <TodoText complete={each.complete}>{each.content}</TodoText>
        </Wrapper>
    ));

    return (
        <>
        { todoElements }
        </>
    );
};

export default TodoList;