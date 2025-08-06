import { useState } from "react";
import { Text, TextInput, View, StyleSheet, Button,KeyboardAvoidingView, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00ff959f"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 20,
    color: "black"
  },
text:{
  fontSize:16,
  color:"#333"
},
  input: {
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
  }
});

export default function Index() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState<string | null>(null);

  function calcularIMC() {
    const pesoN = parseFloat(peso);
    const alturaN = parseFloat(altura);

    const imc = pesoN / (alturaN * alturaN);
    let classificacao = "";

    if (imc < 18.5) {
      classificacao = "Abaixo do peso";
    } else if (imc < 24.9) {
      classificacao = "Peso normal";
    } else if (imc < 29.9) {
    classificacao = "Sobrepeso";
  } else if (imc < 34.9) {
    classificacao = "Obesidade grau I";
  } else if (imc < 39.9) {
    classificacao = "Obesidade grau II";
  } else {
    classificacao = "Obesidade grau III";
  }
  setResultado(`Seu IMC é ${imc.toFixed(2)} e você está classificado como ${classificacao}.`);
  }

 return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Text style={styles.title}>Calcular imc</Text>
      <TextInput
        style={styles.input}
        placeholder="Peso"
        value={peso}
        onChangeText={setPeso}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura"
        value={altura}
        onChangeText={setAltura}
      />

      <Button title="Calcular" onPress={calcularIMC} />
      {resultado && (
        <Text style={styles.text}>{resultado}</Text>
      )}
    </KeyboardAvoidingView>
  );
}