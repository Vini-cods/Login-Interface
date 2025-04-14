import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import { StatusBar } from "expo-status-bar";


export default function Acesso() {
  const navigation = useNavigation()

  const [email, setEmail] = useState(''); //Variavel & Função
  const [senha, setSenha] = useState('');

  function acessar() {
    if (email == "victorrocha0223@gmail.com" && senha == "2512") {
      navigation.navigate("sucesso")
    } else ("Dados Incorretos")
  }
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>


      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Animatable.View
            animation="fadeInLeft"
            delay={500}
            style={styles.containerHeader}
          >
            <Text style={styles.message}>Bem-vindo(a)</Text>
          </Animatable.View>

          <Animatable.View animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.title}>E-mail</Text>
            <TextInput placeholder="Digite um email..." style={styles.input} onChangeText={(value) => setEmail(value)} />
            <TextInput placeholder="Sua senha" style={styles.input} onChangeText={(value) => setSenha(value)} />

            <TouchableOpacity onPress={acessar} style={styles.button} >
              <Text style={styles.buttonText} >Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("saida")}
              style={styles.voltar}>
              <Text style={styles.voltartext}> clique aqui pra voltar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("cadastro")} style={styles.buttonRegister}>
              <Text style={styles.registerText}>
                Não possui uma conta? Cadastre-se
              </Text>
            </TouchableOpacity>
          </Animatable.View>
          <StatusBar style="light"></StatusBar>
        </View>

      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#880000",
  },
  containerHeader: {
    marginTop: "14%",
    marginBottom: "8%",
    paddingStart: "5%",
  },
  message: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF",
  },
  containerForm: {
    backgroundColor: "#FFF",
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  title: {
    fontSize: 20,
    marginTop: 28,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#880000",
    width: "100%",
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: "center",
  },
  registerText: {
    color: "#a1a1a1",
  },

  titlebutton: {
    backgroundColor: "#880000",
    color: "#fff",
    fontSize: 18,
  },

  botaotext: {
    width: "100%",
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },

  voltar: {
    backgroundColor: "#ffff",
    width: "100%",
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 2,
    // borderBlockColor: '#880000',
  },

  voltartext: {
    color: "#880000",
    fontSize: 18,
    fontWeight: "bold",
  },
});
