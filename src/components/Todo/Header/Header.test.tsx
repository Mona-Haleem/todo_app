/**
 * Unit tests for the Header component.
 * Tests title rendering and add button form toggling functionality.
 */

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Header from '../Header';

describe('Header Component', () => {
  it('should render title', () => {
    const { getByText } = render(
      <Header setShowAddForm={jest.fn()} setSelectedItem={jest.fn()}  />
    );
    
    expect(getByText('My Todo List')).toBeTruthy();
  });

  it('should toggle form visibility when button is pressed', () => {
    const setShowAddFormMock = jest.fn();
    const { getByTestId } = render(
      <Header setShowAddForm={setShowAddFormMock} setSelectedItem={jest.fn()}  />
    );

    fireEvent.press(getByTestId('add-button'));
    
    expect(setShowAddFormMock).toHaveBeenCalled();
  });
});
