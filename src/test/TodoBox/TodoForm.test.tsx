import React from 'react';
import { render } from '@testing-library/react';

import TodoForm from '../../components/TodoBox/TodoForm';

describe('<TodoForm />', () => {
    it("matches snapshot", () => {
        const utils = render(<TodoForm color={'#66d9e8'} />);
        expect(utils.container).toMatchSnapshot();
    });

    it('have one submit button and one input box', () => {
        const target = render(<TodoForm color={'#66d9e8'} />);
        target.getByPlaceholderText("할 일을 입력하세요!");
        target.getByText("Todo");
    });
});