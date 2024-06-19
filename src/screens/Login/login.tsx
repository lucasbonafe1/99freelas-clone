import { StyleSheet, View, Text } from "react-native";

export default function Login(){
    return(
    <View style={styles.container}>
        <Text style={styles.text}>
        Tela de Login
        </Text>
    </View>        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        position:"absolute",
        color:"white",
        borderWidth:20,
        borderColor:"#00adef"
    }
});