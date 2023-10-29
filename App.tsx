import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types'
import { Home, Store } from '@/screens'

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          options={{
            headerShown: false
          }}
          name='Home'
          component={Home}
        />
        <Stack.Screen
          options={{
            headerShown: false
          }}
          name='Store'
          component={Store}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}