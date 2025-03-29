import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import { Button } from 'react-native-web';

export default function App() {
    return (
        <View style={styles.container}>
            <Image
               source={require("../src/assets/logo.png")}


                style={styles.logo}
            />
            <Text style={styles.title}>20 caracteres</Text>

            <View style={styles.area}>
                <Slider
                    style={{ height: 50 }}
                    minimumValue={6}
                    maximumValue={20}
                    maximumTrackTintColor="#ff000"
                    minimumTrackTintColor="000"
                    thumbTintColor='"#392de9'
                />
            </View>

            <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}> Gerar senha</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        marginBottom: 60
    },
    area: {
        marginTop: 14,
        marginBottom: 14,
        width: "80%",
        backgroundColor: "#FFF",
        borderRadius: 8,
        padding: 6,
    },
    button:{
        backgroundColor: "#392de9",
        width: "80%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        marginBottom: 18,
    },
    buttonText:{
        color: "#FFF",
        fontSize: 20,
    },
    tiitle: {
        fontStyle: 30,
        fontWeight: 'bold'
    }


});
