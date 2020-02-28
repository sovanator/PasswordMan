import React, { Component } from 'react';
import {Text, View, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {Avatar} from 'react-native-elements'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
// import AsyncStorage from '@react-native-community/async-storage';


const userInfo = {pin: ''}

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
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
            {/* <View > */}
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
                        
                        <TouchableOpacity  onPress={this.validatePin}>
                            <Text style={styles.texts}> Login</Text>
                        </TouchableOpacity>   
                        <TouchableOpacity   onPress={()=>this.props.navigation.navigate('Sign Up')}>
                                <Text style={styles.texts}>Sign Up</Text>
                        </TouchableOpacity>
            {/* </View> */}
            </KeyboardAvoidingView>
            )
        }
}
 
export default Login;


const styles = StyleSheet.create({
    container:{
    flex:1,
    backgroundColor: '#3498db',
    padding: 30,
    alignItems:"center",
    // justifyContent: "center"
    },   
    avatar:{
        height:'20%',
        width: '20%',
        marginHorizontal: 70,
        marginBottom: 10 },
   
    input:{
        paddingLeft: 20,
        height: 40,
        width: 300,
        textAlign:"center",
        backgroundColor:"white",
        marginBottom: 10,
        paddingHorizontal: 10
    },
    texts:{
        fontSize: 17,
        width: 100,
        alignItems:"center",
        justifyContent: "center"
    }
})