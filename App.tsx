import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {RootStackParamList} from '@/global/routes'
import {Home,Store} from '@/views'

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown:false
        }}
        name='Home'
        component={Home}
      />
      <Stack.Screen
        options={{
          headerShown:false
        }}
        name='Store'
        component={Store}
      />
    </Stack.Navigator>
  );
}