/**
 * Unit tests for the useList custom hook.
 * Tests todo CRUD operations, completion toggling, and validation logic.
 */

import { renderHook, act } from "@testing-library/react-native";
import useList from "./useList";
describe("useList Hook", () => {
  it("should initialize with an empty todo list", () => {
    const { result } = renderHook(() => useList());
    expect(result.current.todoList).toEqual([]);
  });

  it("should add a new todo", () => {
    const { result } = renderHook(() => useList());

    act(() => {
      result.current.addTodo("Test Task", "Test Description");
    });

    expect(result.current.todoList).toHaveLength(1);
    expect(result.current.todoList[0]).toMatchObject({
      task: "Test Task",
      description: "Test Description",
      completed: false,
    });
    expect(result.current.todoList[0].id).toBeDefined();
  });

  it("should not add a todo with empty task", () => {
    const { result } = renderHook(() => useList());

    act(() => {
      result.current.addTodo("   ", "Description");
    });

    expect(result.current.todoList).toHaveLength(0);
  });

  it("should trim whitespace from task and description", () => {
    const { result } = renderHook(() => useList());

    act(() => {
      result.current.addTodo("  Test Task  ", "  Test Description  ");
    });

    expect(result.current.todoList[0].task).toBe("Test Task");
    expect(result.current.todoList[0].description).toBe("Test Description");
  });

  it("should edit an existing todo", () => {
    const { result } = renderHook(() => useList());

    act(() => {
      result.current.addTodo("Original Task", "Original Description");
    });

    const todoId = result.current.todoList[0].id;

    act(() => {
      result.current.editTodo(todoId, "Updated Task", "Updated Description");
    });

    expect(result.current.todoList[0].task).toBe("Updated Task");
    expect(result.current.todoList[0].description).toBe("Updated Description");
  });

  it("should delete a todo", () => {
    const { result } = renderHook(() => useList());

    act(() => {
      result.current.addTodo("Task 1", "Description 1");
      result.current.addTodo("Task 2", "Description 2");
    });
    const todoIdToDelete = result.current.todoList[0].id;

    act(() => {
      result.current.deleteTodo(todoIdToDelete);
    });

    expect(result.current.todoList).toHaveLength(1);
    expect(result.current.todoList[0].task).toBe("Task 1");
  });

  it("should toggle todo completion status", () => {
    const { result } = renderHook(() => useList());

    act(() => {
      result.current.addTodo("Test Task", "Test Description");
    });

    const todoId = result.current.todoList[0].id;

    act(() => {
      result.current.toggleCompletion(todoId);
    });

    expect(result.current.todoList[0].completed).toBe(true);

    act(() => {
      result.current.toggleCompletion(todoId);
    });

    expect(result.current.todoList[0].completed).toBe(false);
  });

  it("should add new todos to the beginning of the list", () => {
    const { result } = renderHook(() => useList());

    act(() => {
      result.current.addTodo("First Task", "");
      result.current.addTodo("Second Task", "");
    });

    expect(result.current.todoList[0].task).toBe("Second Task");
    expect(result.current.todoList[1].task).toBe("First Task");
  });
});
