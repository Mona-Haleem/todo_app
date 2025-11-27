import { type Todo } from "../types";
import styles from "./style";
import {  Text, View } from "react-native";
import Button from "../../ui/Button";
import {  useState } from "react";

interface TodoItemProps {
  todoItem: Todo;
  toggleCompletion: (id: string) => void;
  setShowAddForm: React.Dispatch<React.SetStateAction<boolean>>;

  setSelectedTodo: React.Dispatch<React.SetStateAction<Todo | null>>;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
const TodoItem = ({
  todoItem,
  toggleCompletion,
  setSelectedTodo,
  setModalVisible,
  setShowAddForm,
}: TodoItemProps) => {
const [expanded, setExpanded] = useState(false);
  

  const handleDeleteAction = () => {
    setModalVisible(true);
    setSelectedTodo(todoItem);
  };

  const handleStartEdit = () => {
    setShowAddForm(true);
    setSelectedTodo(todoItem);
  };

  

  return (
    <View
      style={[
        styles.container,
        todoItem.completed && styles.completedContainer,
      ]}
    >
      <View style={styles.content}>
        <Button
          icons={[todoItem.completed ? "checkmark-circle" : "ellipse-outline"]}
          style={styles.checkbox}
          iconStyle={{ color: "#000" }}
          variant="text"
          onPress={() => toggleCompletion(todoItem.id)}
        />
        <Text
          style={[styles.task, todoItem.completed && styles.completedTask]}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {todoItem.task}
        </Text>
        {todoItem.description && (
          <Text
            style={[
              styles.description,
              todoItem.completed && styles.completedTask,
            ]}
            onPress={() => setExpanded(!expanded)}
            numberOfLines={expanded ? undefined:2 }
            ellipsizeMode="tail"
          >
            {todoItem.description}
          </Text>
        )}
      </View>
      <View style={styles.actions}>
        <Button
          icons={["create-outline"]}
          iconStyle={styles.editBtn}
          variant="text"
          onPress={handleStartEdit}
        />
        <Button
          icons={["trash"]}
          iconStyle={styles.trashBtn}
          variant="text"
          onPress={handleDeleteAction}
        />
      </View>
    </View>
  );
};

export default TodoItem;
