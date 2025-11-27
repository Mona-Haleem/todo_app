
import React from "react";
import { render } from "@testing-library/react-native";
import TodoList from "../TodoList";
import { Todo } from "../types";
import { Animated } from "react-native";

describe("TodoList Component", () => {
  const mockTodos: Todo[] = [
    { id: "1", task: "Task 1", description: "Desc 1", completed: false },
    { id: "2", task: "Task 2", description: "Desc 2", completed: true },
    { id: "3", task: "Task 3", description: "Desc 3", completed: false },
  ];

  const defaultProps = {
    todoItems: mockTodos,
    setShowAddForm: jest.fn(),
    toggleCompletion: jest.fn(),
    setSelectedTodo: jest.fn(),
    setModalVisible: jest.fn(),
  };
  beforeEach(() => {
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

  it("should render all todo items", () => {
    const { getByText } = render(<TodoList {...defaultProps} />);

    expect(getByText("Task 1")).toBeTruthy();
    expect(getByText("Task 2")).toBeTruthy();
    expect(getByText("Task 3")).toBeTruthy();
  });

  it("should render empty list when no todos", () => {
    const { queryByText } = render(
      <TodoList {...defaultProps} todoItems={[]} />
    );

    expect(queryByText("Task 1")).toBeNull();
  });

  it("should use FlatList for rendering", () => {
    const { UNSAFE_getByType } = render(<TodoList {...defaultProps} />);

    const FlatList = require("react-native").FlatList;
    expect(UNSAFE_getByType(FlatList)).toBeTruthy();
  });
});
