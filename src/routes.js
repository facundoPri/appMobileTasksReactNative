import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Todos from './pages/Todos';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'left',
          headerStyle: {
            backgroundColor: '#FFF',
          },
          headerTintColor: '#000',
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen
          name="Todos"
          component={Todos}
          options={Todos.navigationOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
