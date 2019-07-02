import React from 'react';
import { render } from '@testing-library/react';

import TodoList from '../../components/TodoBox/TodoList';

describe('<TodoList />', () => {
    it('matches snapshot', () => {
        const mock = render(<TodoList todo={[]}/>);
        expect(mock.container).toMatchSnapshot();
    });

    it('render one todo', () => {
        const todo = [{
            complete: true,
            content: 'go to seoul'
        }];
        const mock = render(<TodoList todo={todo} />);

        mock.getByText("go to seoul");
    });
});