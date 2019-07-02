import React from 'react';

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
`;

interface TodoFormProps {
    color: string;
}

const TodoForm: React.FC<TodoFormProps> = ({ color }) => (
    <Wrapper>
        <Input type="text" placeholder="할 일을 입력하세요!"/>
        <Button color={color} type="submit">Todo</Button>
    </Wrapper>
);

export default TodoForm;