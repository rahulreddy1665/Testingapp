import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Drawer from './components/Drawer/Drawer';
import { Headerless_stack, ScreenNames } from './constants/Constants';
import Splashscreen from './screens/Splashscreen';
import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ScreenNames.SPLASHSCREEN}>
        <Stack.Screen name={ScreenNames.HOMESCREEN} component={Drawer} options={Headerless_stack} />
        <Stack.Screen name={ScreenNames.SPLASHSCREEN} component={Splashscreen} options={Headerless_stack} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;
