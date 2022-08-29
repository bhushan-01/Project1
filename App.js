import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from './Screen/Pages/Home';
import Signup from './Screen/Pages/Signup';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
          <Stack.Screen name="Signup" component={Signup} /> 
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
 
});
                                                                                                                                                      
  //  <View style={styles.view}>
  //     {/* <Signup /> */}
  //     <Home />
  //     {/*   <Home /> */}
  //   </View>
