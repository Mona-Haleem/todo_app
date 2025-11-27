import { Dimensions, FlatList} from "react-native";
import { Todo } from "../types";
import styles from "./style";
import TodoItem from "../TodoItem";

interface TodoListProps {
  todoItems: Todo[];
}
const TodoList = ({
  todoItems,
 
}: TodoListProps) => {
  const width = Dimensions.get("window").width;
  return (
    <FlatList
      data={todoItems}
      keyExtractor={(item: Todo) => item.id.toString()}
      renderItem={({ item }) => (
        <TodoItem
          todoItem={item}
       
        />
      )}
    
      style={[styles.listContainer, { width: width }]}
      contentContainerStyle={styles.list}
      showsVerticalScrollIndicator={false}
      initialNumToRender={10}
      removeClippedSubviews={true}
    />
  );
};

export default TodoList;
