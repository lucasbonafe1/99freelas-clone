import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Background } from '../../components/background';
import { Avancar } from '../../components/button';

export default function Home() {
    return (
        <View style={styles.container}>
            <StatusBar style='auto' backgroundColor='#00adef' />
            <Background />
            <View style={styles.viewText}>
                <Text style={styles.text}>
                    Encontre o melhor freelancer para escrever o seu conteúdo.
                </Text>
            </View>
            <Avancar />
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
    viewText: {
        position: "absolute",
        width: "85%",
        top: "43%",
        left: "9%",
        alignItems: "center",
    },
    text: {
        color: "#F2F2F2",
        fontSize: 29,
        textAlign: "center",
        fontWeight: "400",
    }
});
