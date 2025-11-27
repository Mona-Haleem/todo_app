

import { useState } from "react";
import { Todo } from "../components/Todo/types";
import "react-native-get-random-values"; 
import { v4 as uuidv4 } from "uuid";
const useList = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodo = (task: string, description: string) => {
    if (!task.trim()) return;
    const newTodo: Todo = {
      id: uuidv4(),
      task: task.trim(),
      description: description.trim(),
      completed: false,
    };
    setTodoList((list) => [newTodo, ...list]);
  };

  const editTodo = (id: string, task: string, description: string) => {
    if (!task.trim()) return;
    setTodoList((list) =>
      list.map((item) =>
        item.id === id
          ? { ...item, task: task.trim(), description: description.trim() }
          : item
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodoList((list) => list.filter((item) => item.id !== id));

  };

  const toggleCompletion = (id: string) => {
    setTodoList((list) =>
      list.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return { todoList, addTodo, editTodo, deleteTodo, toggleCompletion };
};

export default useList;
