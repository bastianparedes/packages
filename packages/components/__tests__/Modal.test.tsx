import React from 'react';

import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import Modal from '../Modal';

jest.mock('../Shadow', () => ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
));

describe('<Modal />', () => {
  it('should render', () => {
    const props = {
      setModalVisible: jest.fn()
    };

    const { container } = render(<Modal {...props} />);
    expect(container).toMatchSnapshot();
  });

  it('should close modal when button is clicked', async () => {
    const props = {
      setModalVisible: jest.fn(),
      success: true,
      text: 'Success'
    };

    const { getByTestId } = render(<Modal {...props} />);
    const button = getByTestId('data-testid-button-closer-modal');
    act(() => {
      fireEvent.click(button);
    });

    expect(props.setModalVisible).toBeCalledTimes(1);
    expect(props.setModalVisible).toBeCalledWith(false);
  });
});
