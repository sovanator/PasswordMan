import React, { Component } from 'react';
import {Text, View, Button, TouchableOpacity, StyleSheet} from 'react-native';
import {Input} from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux'
import {addPassword} from '../Redux/ActionCreator'
import {store} from '../App'

const mapDispatchToProps = {
    addPassword: (key, title, username, password, website, notes) =>(addPassword(title, username, password, website, notes))
}

class NewPassword extends Component {
    constructor(props){
        super(props)
        this.state={                title:"",
                                    userName:'',
                                    password:'',
                                    link:'',
                                    key:'',
                    
                     secureTextEntry: true
        }
    }
  

    handleEye =()=>{
        this.setState({
            secureTextEntry: !this.state.secureTextEntry
        })
    }

    handleAddPassword=()=>{
        this.props.addPassword('21',this.state.title, this.state.username, this.state.password, this.state.link, this.state.notes)
        
    }
    
    resetForm=()=>{
        this.setState({title:''
                        ,userName:'',
                         password:'',
                          link:'', 
                          key:''})
       
    }  
    
    returnState =()=>{
        console.log(store.getState().SAVEDPASSWORD)
    }
    
   
    render() { 
        return (
                    
                  
                                    <View style={styles.container}>
                                        <View style={{marginHorizontal: 20, marginVertical: 5}}>
                                            <Text>Title</Text>
                                            <Input placeholder="Title" 
                                                        value={this.state.title}
                                                        onChangeText={(title)=>{this.setState({title:title})}}/>
                                        
                                        </View>

                                        <View style={{marginHorizontal: 20, marginVertical: 5}}>
                                            <Text>Link</Text>
                                            <Input  
                                                        
                                                        value={this.state.link}
                                                        placeholder="Link" 
                                                        onChangeText={(link)=>this.setState({link:link})}/>
                                        </View>
                                        <View style={{marginHorizontal: 20, marginVertical: 5}}>
                                            <Text>User Name</Text>
                                            <Input 
                                                        
                                                        value={this.state.userName}
                                                        placeholder="User Name" 
                                                        onChangeText={(userName)=>this.setState({userName:userName})}/>
                                        </View>
                                        <View style={{marginHorizontal: 20, marginVertical: 5}}>
                                            <Text>Password</Text>
                                            <Input 
                                                        value={this.state.password}
                                                        placeholder="Password" 
                                                        onChangeText={(password)=>this.setState({password:password})}
                                                        secureTextEntry={this.state.secureTextEntry}/>
                                            <TouchableOpacity onPress={this.handleEye}>
                                                 <Icon name="eye" size={30} />
                                            </TouchableOpacity>
                                        </View>
                                        <Button title="Create" onPress={()=>{this.handleAddPassword();
                                                                             
                                                                            this.resetForm()}} />
                                        <Button title="Back" color="red" onPress={()=>this.props.navigation.navigate('Saved Password')
                                        }/>
                        

                      
                  </View>
                    );
    }
}
 
export default connect(null,mapDispatchToProps)(NewPassword);


const styles = StyleSheet.create({
    container:{
    flex:1,
   
   
    }, 
 })