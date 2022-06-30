import {
    DrawerContentScrollView,
    DrawerItemList
} from '@react-navigation/drawer';
import React from 'react';
import {
    Image, StyleSheet, Text, View
} from 'react-native';


const CustomDrawer = props => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{ backgroundColor: '#F5F5F5' }}>
                <View style={{ padding: 20 }}>
                    <Image
                        source={require('../../assets/avatar.jpg')}
                        style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10 }}
                    />
                    <Text
                        style={{
                            color: '#3d3d3d',
                            fontSize: 18,
                            marginBottom: 5,
                        }}>
                        Rahul Reddy
                    </Text>
                </View>
                {/* <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }}
                /> */}
                <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
        </View>
    );
};

export default CustomDrawer;