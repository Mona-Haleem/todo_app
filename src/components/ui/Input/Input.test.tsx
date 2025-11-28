/**
 * Unit tests for the Input component.
 * Tests text input, character limits, labels, and multiline functionality.
 */

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Input from './';

describe('Input Component', () => {
  it('should render correctly', () => {
    const { getByPlaceholderText } = render(
      <Input
        value=""
        onChangeText={() => {}}
        placeholder="Enter text"
      />
    );
    expect(getByPlaceholderText('Enter text')).toBeTruthy();
  });

  it('should call onChangeText when text changes', () => {
    const onChangeTextMock = jest.fn();
    const { getByPlaceholderText } = render(
      <Input
        value=""
        onChangeText={onChangeTextMock}
        placeholder="Enter text"
      />
    );

    fireEvent.changeText(getByPlaceholderText('Enter text'), 'New text');
    expect(onChangeTextMock).toHaveBeenCalledWith('New text');
  });

  it('should display character count when maxChars is provided', () => {
    const { getByText } = render(
      <Input
        value="Hello"
        onChangeText={() => {}}
        placeholder="Enter text"
        maxChars={50}
      />
    );

    expect(getByText('5/50')).toBeTruthy();
  });

  it('should not exceed maxChars limit', () => {
    const onChangeTextMock = jest.fn();
    const { getByPlaceholderText } = render(
      <Input
        value="Hello"
        onChangeText={onChangeTextMock}
        placeholder="Enter text"
        maxChars={5}
      />
    );

    fireEvent.changeText(getByPlaceholderText('Enter text'), 'Hello World');
    expect(onChangeTextMock).not.toHaveBeenCalledWith('Hello World');
  });

  it('should render label when provided', () => {
    const { getByText } = render(
      <Input
        value=""
        onChangeText={() => {}}
        placeholder="Enter text"
        label="Username"
      />
    );

    expect(getByText('Username')).toBeTruthy();
  });

  it('should render as multiline when prop is true', () => {
    const { getByPlaceholderText } = render(
      <Input
        value=""
        onChangeText={() => {}}
        placeholder="Enter text"
        multiline={true}
      />
    );

    const input = getByPlaceholderText('Enter text');
    expect(input.props.multiline).toBe(true);
  });
});

