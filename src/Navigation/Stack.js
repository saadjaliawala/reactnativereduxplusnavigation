import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../Screens/Home';
import DetailScreen from '../Screens/Details';
import AboutScreen from '../Screens/About';



const Navigation = () => {




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreenStack = () => {
  return (

  
    <Stack.Navigator>
    {/* <Tab.Navigator> */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        {/* </Tab.Navigator> */}
      </Stack.Navigator>
    
  )
}

const NotShowTab = ['Details','About'];




  const showTab = (route, array) => {


    console.log(route.state,'saad');
    
    const RouteName = route?.state?.routes[route.state.index]?.name;
    return !array.includes(RouteName);
  };

const TabNabigator = () => {
  return(
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen 
      name="Home" component={HomeScreenStack}
      options={({route}) => ({
        tabBarVisible: showTab(route, NotShowTab),
      })}
       />
      <Tab.Screen name="Details" component={DetailScreen} 
      options={({route}) => ({
        tabBarVisible: showTab(route, NotShowTab),
      })}
      
      />
        <Tab.Screen name="About" component={AboutScreen}
        options={({route}) => ({
          tabBarVisible: showTab(route, NotShowTab),
        })}
        
        />
    </Tab.Navigator>
    </NavigationContainer>
  )
}
  return (
    <TabNabigator/>
  );
}
export default Navigation;
