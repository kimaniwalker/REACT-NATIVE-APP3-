import React ,{ Component } from 'react';
import { View , ScrollView, Text, StyleSheet } from 'react-native';
import { Header, Button } from 'react-native-elements';




class HomeScreen extends Component {

    static NavigationOptions = {
        title: 'Home Page'
    }


    constructor(props) {
        super(props);

    }

    componentDidMount() {
        
    }

    
    

    
    render() {
const { Navigate } = this.props.navigation;
        
        return(  

            

            <ScrollView style={styles.container}>
            <Header 
            leftComponent={{
   icon: 'menu',
   color: '#fff',
   onPress: () => this.props.navigation.navigate('NavMenu'),
}}
            
            
            centerComponent={{ text: 'APP TITLE', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
          />

          
                </ScrollView>
            

                
        );
    }

} 



const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    }
})

export default HomeScreen;





