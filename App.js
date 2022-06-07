import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DefaultTheme, Provider as PaperProvider, TextInput, Button, Text } from 'react-native-paper'
import { View, SafeAreaView } from 'react-native';


import Home from "./screens/Home/Home"
import Analytics from "./screens/Analytics/Analytics"
import Detail from "./screens/Detail/Detail"

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

const theme = {
  ...DefaultTheme
}
const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Analytics">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Analytics" component={Analytics} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
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