
import { Text, View } from "react-native";
import styles from "./style";
import Button from "../../ui/Button";
import { Dispatch, SetStateAction } from "react";
import { Todo } from "../types";

type HeaderProps = {
  setShowAddForm: Dispatch<SetStateAction<boolean>>;
  setSelectedItem: Dispatch<SetStateAction<Todo|null>>
};

const Header = ({ setShowAddForm,setSelectedItem }: HeaderProps) => {

  const handlePress = ()=>{
    setSelectedItem(null);  //cleanup add/edit form on toggling to ensure the correct mode (add/edit) is active 
    setShowAddForm((isVisible) => !isVisible);
  }

  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todo List</Text>

      <Button
        testID="add-button"
        icons={["add"]}
        iconStyle={{ color: "#fff" }}
        style={styles.addButton}
        onPress={handlePress}
      />
    </View>
  );
};

export default Header;
