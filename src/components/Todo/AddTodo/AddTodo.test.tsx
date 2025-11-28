/**
 * Unit tests for the AddTodo component.
 * Tests form rendering, input handling, save/cancel actions, and edit mode behavior.
 */

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AddTodo from '../AddTodo';
import { Todo } from '../types';

describe('AddTodo Component', () => {
  const defaultProps = {
    selectedTodo: null,
    setSelectedTodo: jest.fn(),
    setShowAddForm: jest.fn(),
    onAdd: jest.fn(),
    onEdit: jest.fn(),
  };

  it('should render input fields', () => {
    const { getByPlaceholderText } = render(<AddTodo {...defaultProps} />);
    
    expect(getByPlaceholderText('Task title')).toBeTruthy();
    expect(getByPlaceholderText('Description (optional)')).toBeTruthy();
  });

  it('should call onAdd when saving a new todo', () => {
    const onAddMock = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <AddTodo {...defaultProps} onAdd={onAddMock} />
    );

    fireEvent.changeText(getByPlaceholderText('Task title'), 'New Task');
    fireEvent.changeText(getByPlaceholderText('Description (optional)'), 'New Description');
    fireEvent.press(getByText('Save'));

    expect(onAddMock).toHaveBeenCalledWith('New Task', 'New Description');
  });

  it('should call onEdit when saving an existing todo', () => {
    const mockTodo: Todo = {
      id: '1',
      task: 'Old Task',
      description: 'Old Description',
      completed: false,
    };
    
    const onEditMock = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <AddTodo {...defaultProps} selectedTodo={mockTodo} onEdit={onEditMock} />
    );

    fireEvent.changeText(getByPlaceholderText('Task title'), 'Updated Task');
    fireEvent.press(getByText('Save'));

    expect(onEditMock).toHaveBeenCalledWith('1', 'Updated Task', 'Old Description');
  });

  it('should clear form and close when cancel is pressed', () => {
    const setSelectedTodoMock = jest.fn();
    const setShowAddFormMock = jest.fn();
    
    const { getByPlaceholderText, getByText } = render(
      <AddTodo
        {...defaultProps}
        setSelectedTodo={setSelectedTodoMock}
        setShowAddForm={setShowAddFormMock}
      />
    );

    fireEvent.changeText(getByPlaceholderText('Task title'), 'Some Task');
    fireEvent.press(getByText('Cancel'));

    expect(setSelectedTodoMock).toHaveBeenCalledWith(null);
    expect(setShowAddFormMock).toHaveBeenCalledWith(false);
  });

  it('should populate form with selected todo data', () => {
    const mockTodo: Todo = {
      id: '1',
      task: 'Existing Task',
      description: 'Existing Description',
      completed: false,
    };

    const { getByDisplayValue } = render(
      <AddTodo {...defaultProps} selectedTodo={mockTodo} />
    );

    expect(getByDisplayValue('Existing Task')).toBeTruthy();
    expect(getByDisplayValue('Existing Description')).toBeTruthy();
  });

  it('should close form after successful save', () => {
    const setShowAddFormMock = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <AddTodo {...defaultProps} setShowAddForm={setShowAddFormMock} />
    );

    fireEvent.changeText(getByPlaceholderText('Task title'), 'Task');
    fireEvent.press(getByText('Save'));

    expect(setShowAddFormMock).toHaveBeenCalledWith(false);
  });
});
