import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useIsFocused } from '@react-navigation/native';
import useStorage from '../../hooks/useStorage';

import { PasswordItem } from './components/passworditem';

export function Passwords() {
    const [listPasswods, setListPasswords] = useState([]);
    const focused = useIsFocused();
    const { getItem, removeItem } = useStorage();

    // Carregar as senhas
    useEffect(() => {
        async function loadPasswords() {
            const passwords = await getItem("@pass");
            console.log("Senhas carregadas:", passwords); // Verifique os dados carregados
            setListPasswords(passwords);
        }

        loadPasswords();
    }, [focused]);

    // Remover senha
    async function handleDeletePassword(item) {
        const passwords = await removeItem("@pass", item);
        console.log("Senhas após exclusão:", passwords); // Verifique se as senhas restantes estão corretas
        setListPasswords(passwords);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas Senhas</Text>
            </View>
            <View style={styles.content}>
                <FlatList
                    style={{ flex: 1, paddingTop: 14 }}
                    data={listPasswods}
                    keyExtractor={(item) => String(item)}
                    renderItem={({ item }) => (
                        <PasswordItem data={item} removePassword={() => handleDeletePassword(item)} />
                    )}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#392de9",
        paddingTop: 58,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingRight: 14,
    },
    title: {
        fontSize: 18,
        color: "#FFF",
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
        paddingLeft: 14,
        paddingRight: 14,
    }
});
