import React, { Component } from 'react';
import {StyleSheet, View, Button} from 'react-native';
import {Input} from 'react-native-elements'

class GeneratePassword extends Component {
    constructor(props){
        super(props)
        this.state={ 
            length: 9,
            exclude:'',
             password:''
        }
    }


    generatePassword = ()=>{
       const lengthPass = this.state.length;
       console.log(lengthPass)

       const  randomFunc =  {
            lower: this.generateLowerCase,
            upper: this.generateUpperCase,
            number: this.generateNumber,
            symbol: this.generateSymbol
       }
    

        const keyArray = ['upper','number','symbol','lower']
        let password = ''
       for (let i=0; i<lengthPass; i++){
            let keyLength = keyArray.length
            let randomKeyIndex = Math.floor(Math.random()*keyLength)
            let randomKey = keyArray[randomKeyIndex]
            let randomString = randomFunc[randomKey]
            password = password + randomString()
        
           
       }    
       

        this.setState({password})
        
        
    }

    generateLowerCase = ()=>{
        return String.fromCharCode(Math.floor(Math.random()*26)+97)
    }

    generateUpperCase = ()=>{
        return String.fromCharCode(Math.floor(Math.random()*26)+65)
    }

    generateNumber = ()=>{
        return String.fromCharCode(Math.floor(Math.random()*10)+48)
    }

    generateSymbol = ()=>{
        const symbols = '!@#$%^&*()[]{}=<>/?.,;"`~|'
        return symbols[Math.floor(Math.random()* symbols.length)]
    }


    render() { 
        return (
                
                                <View>
                                    <View style={{marginHorizontal: 20, marginVertical: 5}}>
                                         <Input placeholder="Length= 9" 
                                                onChangeText={(value)=>{this.setState({length:value})}}
                                         />                                         
                                    </View>
                                    <View style={{marginHorizontal: 20, marginVertical: 5}}>
                                         <Input placeholder="Exclude"
                                                disabled 
                                         />                                         
                                    </View>
                                    <View style={styles.buttonContainer}>   

                                        <Button         
                                                       
                                                        color='black'
                                                        title="Generate" 
                                                        onPress={()=>{this.generatePassword()}}
                                        />
                                    </View>
                                    <View style={{marginHorizontal: 20, marginVertical: 5}}>
                                         <Input placeholder="Password"
                                                disabled 
                                                value={this.state.password}
                                                
                                         />                                         
                                    </View>
                                </View>
                                    );
    }
}
 
export default GeneratePassword;

const styles = StyleSheet.create({
    buttonContainer:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    }
})