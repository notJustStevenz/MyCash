import React, { FunctionComponent } from 'react';
import { Text, View, Image, Platform } from "react-native";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

// screens
import Welcome from '../screens/Welcome';
import Home from '../screens/Home';
import Bank from '../screens/Bank';
import AddTrans from '../screens/AddTransaction';
import Settings from '../screens/Settings';

// components
import { colors } from '../components/colors';
import { Ionicons } from "@expo/vector-icons" 

import Profile from '../components/header/Profile';
import Notification from '../components/header/Notifcations'

// image
import NotificationIcon from "../assets/icons/nav/bell.png";
import HomeIcon from "../assets/icons/nav/home.png";
import CardIcon from "../assets/icons/nav/credit-card.png";
import PeopleIcon from "../assets/icons/nav/people.png";
import SettingsIcon from "../assets/icons/nav/settings.png";

// react navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ScreenHeight, ScreenWidth } from '../components/shared';

export type RootStackParamList = {
    Welcome: undefined;
    Home: undefined;
    Bank: undefined;
    Card: undefined;
    AddTransaction: undefined;
    People: undefined;
    Settings: undefined;
}; 

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator<RootStackParamList>();

const Tabs: FunctionComponent = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                backBehavior={'history'}
                screenOptions={{
                    headerStyle: {
                        backgroundColor: colors.background,
                        borderBottomWidth: 0,
                        shadowColor: "transparent",
                        shadowOpacity: 0,
                        height: Platform.OS === 'ios' ? Math.round(ScreenHeight*0.1) : Math.round(ScreenHeight*0.10), 
                        
                    },
                    headerTintColor: colors.primaryText,
                    headerRightContainerStyle: {
                        paddingRight: '3%',
                        
                    },
                    headerLeftContainerStyle: {
                        paddingLeft: '3%',
                    
                    },
                    headerLeft: () => (
                        <Profile textStyles={{ fontSize: 15}} onPress={() => {}}>AS</Profile>
                    ),
    
                    headerRight: () => (
                        <Notification onPress={() => {}} img={NotificationIcon} imgStyle={{ height:"40%", width:"40%"}}/>
                    ),

                    tabBarShowLabel: false,
                    tabBarStyle: {
                        position: 'absolute',
                        bottom: '2%',
                        left: '4%',
                        right: '4%',
                        elevation: 0,
                        backgroundColor: 'rgba(25, 25, 25, 0.8)',
                        borderRadius: 100, // Math.round(ScreenWidth*1)
                        height: '10%',
                        borderTopWidth: 0
                    }
                }}
                initialRouteName="Bank"
                >
                <Tab.Screen
                    name="Bank"
                    component={Bank}
                    options={{ 
                        title: "",
                        tabBarIcon: ({focused}) => (
                            <View style={{backgroundColor: focused ? colors.white : 'transparent', borderRadius: 33}}>
                                <Image
                                    source={HomeIcon}
                                    resizeMode='contain'
                                    style={{
                                        width: Math.round(ScreenWidth*0.06),
                                        height: Math.round(ScreenWidth*0.06),
                                        margin: 20,
                                        tintColor: focused ? colors.black : colors.white
                                    
                                    }}
                                />
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Card"
                    component={Bank}
                    options={{ 
                        title: "",
                        tabBarIcon: ({focused}) => (
                            <View style={{backgroundColor: focused ? colors.white : 'transparent', borderRadius: 33}}>
                                <Image 
                                    source={CardIcon}
                                    resizeMode='contain'
                                    style={{
                                        width: 25,
                                        height: 25,
                                        margin: 20,
                                        tintColor: focused ? colors.black : colors.white
                                    }}
                                />
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name="transaction"
                    component={AddTrans}
                    options={{ 
                        title: "",
                        tabBarIcon: ({focused}) => (
                            <View style={{backgroundColor: colors.secondary, borderRadius: 33, padding: 10}}>
                                <Ionicons name="arrow-up-outline" size={25} color={colors.black}/>
                            </View>
                        ),
                        tabBarStyle: {display: 'none'},
                        headerShown: false,
                    }}
                />
                <Tab.Screen
                    name="people"
                    component={Bank}
                    options={{ 
                        title: "",
                        tabBarIcon: ({focused}) => (
                            <View style={{backgroundColor: focused ? colors.white : 'transparent', borderRadius: 33}}>
                                <Image 
                                    source={PeopleIcon}
                                    resizeMode='contain'
                                    style={{
                                        width: 25,
                                        height: 25,
                                        margin: 20,
                                        tintColor: focused ? colors.black : colors.white
                                    }}
                                />
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name="settings"
                    component={Settings}
                    options={{ 
                        title: "",
                        tabBarIcon: ({focused}) => (
                            <View style={{backgroundColor: focused ? colors.white : 'transparent', borderRadius: 33}}>
                                <Image 
                                    source={SettingsIcon}
                                    resizeMode='contain'
                                    style={{
                                        width: 25,
                                        height: 25,
                                        margin: 20,
                                        tintColor: focused ? colors.black : colors.white
                                    }}
                                />
                            </View>
                        ),
                        headerShown: false,
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};


const Stacks: FunctionComponent = () => {
    return (
    <NavigationContainer>
        <Stack.Navigator 
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.background,
                    borderBottomWidth: 0,
                    shadowColor: "transparent",
                    shadowOpacity: 0,
                    elevation: 0,
                    height: 85, 
                },
                headerTintColor: colors.primaryText,
                headerRightContainerStyle: {
                    paddingRight: '5%',
                    
                },
                headerLeftContainerStyle: {
                    paddingLeft: '5%',
                
                },
                headerLeft: () => (
                    <Profile textStyles={{ fontSize: 15}} onPress={() => {}}>AS</Profile>
                ),

                headerRight: () => (
                    <Notification onPress={() => {}} img={NotificationIcon} imgStyle={{ height:"40%", width:"40%"}}/>
                ),
            }}
            initialRouteName="Bank"
        >
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false}}
                // options={{ title: ""}}
            />

            <Stack.Screen
                name="Bank"
                component={Bank}
                // options={{ headerShown: false}}
                options={{ title: ""}}
            />
            
        </Stack.Navigator>
    </NavigationContainer>
    );
};

export default Tabs;