import React, { Component } from 'react';
import { Header } from 'react-native-elements';



export default class ProjectCard extends Component {
    render() {
        return(
            <Header 
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'THE 808 TRAP', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
          />
        );
    }
}


