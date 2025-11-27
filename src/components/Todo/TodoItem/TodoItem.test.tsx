

import React from "react";
import { render, fireEvent, act } from "@testing-library/react-native";
import TodoItem from "../TodoItem";
import { Todo } from "../types";
import { Animated } from "react-native";

describe("TodoItem Component", () => {
  const mockTodo: Todo = {
    id: "1",
    task: "Test Task",
    description: "Test Description",
    completed: false,
  };

  const defaultProps = {
    todoItem: mockTodo,
    toggleCompletion: jest.fn(),
    setShowAddForm: jest.fn(),
    setSelectedTodo: jest.fn(),
    setModalVisible: jest.fn(),
  };

  beforeEach(() => {
    // Disable animations for testing
    jest.spyOn(Animated, "timing").mockImplementation((() => ({
      start: (callback?: (result: { finished: boolean }) => void) => {
        callback?.({ finished: true });
      },
      stop: jest.fn(),
      reset: jest.fn(),
    })) as any);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should render task and description", () => {
    const { getByText } = render(<TodoItem {...defaultProps} />);

    expect(getByText("Test Task")).toBeTruthy();
    expect(getByText("Test Description")).toBeTruthy();
  });

  it("should call toggleCompletion when checkbox is pressed", () => {
    const toggleMock = jest.fn();
    const { getByTestId } = render(
      <TodoItem {...defaultProps} toggleCompletion={toggleMock} />
    );

    fireEvent.press(getByTestId("checkbox"));
    expect(toggleMock).toHaveBeenCalledWith("1");
  });

  it("should show completed styling when todo is completed", () => {
    const completedTodo = { ...mockTodo, completed: true };
    const { getByText } = render(
      <TodoItem {...defaultProps} todoItem={completedTodo} />
    );

    const taskText = getByText("Test Task");
    expect(taskText.props.style).toContainEqual(
      expect.objectContaining({ textDecorationLine: "line-through" })
    );
  });

  it("should open edit form when edit button is pressed", () => {
    const setShowAddFormMock = jest.fn();
    const setSelectedTodoMock = jest.fn();

    const { getByTestId } = render(
      <TodoItem
        {...defaultProps}
        setShowAddForm={setShowAddFormMock}
        setSelectedTodo={setSelectedTodoMock}
      />
    );

    fireEvent.press(getByTestId("edit-button"));

    expect(setShowAddFormMock).toHaveBeenCalledWith(true);
    expect(setSelectedTodoMock).toHaveBeenCalledWith(mockTodo);
  });

  it("should open delete modal when delete button is pressed", () => {
    const setModalVisibleMock = jest.fn();
    const setSelectedTodoMock = jest.fn();

    const { getByTestId } = render(
      <TodoItem
        {...defaultProps}
        setModalVisible={setModalVisibleMock}
        setSelectedTodo={setSelectedTodoMock}
      />
    );

    fireEvent.press(getByTestId("delete-button"));

    expect(setModalVisibleMock).toHaveBeenCalledWith(true);
    expect(setSelectedTodoMock).toHaveBeenCalledWith(mockTodo);
  });
});
