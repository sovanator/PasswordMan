import React, { Component } from 'react'
import {Text, View, Button} from 'react-native';
import {Input} from 'react-native-elements'
import {connect} from 'react-redux'
import {editPassword} from '../Redux/ActionCreator'


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
        let oldItem = this.props.savedPasswords.filter(items=>items.key!=this.state.key)
        const  newItem =[...oldItem, this.state]
        oldItem = [] 
        this.props.editPassword(newItem)
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
                <Text>Notes</Text>
                <Input  value= {this.state.notes} multiline onChangeText={(value)=>this.setState({notes:value})} />
                <Button title="Save" 
                        onPress={()=>{this.handleSave();
                                    this.props.navigation.navigate("Saved Password")}} />
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

    const mapDispatchToProps = {
        editPassword: (newItems) =>(editPassword(newItems))
    }
    
export default connect(mapStateToProps, mapDispatchToProps)(EditPassword);
