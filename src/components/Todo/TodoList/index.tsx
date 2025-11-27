


import { Dimensions, FlatList, Text, View } from "react-native";
import { Todo } from "../types";
import styles from "./style";
import TodoItem from "../TodoItem";
import { Ionicons } from "@expo/vector-icons";

interface TodoListProps {
  todoItems: Todo[];
  toggleCompletion: (id: string) => void;
  setSelectedTodo: React.Dispatch<React.SetStateAction<Todo | null>>;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setShowAddForm:React.Dispatch<React.SetStateAction<boolean>>;
}
const TodoList = ({
  todoItems,
  toggleCompletion,
  setShowAddForm,  setSelectedTodo,
  setModalVisible,
}: TodoListProps) => {
  const width = Dimensions.get("window").width;
  return (
    <FlatList
      data={todoItems}
      keyExtractor={(item: Todo) => item.id.toString()}
      renderItem={({ item }) => (
        <TodoItem
          todoItem={item}
          toggleCompletion={toggleCompletion}
          setSelectedTodo={setSelectedTodo}
          setModalVisible={setModalVisible}
          setShowAddForm={setShowAddForm}
        />
      )}
      ListEmptyComponent={
          <View style={styles.emptyState}>
            <Ionicons name="clipboard" size={20} style={styles.emptyStateIcon}/>
            <Text style={styles.emptyStateTitle}>No tasks yet</Text>
            <Text style={styles.emptyStateText}>
              Tap the + button to create your first task
            </Text>
          </View>
      }
      style={[styles.listContainer, { width: width }]}
      contentContainerStyle={styles.list}
      showsVerticalScrollIndicator={false}
      initialNumToRender={10}
      removeClippedSubviews={true}
    />
  );
};

export default TodoList;
