import React, { Component } from 'react';
import {Text, View, Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Formik } from 'formik';

class GeneratePassword extends Component {
    constructor(props){
        super(props)
        this.state={ initialValues:{
            length:'',
            exclude:'',
           

        },
        password:''}
    }

    generatePassword = ()=>{
       const lengthPass = 10;

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
                <View style={{marginTop:90}}>
                    <Formik
                        initialValues={this.state.initialValues}
                        onSubmit={values=>{
                            alert(JSON.stringify(values))
                        }}>
                        {
                            formikProps=>(
                                <>
                                    <View style={{marginHorizontal: 20, marginVertical: 5}}>
                                        <Text>Length</Text>
                                        <TextInput
                                            placeholder="number"
                                            onChangeText={formikProps.handleChange('length')}
                                        />
                                    </View>
                                    <View style={{marginHorizontal: 20, marginVertical: 5}}>
                                        <Text>Exclude</Text>
                                        <TextInput
                                            placeholder="Exclusions"
                                            onChangeText={formikProps.handleChange('exclude')}
                                        />
                                    </View>
                                    <Button title="Generate"
                                            onPress={()=>this.generatePassword()} />
                                    <View style={{marginHorizontal: 20, marginVertical: 5}}>
                                        <Text>{this.state.password}</Text>
                                        
                                    </View>
                                    <Button title='Save'
                                            onPress={formikProps.handleSubmit} />
                                    <Button title='Cancel'
                                            onPress={()=>this.setState({password:''})}/>

                                </>
                            )
                        }    

                    </Formik>
                    


                </View> );
    }
}
 
export default GeneratePassword;