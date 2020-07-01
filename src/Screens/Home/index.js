import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button
  } from 'react-native';
//   import { NavigationContainer } from '@react-navigation/native';
//   import { createStackNavigator } from '@react-navigation/stack';
  
  import React from 'react';

//   import Navigation from './src/Navigation/Stack.js';



const HomeScreen = (props) => {


    return(
      <View>
        <Text>Home Screen</Text>
        <Button
        title="Go to Details"
        onPress={() => props.navigation.navigate('Details')}
      />
       <Button
        title="Go to about"
        onPress={() => props.navigation.navigate('About')}
      />

       
      </View>
    )
  }

  
  export default HomeScreen;