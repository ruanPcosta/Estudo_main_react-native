import React, {Component, Fragment} from "react";
import { View, Text, StyleSheet } from "react-native";
import Simples from "./componentes/simples";
import Frag from "./componentes/Frag";
import ParImpar from "./componentes/ParImpar";

export default class App extends Component {
  render() {
    return(
      <View style = {estilos.container}> 
     
       <Frag titulo = "Cadastro" 
          subTitulo = "Tela de cadastro de produto" /> 
     
     <ParImpar numero = {11} />
     
      
      </View>
    );

  }
}
const estilos = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },

  fonte: {
    fontSize: 50,
  },
});