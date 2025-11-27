import { FlatList } from "react-native";
import { Todo } from "../types";
import styles from "./style";
import { useMemo } from "react";
import TodoItem from "../TodoItem";

const TodoList = ({ todoItems }: { todoItems: Todo[] }) => {
  const sortedTodlist = useMemo(
    () =>
      todoItems.sort(
        (a: Todo, b: Todo) => Number(a.completed) - Number(b.completed)
      ),
    [todoItems]
  );
  return (
    <FlatList
      data={sortedTodlist}
      keyExtractor={(item: Todo) => item.id.toString()}
      renderItem={({ item }) => <TodoItem todoItem={item} />}
      style={styles.listContainer} 
      contentContainerStyle={styles.list} 
      initialNumToRender={10}
      removeClippedSubviews={true}
    />
  );
};

export default TodoList;
