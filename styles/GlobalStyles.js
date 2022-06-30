import { StyleSheet } from "react-native"
export const SplashscreenStyles = StyleSheet.create({
    Container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    }
})

export const CustomcardStyles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: "#ffffff",
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 2,
        flex: 1,
        justifyContent: "center"
    },
    cardContent: {
        marginHorizontal: 10,
        marginVertical: 10
    }
})

export const HomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    playBtn: {
        padding: 20,
    },
})