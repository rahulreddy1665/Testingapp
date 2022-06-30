import { View, Text } from 'react-native'
import React, {
    useEffect,
    useState
} from 'react'
import LottieView from 'lottie-react-native';
import { SplashscreenStyles } from '../styles/GlobalStyles';
import { useNavigation } from '@react-navigation/native';

const Splashscreen = () => {
    const navigation = useNavigation()
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Home")
        }, 3000)
    })

    return (
        <View style={SplashscreenStyles.Container}>
            <LottieView source={require('../assets/Loader.json')} autoPlay loop />
        </View>
    )
}

export default Splashscreen