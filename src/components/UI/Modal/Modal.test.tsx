

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AppModal from './';

describe('AppModal Component', () => {
  const defaultProps = {
    visible: true,
    title: 'Test Title',
    message: 'Test Message',
    onConfirm: jest.fn(),
    onCancel: jest.fn(),
  };

  it('should render title and message', () => {
    const { getByText } = render(<AppModal {...defaultProps} />);
    
    expect(getByText('Test Title')).toBeTruthy();
    expect(getByText('Test Message')).toBeTruthy();
  });

  it('should call onConfirm when confirm button is pressed', () => {
    const onConfirmMock = jest.fn();
    const { getByText } = render(
      <AppModal {...defaultProps} onConfirm={onConfirmMock} />
    );

    fireEvent.press(getByText('Confirm'));
    expect(onConfirmMock).toHaveBeenCalledTimes(1);
  });

  it('should call onCancel when cancel button is pressed', () => {
    const onCancelMock = jest.fn();
    const { getByText } = render(
      <AppModal {...defaultProps} onCancel={onCancelMock} />
    );

    fireEvent.press(getByText('Cancel'));
    expect(onCancelMock).toHaveBeenCalledTimes(1);
  });

  it('should render custom button text', () => {
    const { getByText } = render(
      <AppModal
        {...defaultProps}
        confirmText="Delete"
        cancelText="Go Back"
      />
    );

    expect(getByText('Delete')).toBeTruthy();
    expect(getByText('Go Back')).toBeTruthy();
  });

  it('should not render when visible is false', () => {
    const { queryByText } = render(
      <AppModal {...defaultProps} visible={false} />
    );

    expect(queryByText('Test Title')).toBeNull();
  });
});

