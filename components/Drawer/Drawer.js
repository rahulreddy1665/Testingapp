import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { HomeIcon } from '../../assets/icons/HomeIcon';
import { PostIcon } from '../../assets/icons/PostIcon';
import Home from '../../screens/Home';
import Posts from '../../screens/Posts';
import CustomDrawer from '../Sidedrawer/CustomDrawer';


const Drawer = () => {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: '#2196F3',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#333',
                drawerLabelStyle: {
                    marginLeft: -25,
                    marginTop: 2,
                    fontSize: 14,
                },
            }}>
            <Drawer.Screen
                name="Dashboard"
                component={Home}
                options={{

                    drawerIcon: ({ color }) => (
                        <HomeIcon stroke={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Posts"
                component={Posts}
                options={{
                    drawerIcon: ({ color }) => (
                        <PostIcon stroke={color} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
};


export default Drawer