import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListaProdutoScreen from './components/ListaProdutoScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListaProduto">
        <Stack.Screen name="ListaProduto" component={ListaProdutoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;