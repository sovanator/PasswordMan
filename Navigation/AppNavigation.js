import React from 'react';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack';
// import AuthLoading from '../Components/AuthLoadingComponent'
import Login from '../Components/LoginComponent';
import SignUp from '../Components/SignUpComponent';
import NewPassword from '../Components/CreateNewComponent';
import SavedPassword from '../Components/SavedPasswordComponent';
import GeneratePassword from '../Components/GenerateNewComponent';
import DetailsSaved from '../Components/DetailsSavedPassword'
import EditPassword from '../Components/EditPasswordComponent'


const AuthStack = createStackNavigator({
                                        "Sign In": {screen: Login,
                                            navigationOptions:{
                                                title: "PasswordMan",
                                                headerTintColor: "white",
                                                headerStyle:{
                                                   backgroundColor:'black',
                                                           },
                                               headerTitleAlign: 'center'
                                                }
                                            },
                                        "Sign Up": {screen: SignUp}
                                        })

const SavedNavigation = createStackNavigator({
                                        "Saved Password": {screen: SavedPassword,
                                        navigationOptions:{
                                            title: "Saved Password",
                                            headerTintColor: "white",
                                            headerStyle:{
                                               backgroundColor:'black',
                                            
                                           },
                                           headerTitleAlign: 'center'
                                                            }
                                        },
                                        "Password Details": {screen: DetailsSaved,
                                            navigationOptions:{
                                                title: "Details",
                                                headerTintColor: "white",
                                                headerStyle:{
                                                   backgroundColor:'black',
                                                
                                               },
                                               headerTitleAlign: 'center'
                                                                }
                                        },
                                                
                                        "Edit Password": {screen: EditPassword,
                                            navigationOptions:{
                                                title: "Edit Password",
                                                headerTintColor: "white",
                                                headerStyle:{
                                                   backgroundColor:'black',
                                                
                                               },
                                               headerTitleAlign: 'center'
                                                                }}
                                                })
const NewPasswordNav = createStackNavigator({
                        "New Password": {screen: NewPassword,
                            navigationOptions:{
                                title: "Create New",
                                headerTintColor: "white",
                                headerStyle:{
                                backgroundColor:'black',
                                        },
                                // headerTransparent: true,
                            headerTitleAlign: 'center'
                                }}
                            })
                         

const GenPasswordNav = createStackNavigator({
                        "Gen Password": {screen: GeneratePassword,
                            navigationOptions:{
                                title: "Generator",
                                headerTintColor: "white",
                                headerStyle:{
                                backgroundColor:'black',
                                        },
                            headerTitleAlign: 'center'
                                }}
                            })
                         



const TabNavigator = createBottomTabNavigator({
    "Saved Password":{screen:SavedNavigation},
    "New Password":{screen:NewPasswordNav},
    "Generate Password":{screen:GenPasswordNav}
    

     },{
     tabBarOptions:{
        activeTintColor: "white",      
        inactiveTintColor: "#858585",  
        style: {               
         paddingVertical: 10,        
         backgroundColor: "black",
        },      
        labelStyle: {        
         fontSize: 15,        
           
        },
       
     },
     headerStyle:{
         backgroundColor: 'black'
     }
    })


const AppContainer = createAppContainer(
                                        createSwitchNavigator(
                                            {   
                                                // AuthLoading: AuthLoading,
                                                AppStack: TabNavigator,
                                                AuthStack: AuthStack
                                            },
                                            {
                                            initialRouteName: 'AuthStack',
                                            }
                                        ) );

export default AppContainer;