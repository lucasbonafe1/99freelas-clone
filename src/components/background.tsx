import { View, Image, StyleSheet } from "react-native";

export function Background(){
    return(
        <View style={styles.container}>
            <Image 
                    style={styles.background}
                    source={require('../../assets/background/background.png')}
            />
            <Image
            style={styles.icon}
            source={require('../../assets/icon/freelas.png')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    background:{
        flex: 1
    }, 
    icon:{
        alignItems:"center",
        justifyContent:"center",
        position: 'absolute',
        borderWidth: 30,
        width: '100%',
        height: '26%',
        top: '8%',
        left: '27%'
    }
});