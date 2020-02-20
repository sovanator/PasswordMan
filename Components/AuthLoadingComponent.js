import React, { Component } from 'react';
import {ActivityIndicator, StatusBar, View} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';


class AuthLoading extends Component {
    constructor(props){
        super(props)
         this.loadData()
        
    }

    loadData = async() =>{
        const userValidated = await AsyncStorage.getItem('userValidated');
        this.props.navigation.navigate(userValidated !== '1'? 'AuthStack' : 'AppStack' )

    }
    render() { 
        return (
            <View style={{paddingTop: 20}}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
          );
    }
}
 
export default AuthLoading;