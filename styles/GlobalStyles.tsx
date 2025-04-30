import { StyleSheet, StatusBar, Platform } from "react-native";

export const styleMain = StyleSheet.create({
    SafeAreaContainer: {
        flex: 1,  
        backgroundColor: 'rgb(244, 254, 255)',  
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0, // Dynamically adjust for Android
    },
});
