import React, { Component } from 'react'
import {Text, View, Button, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {Input} from 'react-native-elements'
import {connect} from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {editPassword} from '../Redux/ActionCreator'


class EditPassword extends Component {
    constructor(props){
        super(props)
        this.state={
            title: this.props.navigation.getParam('title'),
            website: this.props.navigation.getParam('website'),
            username: this.props.navigation.getParam('username'),
            password: this.props.navigation.getParam('password'),
            // notes: this.props.navigation.getParam('notes'),
            key: this.props.navigation.getParam('key'),
        
            eyeStatus:"visibility-off",
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
    handleSave =()=>{
        let oldItem = this.props.savedPasswords.filter(items=>items.key!=this.state.key)
        const  newItem =[...oldItem, this.state]
        oldItem = [] 
        this.props.editPassword(newItem)
    }

  
    
    render() { 
        return (
           <KeyboardAvoidingView   style={styles.container}>
                <Input placeholder="Title"
                        value= {this.state.title} 
                        onChangeText={(value)=>this.setState({title:value})} 
                />
                <Input placeholder="Link" 
                        value= {this.state.website}
                         onChangeText={(value)=>this.setState({website:value})} 
                 />
                <Input placeholder="Username" 
                      value= {this.state.username}
                       onChangeText={(value)=>this.setState({username:value})}
                 />
                 <View>
                <Input placeholder="Password"
                       secureTextEntry ={this.state.secureTextEntry} value= {this.state.password} 
                       onChangeText={(value)=>this.setState({password:value})}
                />
                 <Icon 
                                            style={{position:"absolute", top: 17, right: 35, fontSize: 20}} 
                                            name={this.state.eyeStatus}
                                            onPress={()=>this.handleEye()}
                 />
                 </View>
                {/* <Input placeholder="notes"
                       value= {this.state.notes} 
                       multiline 
                       onChangeText={(value)=>this.setState({notes:value})} 
                /> */}
                <View style={styles.buttonContainer}>
                    <Button title="Save" 
                            color="black"
                            onPress={()=>{this.handleSave();
                                        this.props.navigation.navigate("Saved Password")}}
                    />
                    <Button color="grey"
                            title="Back" 
                            onPress={()=>this.props.navigation.goBack()}
                    />
                </View>
    </KeyboardAvoidingView>
          );
        }
    }

    
    const mapStateToProps = (state)=>{
        return {
            savedPasswords: state.passwordList
        }
    }

    const mapDispatchToProps = {
        editPassword: (newItems) =>(editPassword(newItems))
    }
    
export default connect(mapStateToProps, mapDispatchToProps)(EditPassword);

const styles = StyleSheet.create({
    buttonContainer:{
                     flexDirection:'row',
                     alignItems: 'center',
                     justifyContent: 'center',
                     marginTop: 20
    }
})