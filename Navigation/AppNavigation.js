import React from 'react';
import { createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack';
import NewPassword from '../Components/CreateNewComponent';
import SavedPassword from '../Components/SavedPasswordComponent';
import GeneratePassword from '../Components/GenerateNewComponent';

// const PasswordNavigator = createStackNavigator({
//     SavedPassword: {
//         screen: SavedPassword
//     },
//     NewPassword: {
//         screen: NewPassword   
//     },
//     GeneratePassword:{
//         screen: GeneratePassword
//     }
// })

const TabNavigator = createBottomTabNavigator({
    "Saved Password":{screen:SavedPassword},
    "New Password":{screen:NewPassword},
    "Generate Password":{screen:GeneratePassword}

})
const AppContainer = createAppContainer(TabNavigator);

export default AppContainer;