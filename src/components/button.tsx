import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Pressable, Text } from "react-native";
import { StackType } from '../routes/stack';

export function Avancar() {
    const navigation = useNavigation<StackType>();
    return (
        <View style={styles.container}>
            <Pressable 
                style={({ pressed }) => [
                    styles.button,
                    pressed && styles.buttonPressed
                ]}
                onPress={() => {navigation.navigate('Login')}} // passar Type em stack.jsx pra sumir o erro
            >
                <Text style={styles.buttonText}>Entrar</Text>
            </Pressable>
            <Text style={styles.text}> Ainda não tem uma conta? Cadastre-se
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position:"absolute",
        justifyContent: 'center',
        alignItems: 'center', 
        top:"82%" 
    },
    button: {
        backgroundColor: '#00adef',
        width: 350,
        height: 50,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5, 
    },
    buttonText: {
        fontWeight:"600",
        color: '#F2F2F2',
        textAlign:"center", 
        fontSize: 16,
    },
    buttonPressed: {
        backgroundColor: '#D4D4D4',
    },
    text:{
        fontWeight:"500",
        marginTop:"8%",
        color:"#6B6B6B"
    }
});
