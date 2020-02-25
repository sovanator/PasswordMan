import React, { Component } from 'react';
import {View, StyleSheet, Button, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import {ListItem} from 'react-native-elements'
import {connect} from 'react-redux'

class SavedPassword extends Component {
  
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
        
        const {savedPasswords} = this.props
        
        return (
            <SafeAreaView style={styles.mainContainer}>
                <FlatList 
                    data={savedPasswords}
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

//what data you want to grab from redux goes here
const mapStateToProps = (state)=>{
    return {
        savedPasswords: state.savedPasswords
    }

}
export default connect(mapStateToProps)(SavedPassword);