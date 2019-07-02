import React from 'react';

const TodoForm: React.FC = () => (
    <div>
        <input type="text" placeholder="할 일을 입력하세요!"/>
        <button type="submit">Todo</button>
    </div>
);

export default TodoForm;