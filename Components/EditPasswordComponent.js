import React, { Component } from 'react'
import {Text, TextInput, View, Button} from 'react-native';

class EditPassword extends Component {
    constructor(props){
        super(props)
        this.state={
            title: this.props.navigation.getParam('title'),
            website: this.props.navigation.getParam('website'),
            username: this.props.navigation.getParam('username'),
            password: this.props.navigation.getParam('password'),
            notes: this.props.navigation.getParam('notes'),
        }
    }

    handleSave =()=>{
        alert('Saved (not really)!')
        this.props.navigation.goBack()
    }
    render() { 
        return (
            <View>
                <Text>Title</Text>
                <TextInput value= {this.state.title} onChangeText={(value)=>this.setState({title:value})} />
                <Text>Link</Text>
                <TextInput value= {this.state.website} onChangeText={(value)=>this.setState({website:value})}  />
                <Text>Username</Text>
                <TextInput value= {this.state.username} onChangeText={(value)=>this.setState({username:value})} />
                <Text>Password</Text>
                <TextInput secureTextEntry value= {this.state.password} onChangeText={(value)=>this.setState({password:value})} />
                <Text>Notes</Text>
                <TextInput  value= {this.state.notes} multiline onChangeText={(value)=>this.setState({notes:value})} />
                <Button title="Save" onPress={()=>this.handleSave()} />
                <Button title="Cancle" onPress={()=>this.props.navigation.goBack()}  />
    </View>
          );
    }
}
 
export default EditPassword;



