

import { useEffect, useState } from "react";
import useList from "../../hooks/useList";
import AppModal from "../../components/ui/Modal";
import { View } from "react-native";
import Header from "../../components/Todo/Header";
import AddTodo from "../../components/Todo/AddTodo";
import TodoList from "../../components/Todo/TodoList";
import styles from "./styles";
import { Todo } from "../../components/Todo/types";
const TodoListScreen = () => {
  const { todoList, addTodo, editTodo, deleteTodo, toggleCompletion } =
    useList();
  const [showAddForm, setShowAddForm] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Todo | null>(null);
  const handleDelete = () => {
    if (selectedItem) deleteTodo(selectedItem.id);
    setModalVisible(false);
    setSelectedItem(null);
  };

  useEffect(() => {
    setShowAddForm(todoList.length === 0);
  }, [todoList.length]);

  const handleCancel = () => {
    setModalVisible(false);
    setSelectedItem(null);
  };
  return (
    <>
      <AppModal
        visible={modalVisible}
        title="Delete Todo"
        message={`Are you sure you want to delete this item? \n\n(${selectedItem?.task})`}
        onCancel={handleCancel}
        onConfirm={handleDelete}
        confirmText="Delete"
      />
      <View style={styles.headerContainer}>
        <Header
          setShowAddForm={setShowAddForm}
          setSelectedItem={setSelectedItem}
        />
        {showAddForm && (
          <AddTodo
            selectedTodo={selectedItem}
            setSelectedTodo={setSelectedItem}
            onAdd={addTodo}
            onEdit={editTodo}
            setShowAddForm={setShowAddForm}
          />
        )}
      </View>

      <View style={{ flex: 1 }}>
        <TodoList
          todoItems={todoList}
          setShowAddForm={setShowAddForm}
          toggleCompletion={toggleCompletion}
          setSelectedTodo={setSelectedItem}
          setModalVisible={setModalVisible}
        />
      </View>
    </>
  );
};

export default TodoListScreen;
