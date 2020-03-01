import React, { Component } from 'react'
import {Text, View, Button} from 'react-native';
import { Input } from 'react-native-elements';
import {connect} from 'react-redux'
import {deletePassword} from '../Redux/ActionCreator'

   
 class DetailsSaved extends Component{  
    
    handleDelete=(key)=>{
        console.log(key)
        this.props.deletePassword(key)
    }

    

    render(){
        // const key =this.props.navigation.getParam('key')
    return ( 
        <View>
            <Text>Title</Text>
            <Input editable={false} value= {this.props.navigation.getParam('title')} editable={false} />
            <Text>Link</Text>
            <Input editable={false} value= {this.props.navigation.getParam('website')} editable={false} />
            <Text>Username</Text>
            <Input editable={false} value= {this.props.navigation.getParam('username')} editable={false} />
            {/* <Text>Key</Text>
            <Input editable={false} value= {navigation.getParam('key')} editable={false} /> */}
            <Text>Password</Text>
            <Input editable={false} secureTextEntry value= {this.props.navigation.getParam('password')} editable={false} />
            <Text>Notes</Text>
            <Input editable={false}  value= {this.props.navigation.getParam('notes')} multiline editable={false} />
            <Button handleSavedPassword ={()=>this.props.handleSavedPassword()} title="Edit" onPress={()=>this.props.navigation.navigate('Edit Password', {
                                                                                    title: this.props.navigation.getParam('title'),
                                                                                    website: this.props.navigation.getParam('website'),
                                                                                    username: this.props.navigation.getParam('username'),
                                                                                    password:  this.props.navigation.getParam('password'),
                                                                                    notes: this.props.navigation.getParam('notes'),
                                                                                    key: this.props.navigation.getParam('key')
                                                                                     
            })}/>
            <Button title="Delete" onPress={()=>this.handleDelete(this.props.navigation.getParam('key'))} />
        </View>
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