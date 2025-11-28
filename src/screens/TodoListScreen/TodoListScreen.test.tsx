/**
 * Integration tests for TodoListScreen.
 * Tests complete user workflows including add, edit, complete, and delete operations.
 */

import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import TodoListScreen from "./";
import { Animated } from "react-native";


describe("TodoList Screen Tests", () => {
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

  it("should render the TodoListScreen", () => {
    const { getByText } = render(<TodoListScreen />);
    expect(getByText("My Todo List")).toBeTruthy();
  });

  it("should toggle add form when add button is clicked", () => {
    const { queryByPlaceholderText, getByTestId } = render(<TodoListScreen />);

    fireEvent.press(getByTestId("add-button"));

    expect(queryByPlaceholderText("Task title")).toBeNull();

    fireEvent.press(getByTestId("add-button"));

    expect(queryByPlaceholderText("Task title")).toBeTruthy();
  });

  it("should add a new todo", async () => {
    const { getByPlaceholderText, getByText } = render(<TodoListScreen />);

    fireEvent.changeText(getByPlaceholderText("Task title"), "New Task");
    fireEvent.changeText(
      getByPlaceholderText("Description (optional)"),
      "New Description"
    );
    fireEvent.press(getByText("Save"));

    await waitFor(() => {
      expect(getByText("New Task")).toBeTruthy();
    });
  });

  it("should complete workflow: add, edit, complete, and delete todo", async () => {
    const { getByTestId, getByPlaceholderText, getByText, queryByText } =
      render(<TodoListScreen />);

    // Add todo
    fireEvent.changeText(getByPlaceholderText("Task title"), "Test Task");
    fireEvent.press(getByText("Save"));

    await waitFor(() => {
      expect(getByText("Test Task")).toBeTruthy();
    });

    // Edit todo
    fireEvent.press(getByTestId("edit-button"));
    fireEvent.changeText(getByPlaceholderText("Task title"), "Updated Task");
    fireEvent.press(getByText("Save"));

    await waitFor(() => {
      expect(getByText("Updated Task")).toBeTruthy();
    });

    // Toggle completion
    fireEvent.press(getByTestId("checkbox"));

    // Delete todo
    fireEvent.press(getByTestId("delete-button"));
    fireEvent.press(getByText("Delete"));

    await waitFor(() => {
      expect(queryByText("Updated Task")).toBeNull();
    });
  });
});
