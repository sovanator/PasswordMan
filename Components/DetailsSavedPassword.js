import React, { Component } from 'react'
import {Text, View, Button, StyleSheet, KeyboardAvoidingView} from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons'
import {connect} from 'react-redux'
import {deletePassword} from '../Redux/ActionCreator'

   
 class DetailsSaved extends Component{  
    constructor(props){
        super(props)
        this.state={ eyeStatus:'visibility-off',                   
                     secureTextEntry: true
        }
    }
    
    handleDelete=(key)=>{
        this.props.deletePassword(key)
        this.props.navigation.navigate("Saved Password")
    }

    handleEye =()=>{
        const eyeChanger = this.state.eyeStatus=='visibility' ? 'visibility-off' : 'visibility';  
        this.setState({
            secureTextEntry: !this.state.secureTextEntry,
            eyeStatus: eyeChanger
        })
    }
    

    render(){
    return ( 
        <KeyboardAvoidingView  behavior="padding"  style={styles.container}>
            <Text style={styles.textLable}>Title</Text>
            <Input editable={false} value= {this.props.navigation.getParam('title')} editable={false} />
            <Text style={styles.textLable}>Link</Text>
            <Input editable={false} value= {this.props.navigation.getParam('website')} editable={false} />
            <Text style={styles.textLable}>Username</Text>
            <Input editable={false} value= {this.props.navigation.getParam('username')} editable={false} />
            <Text style={styles.textLable}>Password</Text>
            <Input editable={false} secureTextEntry={this.state.secureTextEntry} value= {this.props.navigation.getParam('password')} editable={false} />
            <Icon 
                                            style={{position:"absolute", top: 280, right: 35, fontSize: 20}} 
                                            name={this.state.eyeStatus}
                                            onPress={()=>this.handleEye()}
                                        />
            <Text style={styles.textLable}>Notes</Text>
            <Input editable={false}  value= {this.props.navigation.getParam('notes')} multiline editable={false} />
            <View style={styles.buttonContainer} >
            <Button
                    color='black'
                     handleSavedPassword ={()=>this.props.handleSavedPassword()}
                      title="Edit" onPress={()=>this.props.navigation.navigate('Edit Password', {
                                                                                    title: this.props.navigation.getParam('title'),
                                                                                    website: this.props.navigation.getParam('website'),
                                                                                    username: this.props.navigation.getParam('username'),
                                                                                    password:  this.props.navigation.getParam('password'),
                                                                                    notes: this.props.navigation.getParam('notes'),
                                                                                    key: this.props.navigation.getParam('key')
                                                                                     
            })}/>
            
            <Button 
                    color='grey'
                     title="Delete" 
                     onPress={()=>this.handleDelete(this.props.navigation.getParam('key'))} 
            />
            </View>
        </KeyboardAvoidingView>
     )
        }
}


const mapDispatchToProps = {
    deletePassword: (key) =>(deletePassword(key))
}
const mapStateToProps = (state)=>{
    return {
        savedPasswords: state.passwordList
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DetailsSaved);

const styles = StyleSheet.create({
    container:{
        flex:1,
       
    },
    textLable:{
        textAlign: "center",
        fontSize: 20,
        color: "grey",
        paddingTop: 10
    },
    buttonContainer:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20

    }
})