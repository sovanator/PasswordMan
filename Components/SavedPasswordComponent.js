import React, { Component } from 'react';
import {View, StyleSheet, Button, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import {ListItem} from 'react-native-elements'
import {SAVEDPASSWORD} from '../Data/SavedPassword'

class SavedPassword extends Component {
    constructor(props){
        super(props)  
            this.state={
                SAVEDPASSWORD: SAVEDPASSWORD
            }
        

    }

    // static navigationOptions = {
       
    //     headerRight: () => (
    //       <Button
    //         onPress={() => this.props.navigation.navigate('New Password')}
    //         title="Log out"
    //         color="#fff"
    //       />
    //     ),
    //   };

    handleSavedPassword = ()=>{
        console.log('clicked')
    }

     renderList=({item})=> {
        return (
            <ListItem
                roundAvatar
                title={item.title}
                subtitle={item.website}
                bottomDivider
                onPress={()=>this.props.navigation.navigate('Password Details',item)}
                chevron
            />

        )
    }
    render() { 
        return (
            <SafeAreaView style={styles.mainContainer}>
                <FlatList 
                    data={this.state.SAVEDPASSWORD}
                    renderItem = {this.renderList}
                    keyExtractor={item=>item.key}
                />    
                <View
                    style={styles.ButtonStyle}>
                    <Button
                            title="+"
                            color="black"
                            onPress={()=>this.props.navigation.navigate('New Password')}
                    />
                </View>
            </SafeAreaView>  );
    }
}
   


const styles= StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
      },
      ButtonStyle: {
        position: 'absolute',
        width: 60,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 60,
        bottom: 30,
      },
  
})
export default SavedPassword;