import React, { Component } from 'react';
import { Card, Button } from 'react-native-elements';

export default class ProjectCard extends Component {
    render() {
        return(
        <Card featuredTitle={ this.props.project.name }>
            <Button title="View Project" />
            </Card>
        );
    }
}
