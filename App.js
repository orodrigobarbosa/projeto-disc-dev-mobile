import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';


let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
export default function App() {
  const [size, setSize] = useState(10);  // Variável de estado para o valor do slider

//gerador do password
  function generatePassword(){
    let password = "";
    for(let i = 0, n = charset.length; i <size; i++){
      password += charset.charAt(Math.floor(Math.random() * n))
    }
    console.log(password)
  }




  return (
    <View style={styles.container}>
      <Image
        source={require("./src/assets/logo.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>{size} CARACTERES</Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#ff0000"
          thumbTintColor="#392de9"
          value={size}  // Define o valor inicial do slider
          onValueChange={(value) => setSize(parseInt(value, 10))}
          // Atualiza o estado conforme o valor do slider
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>GERAR SENHA</Text>
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
    marginBottom: 60,
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 6,
  },
  button: {
    backgroundColor: "#392de9",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 18,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  }
});
