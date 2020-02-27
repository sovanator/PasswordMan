import React from 'react'
import {Text, View, Button} from 'react-native';
import { Input } from 'react-native-elements';


const DetailsSaved = ({navigation})=> {
    
    return ( 
        <View>
            <Text>Title</Text>
            <Input editable={false} value= {navigation.getParam('title')} editable={false} />
            <Text>Link</Text>
            <Input editable={false} value= {navigation.getParam('website')} editable={false} />
            <Text>Username</Text>
            <Input editable={false} value= {navigation.getParam('username')} editable={false} />
            <Text>Password</Text>
            <Input editable={false} secureTextEntry value= {navigation.getParam('password')} editable={false} />
            <Text>Notes</Text>
            <Input editable={false}  value= {navigation.getParam('notes')} multiline editable={false} />
            <Button title="Edit" onPress={()=>navigation.navigate('Edit Password', {
                                                                                    title: navigation.getParam('title'),
                                                                                    website: navigation.getParam('website'),
                                                                                    username: navigation.getParam('username'),
                                                                                    password:  navigation.getParam('password'),
                                                                                    notes: navigation.getParam('notes')
                                                                                     
            })}/>
        </View>
     )
}
 
export default DetailsSaved;