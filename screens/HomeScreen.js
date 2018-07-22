import React ,{ Component } from 'react';
import { View , ScrollView, Text, StyleSheet } from 'react-native';
import { Header, Button } from 'react-native-elements';



class HomeScreen extends Component {

    static navigationOptions = {
        title: 'Home Page'
    }
navigate() {
        console.log('worked');
    }

    constructor(props) {
        super(props);
        

    }

    componentDidMount() {
        
    }

    
    

    
    render() {
       

        return(  

            

            <ScrollView style={styles.container}>
            <Header 
            leftComponent={{ icon: 'menu', color: '#fff'  }}
            
            
            centerComponent={{ text: 'THE 808 TRAP', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
          />

          <Button 
          
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





