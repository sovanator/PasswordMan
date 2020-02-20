import React, { Component } from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {Avatar} from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler';
// import AsyncStorage from '@react-native-community/async-storage';


const userInfo = {pin: '1234'}

class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            pin: ''
        }
    }

     validatePin = async()=>{
            if(userInfo.pin ===this.state.pin) {
                                            //   await AsyncStorage.setItem('userValidated','1')
                                               alert("logged in")
                                                this.props.navigation.navigate("AppStack") 
                                            }
            else {alert('Failed')}
    }

    render() { 
        return (
            <View style={styles.container}>
                <Avatar     style={styles.avatar}
                            size="xlarge"
                            rounded
                            source={{
                                uri:''
                                }}
                />
                
                <TextInput 
                            secureTextEntry
                            placeholder= "PIN" 
                            style={styles.input}
                            onChangeText={(pin)=>this.setState({pin})}
                    />
                 <Button title="Login"
                            onPress={this.validatePin} />
                <Button title="SignUp"
                            onPress={()=>this.props.navigation.navigate('SignUp')} />
              
            </View>
            )
        }
}
 
export default Login;


const styles = StyleSheet.create({
    container:{
    flex:1,
    backgroundColor: '#3498db',
    padding: 50
    },   
    avatar:{height:200,
            width: 200,
        marginHorizontal: 70,
        marginBottom: 10 },
   
    input:{
        paddingLeft: 20,
        height: 40,
        backgroundColor:"white",
        marginBottom: 20,
        paddingHorizontal: 10
    }
})