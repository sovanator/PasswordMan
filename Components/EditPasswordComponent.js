import React, { Component } from 'react'
import {Text, View, Button} from 'react-native';
import {Input} from 'react-native-elements'
import {connect} from 'react-redux'

class EditPassword extends Component {
    constructor(props){
        super(props)
        this.state={
            title: this.props.navigation.getParam('title'),
            website: this.props.navigation.getParam('website'),
            username: this.props.navigation.getParam('username'),
            password: this.props.navigation.getParam('password'),
            notes: this.props.navigation.getParam('notes'),
            key: this.props.navigation.getParam('key')
        }
    }

    handleSave =()=>{
        console.log(this.props.savedPasswords)
        
        
    }
    
    render() { 
        return (
            <View>
                <Text>Title</Text>
                <Input value= {this.state.title} onChangeText={(value)=>this.setState({title:value})} />
                <Text>Link</Text>
                <Input value= {this.state.website} onChangeText={(value)=>this.setState({website:value})}  />
                <Text>Username</Text>
                <Input value= {this.state.username} onChangeText={(value)=>this.setState({username:value})} />
                <Text>Password</Text>
                <Input secureTextEntry value= {this.state.password} onChangeText={(value)=>this.setState({password:value})} />
                {/* <Text>Key</Text>
                <Input  value= {this.state.key} onChangeText={(value)=>this.setState({password:key})} /> */}
                <Text>Notes</Text>
                <Input  value= {this.state.notes} multiline onChangeText={(value)=>this.setState({notes:value})} />
                <Button title="Save" 
                        onPress={()=>this.handleSave()} />
                <Button title="Cancle" onPress={()=>this.props.navigation.goBack()}  />
    </View>
          );
        }
    }
    
    
    const mapStateToProps = (state)=>{
        return {
            savedPasswords: state.passwordList
        }
    }
export default connect(mapStateToProps,null)(EditPassword);
