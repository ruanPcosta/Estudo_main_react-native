import React, {Component, Fragment} from "react";
import { View, Text, StyleSheet } from "react-native";
import Simples from "./componentes/simples";
import Frag from "./componentes/Frag";
import ParImpar from "./componentes/ParImpar";
import Familia from "./componentes/Relacao/Familia";
import Padrao from "./estilo/Padrao";
import Membro from "./componentes/Relacao/Membro";

export default class App extends Component {
  render() {
    return(
      <View style = {estilos.container}> 
    { /* <Simples texto = 'Ruan' />*/}
       {/*<Frag titulo = "Cadastro" 
          subTitulo = "Tela de cadastro de produto" />*/ }
     
    {/* <ParImpar numero = {10}  />} */}
     
     <Familia>
       <Membro nome = "Ana" sobreNome = "Silva"/>
       <Membro nome = "José" sobreNome = "Silva" />

     </Familia>
      
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