import React, { Component } from 'react';
import {Text, View, Button, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {Ionicons} from '@expo/vector-icons'
import { Formik } from 'formik';

class NewPassword extends Component {
    constructor(props){
        super(props)
        this.state={initialValues:{
                                    title:"",
                                    userName:'',
                                    password:'',
                                    link:''
                     },
                     secureTextEntry: true
        }
    }

    handleEye =()=>{
        this.setState({
            secureTextEntry: !this.state.secureTextEntry
        })
    }
    render() { 
        return (<View>
                        
                    <Formik
                        initialValues = {this.state.initialValues}
                        onSubmit={values =>{
                            alert(JSON.stringify(values))
                        }}>
                        {formikProps=>(
                            <>
                                        <View style={{marginHorizontal: 20, marginVertical: 5}}>
                                            <Text>Title</Text>
                                            <TextInput placeholder="Title" 
                                                        onChangeText={formikProps.handleChange('title')}/>
                                        
                                        </View>

                                        <View style={{marginHorizontal: 20, marginVertical: 5}}>
                                            <Text>Link</Text>
                                            <TextInput placeholder="Link" 
                                                        onChangeText={formikProps.handleChange('link')}/>
                                        </View>
                                        <View style={{marginHorizontal: 20, marginVertical: 5}}>
                                            <Text>User Name</Text>
                                            <TextInput placeholder="User Name" 
                                                        onChangeText={formikProps.handleChange('userName')}/>
                                        </View>
                                        <View style={{marginHorizontal: 20, marginVertical: 5}}>
                                            <Text>Password</Text>
                                            <TextInput placeholder="Password" 
                                                        onChangeText={formikProps.handleChange('password')}
                                                        secureTextEntry={this.state.secureTextEntry}/>
                                            <TouchableOpacity onPress={this.handleEye}>
                                                 <Icon name="eye" size={30} />
                                            </TouchableOpacity>
                                        </View>
                                        <Button title="Create" onPress={formikProps.handleSubmit} />
                                        <Button title="Cancle" color="red" onPress={()=>this.props.navigation.navigate('Saved Password')}/>
                            </>

                        )
                        }
                    </Formik>
                 </View>  );
    }
}
 
export default NewPassword;