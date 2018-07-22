import React from 'react';
import { createStackNavigator } from 'react-navigation';


import HomeScreen from './screens/HomeScreen';
import AboutUs from './screens/AboutUs';

const RootNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  AboutUs: { screen: AboutUs }
}, {
  initialRouteName: 'Home'
});





export default class App extends React.Component {
  render() { 
    return ( 
      
      
      <RootNavigator />  
      
      
      
      
      
         );
  }
}



