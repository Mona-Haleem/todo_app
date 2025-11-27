
import { Text, View } from "react-native";
import styles from "./style";
import Button from "../../ui/Button";
import { Dispatch, SetStateAction } from "react";

type HeaderProps = {
  setShowAddForm: Dispatch<SetStateAction<boolean>>;
};

const Header = ({ setShowAddForm }: HeaderProps) => {

  const handlePress = ()=>{
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
