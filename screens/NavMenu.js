import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';

export default class NavMenu extends Component {

    static navigationOptions = {
        title: 'Menu'
    }
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <ScrollView>

            
            
            
            <Text h1> About Us </Text>
            <Text h1> About Us </Text>
            <Text h1> About Us </Text>
            <Text h1> About Us </Text>
            <Text h1> About Us </Text>
            <Text h1> About Us </Text>



                </ScrollView>
        )
    }
}