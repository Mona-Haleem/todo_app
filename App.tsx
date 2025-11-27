import { StatusBar } from 'expo-status-bar';
import { View ,StyleSheet} from 'react-native';
import AddTodo from './src/components/Todo/AddTodo';
import TodoList from './src/components/Todo/TodoList';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />  
      <AddTodo/>
      <TodoList/>    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
