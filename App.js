import React from 'react';
import { createStackNavigator } from 'react-navigation';


import HomeScreen from './screens/HomeScreen';
import AboutUs from './screens/AboutUs';
import NavMenu from './screens/NavMenu';

const RootNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  AboutUs: { screen: AboutUs },
  NavMenu: { screen: NavMenu },
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



