import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAvoidingView, StyleSheet, Platform } from "react-native";
import { useState } from "react";
import { Todo } from "./src/components/Todo/types";
import AddTodo from "./src/components/Todo/AddTodo";
import TodoList from "./src/components/Todo/TodoList";

export default function App() {
  const [todoList, setTodoList] = useState<Todo[]>([
    {
      id: new Date().toISOString() +6 ,
      task: "testUI",
      completed: false,
      description: "this is a task for ui design ",
    },
     {
      id: new Date().toISOString()+3,
      task: "testUI",
      completed: false,
      description: "this is a task for ui design ",
    },
     {
      id: new Date().toISOString() + 2,
      task: "testUI",
      completed: false,
      description: "this is a task for ui design ",
    },
     {
      id: new Date().toISOString() + 5,
      task: "testUI",
      completed: true,
      description: "this is a task for ui design longggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg desc ",
    },
     {
      id: new Date().toISOString() +8,
      task: "testUI longggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg task",
      completed: false,
      description: "this is a task for ui design longggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg desc ",
    },
     {
      id: new Date().toISOString() +4,
      task: "testUI",
      completed: false,
      description: "this is a task for ui design ",
    },
     {
      id: new Date().toISOString() +1,
      task: "testUI",
      completed: false,
      description: "this is a task for ui design ",
    },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <AddTodo />
        <TodoList todoItems={todoList} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "center",
  },
});
