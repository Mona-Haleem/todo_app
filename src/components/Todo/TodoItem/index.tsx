/**
 * TodoItem Component
 * 
 * Individual todo list item displaying task details with interactive controls.
 * Features completion toggle, edit and delete actions, and visual feedback animations.
 * Highlights on add and on edit to provide user feedback.
 */


import { type Todo } from "../types";
import styles from "./style";
import { Animated, Text, View } from "react-native";
import Button from "../../ui/Button";
import { useEffect, useRef, useState } from "react";

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
  const highlightAnim = useRef(new Animated.Value(0)).current;
const [expanded, setExpanded] = useState(false);
  
// Briefly highlight the item in purple to show it was updated
const flashHighlight = () => {
    highlightAnim.setValue(1);
    Animated.timing(highlightAnim, {
      toValue: 0,
      duration: 800,
      useNativeDriver: false,
    }).start();
  };

  //only trigger on content change avoid the mark completion change
  useEffect(() => {
    flashHighlight();
  }, [todoItem.task, todoItem.description]);

  const handleDeleteAction = () => {
    setModalVisible(true);
    setSelectedTodo(todoItem);
  };

  const handleStartEdit = () => {
    setShowAddForm(true);
    setSelectedTodo(todoItem);
  };

  const animatedStyle = {
    backgroundColor: highlightAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [styles.container.backgroundColor || "#fff", "#6366F1"],
    }),
  };

  return (
    <Animated.View
      style={[
        styles.container,
        todoItem.completed && styles.completedContainer,
        animatedStyle,
      ]}
    >
      <View style={styles.content}>
        <Button
          testID="checkbox"
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
          testID="edit-button"
          icons={["create-outline"]}
          iconStyle={styles.editBtn}
          variant="text"
          onPress={handleStartEdit}
        />
        <Button
          testID="delete-button"
          icons={["trash"]}
          iconStyle={styles.trashBtn}
          variant="text"
          onPress={handleDeleteAction}
        />
      </View>
    </Animated.View>
  );
};

export default TodoItem;
