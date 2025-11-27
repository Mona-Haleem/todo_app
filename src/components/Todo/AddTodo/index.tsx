
import { useEffect, useState } from "react";
import Input from "../../ui/Input";
import styles from "./style";
import { Text, View } from "react-native";
import Button from "../../ui/Button";
import { Todo } from "../types";

interface AddTodoProps {
  selectedTodo: Todo | null;
  setShowAddForm: React.Dispatch<React.SetStateAction<boolean>>;
  onAdd: (task: string, description: string) => void;
  onEdit: (id: string, task: string, description: string) => void;
}
const AddTodo = ({
  selectedTodo,
  onAdd,
  onEdit,
  setShowAddForm,
}: AddTodoProps) => {
  const [task, setTask] = useState(selectedTodo?.task || "");
  const [description, setDescription] = useState(
    selectedTodo?.description || ""
  );

  //sync form state whit selected todo
  useEffect(() => {
    setTask(selectedTodo?.task || "");
    setDescription(selectedTodo?.description || "");
  }, [selectedTodo]);

  const onSubmit = () => {
    if (selectedTodo) {
      onEdit(selectedTodo.id, task, description);
    } else {
      onAdd(task, description);
    }
    setTask("");
    setDescription("");
    setShowAddForm(false);
 
  };

  const onCancel = () => {
   
    setTask("");
    setDescription("");
    setShowAddForm(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {selectedTodo ? "Edit Task" : "Add New Task"}
      </Text>
      <Input value={task} onChangeText={setTask} placeholder="Task title" />
      <Input
        value={description}
        onChangeText={setDescription}
        placeholder="Description (optional)"
        multiline={true}
        maxChars={200}
      />
      <View style={styles.actions}>
        <Button
          text="Save"
          icons={["checkmark-outline"]}
          style={styles.button}
          onPress={onSubmit}
        />
        <Button
          text="Cancel"
          icons={["close-outline"]}
          style={styles.button}
          variant="outline"
          onPress={onCancel}
        />
      </View>
    </View>
  );
};

export default AddTodo;
