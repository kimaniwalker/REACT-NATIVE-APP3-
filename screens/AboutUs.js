import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';

export default class AboutUs extends Component {

    static navigationOptions = {
        title: 'About Us'
    }
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <ScrollView>

            <Text> About Us </Text>
                </ScrollView>
        )
    }
}