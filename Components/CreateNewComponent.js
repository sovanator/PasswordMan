import React, { Component } from 'react';
import { View, Button, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {Input} from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {connect} from 'react-redux'
import {addPassword} from '../Redux/ActionCreator'
import {store} from '../App'

const mapDispatchToProps = {
    addPassword: (id, title, username, password, website, notes) =>(addPassword(id, title, username, password, website, notes))
}

class NewPassword extends Component {
    constructor(props){
        super(props)
        this.state={                title:"",
                                    userName:'',
                                    password:'',
                                    link:'',
                                    key:'10',
                                    eyeStatus:'visibility-off',                   
                                     secureTextEntry: true
        }
    }
  

    handleEye =()=>{
        const eyeChanger = this.state.eyeStatus=='visibility' ? 'visibility-off' : 'visibility';  
        this.setState({
            secureTextEntry: !this.state.secureTextEntry,
            eyeStatus: eyeChanger
        })
    }

    handleAddPassword=()=>{
        this.props.addPassword(this.state.id,this.state.title, this.state.userName, this.state.password, this.state.link, this.state.notes)
        
    }

    incrementId() {
        let newId = Number(this.state.key) + 1;
        newId = String(newId);
    
        this.setState({ key: newId });
      }
    
    resetForm=()=>{
        this.setState({title:''
                        ,userName:'', 
                         password:'',
                          link:'', 
                          key:'',
                        })
       
    }  
    
    returnState =()=>{
        console.log(store.getState().SAVEDPASSWORD)
    }
    
   
    render() { 
        return (
                    
                  
                                    <KeyboardAvoidingView behavior="padding" style={styles.container}>
                                        <View style={{marginHorizontal: 20, marginVertical: 5}}>
                                            <Input placeholder="Title" 
                                                        value={this.state.title}
                                                        onChangeText={(title)=>{this.setState({title:title})}}/>
                                        
                                        </View>

                                        <View style={{marginHorizontal: 20, marginVertical: 5}}>
                                            <Input  
                                                        
                                                        value={this.state.link}
                                                        placeholder="Link" 
                                                        onChangeText={(link)=>this.setState({link:link})}/>
                                        </View>
                                        <View  style={{marginHorizontal: 20, marginVertical: 5}}>
                                            <Input 
                                                        
                                                        value={this.state.userName}
                                                        placeholder="User Name" 
                                                        onChangeText={(userName)=>this.setState({userName:userName})}/>
                                        </View>
                                        <View style={{marginHorizontal: 20}}>
                                            <Input 
                                                        value={this.state.password}
                                                        placeholder="Password" 
                                                        onChangeText={(password)=>this.setState({password:password})}
                                                        secureTextEntry={this.state.secureTextEntry}/>
                                         
                                        <Icon 
                                            style={{position:"absolute", top: 17, right: 35, fontSize: 20}} 
                                            name={this.state.eyeStatus}
                                            onPress={()=>this.handleEye()}
                                        />
                                        </View>

                                        <View style={styles.buttonContainer} >
                                            <Button 
                                                    color='black'
                                                    title="Create" 
                                                    onPress={()=>{this.handleAddPassword();
                                                                                this.props.navigation.navigate('Saved Password')
                                                                                this.resetForm()}} />
                                            <Button 
                                                    title="Saved List"
                                                    color="grey" 
                                                    onPress={()=>this.props.navigation.navigate('Saved Password')
                                            }/>
                                        </View>
                        

                      
                  </KeyboardAvoidingView>
                    );
    }
}
 
export default connect(null,mapDispatchToProps)(NewPassword);


const styles = StyleSheet.create({
    container:{
        flex:1,
            },
  
    passwordText:{
        alignContent:"center"
    },
    buttonContainer:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    

 })