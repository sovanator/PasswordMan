import React, { Component } from 'react'
import {Text, TextInput, View, Button} from 'react-native';


const DetailsSaved = ({navigation})=> {
    
    return ( 
        <View>
            <Text>Title</Text>
            <TextInput value= {navigation.getParam('title')} editable={false} />
            <Text>Link</Text>
            <TextInput value= {navigation.getParam('website')} editable={false} />
            <Text>Username</Text>
            <TextInput value= {navigation.getParam('username')} editable={false} />
            <Text>Password</Text>
            <TextInput secureTextEntry value= {navigation.getParam('password')} editable={false} />
            <Text>Notes</Text>
            <TextInput  value= {navigation.getParam('notes')} multiline editable={false} />
            <Button title="Edit" onPress={()=>navigation.navigate('Edit Password', {
                                                                                    title: navigation.getParam('title'),
                                                                                    website: navigation.getParam('website'),
                                                                                    username: navigation.getParam('username'),
                                                                                    password:  navigation.getParam('password'),
                                                                                     
            })}/>
        </View>
     )
}
 
export default DetailsSaved;