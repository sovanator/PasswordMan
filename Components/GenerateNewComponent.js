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

        }}
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
                                    <Button title="Generate" />
                                    <View style={{marginHorizontal: 20, marginVertical: 5}}>
                                        <Text>Password</Text>
                                        <TextInput
                                            placeholder="Password"
                                            
                                        />
                                    </View>
                                    <Button title='Save'
                                            onPress={formikProps.handleSubmit} />
                                    <Button title='Cancel'
                                            />

                                </>
                            )
                        }    

                    </Formik>
                    


                </View> );
    }
}
 
export default GeneratePassword;