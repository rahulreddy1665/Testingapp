import { View, Text } from 'react-native'
import React from 'react'
import { CustomcardStyles } from '../../styles/GlobalStyles'

export default function Card(props) {
    return (
        <View style={CustomcardStyles.card}>
            <View style={CustomcardStyles.cardContent}>
                {props.children}
            </View>
        </View>
    )
}