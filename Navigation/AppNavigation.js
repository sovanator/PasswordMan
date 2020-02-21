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
                                        "Sign In": {screen: Login},
                                        "Sign Up": {screen: SignUp}
                                        })

const SavedNavigation = createStackNavigator({
                                        "Saved Password": {screen: SavedPassword,
                                        navigationOptions:{
                                            title: "Saved Password"
                                        }},
                                        "Password Details": {screen: DetailsSaved}
                                                ,
                                        "Edit Password": {screen: EditPassword}
                                                })

const TabNavigator = createBottomTabNavigator({
    "Saved Password":{screen:SavedNavigation},
    "New Password":{screen:NewPassword},
    "Generate Password":{screen:GeneratePassword},
    

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