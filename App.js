import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TextInput, Button, Text } from 'react-native-paper'
import { View, SafeAreaView } from 'react-native';
import { Root } from 'react-native-popup-confirm-toast'


import Home from "./screens/Home/Home"
import Analytics from "./screens/Analytics/Analytics"

const Stack = createNativeStackNavigator();
const Dashboard = (navigation) => (
  <View>
    <View>
      <Button mode="text" title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
    {/* <View >
      <Button mode="text" title="Analytics" onPress={() => navigation.navigate('Analytics')} />
    </View > */}
  </View>
)

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        {/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}
        <Stack.Screen name="Analytics" component={Analytics} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     width: '100%',
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginLeft: 20,
//     marginRight: 20
//   }
// })

export default App