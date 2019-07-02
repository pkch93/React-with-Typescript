import React, { Dispatch } from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Input = styled.input`
    width: 75%;
    height: 30px;
    margin-left: 2%;
`;

const Button = styled.button<{ color: string }>`
    background-color: ${({ color }) => color};
    border: none;
    width: 20%;
    margin-right: 2%;
    font-size: 20px;
    cursor: pointer;
`;

interface TodoFormProps {
    color: string;
    add: Dispatch<string>;
    content: string
}

const TodoForm: React.FC<TodoFormProps> = ({ color, add, content }) => (
    <Wrapper>
        <Input type="text" placeholder="할 일을 입력하세요!"/>
        <Button color={color} type="submit" onClick={() => add(content)}>Todo</Button>
    </Wrapper>
);

export default TodoForm;