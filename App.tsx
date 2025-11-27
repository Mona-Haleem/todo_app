import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import TodoListScreen from "./src/screens/TodoListScreen";

export default function App() {
 

  return (
    <SafeAreaView style={{flex:1}} >
      <StatusBar style="auto" />
      <TodoListScreen/>    
    </SafeAreaView>
  );
}

