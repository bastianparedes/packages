import React from 'react';

import { render } from '@testing-library/react';

import Body from '../Body';

jest.mock('../Footer');

describe('<Body />', () => {
  it('should render', () => {
    const { container } = render(<Body />);
    expect(container).toMatchSnapshot();
  });
});
