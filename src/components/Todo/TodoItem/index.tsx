import { useState } from "react";
import { type Todo } from "../types";
import styles from "./style";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const TodoItem = ({ todoItem }: { todoItem: Todo }) => {
  // const [todoItem, setTodo] = useState(itemData)
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Ionicons
          style={styles.completed}
          name={todoItem.completed ? "checkmark-circle" : "ellipse-outline"}
          fill={todoItem.completed ? "#000" : "#fff"}
          // color={todoItem.completed ? "#fff" : "#000"}
          size={22}
        />
        <Text style={[styles.task,todoItem.completed ? styles.completedTask :{}]} numberOfLines={1} ellipsizeMode="tail">{todoItem.task}</Text>
        <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">{todoItem.description}</Text>
      </View>
      <View style={styles.actions}>
        <Ionicons style={styles.edit} name={"create-outline"} size={22} />
        <Ionicons style={styles.trash} name={"trash"} size={22} />
      </View>
    </View>
  );
};

export default TodoItem;
