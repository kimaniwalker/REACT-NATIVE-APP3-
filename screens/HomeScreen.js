import React ,{ Component } from 'react';
import { View , ScrollView, Text, StyleSheet } from 'react-native';
import { Header, Button } from 'react-native-elements';



class HomeScreen extends Component {

    static navigationOptions = {
        title: 'Home Page'
    }


    constructor(props) {
        super(props);
        

    }

    componentDidMount() {
        
    }

    
    

    
    render() {
       
const { navigate } = this.props.navigation;
        return(  

            

            <ScrollView style={styles.container}>
            <Header 
            leftComponent={{
   icon: 'menu',
   color: '#fff',
   onPress: () => navigate('AboutUs'),
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





