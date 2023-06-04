import React, {Component, Fragment} from "react";
import { View, Text, StyleSheet } from "react-native";
import Simples from "./componentes/simples";
import Frag from "./componentes/Frag";
import ParImpar from "./componentes/ParImpar";
import Familia from "./componentes/Relacao/Familia";
import Padrao from "./estilo/Padrao";
import Membro from "./componentes/Relacao/Membro";
import UsuarioLogado from "./componentes/UsuarioLogado";
import Contador from "./componentes/Contador";
import DigiteSeuNome from "./componentes/DigiteSeuNome";
import DimensoesFixas from "./componentes/DimensoesFixas";
import Botao from "./componentes/Botao";
import Button from "./componentes/Calculadora/Button";
import Display from "./componentes/Calculadora/Display";
export default class App extends Component {
  state = {
    displayValue: '0',
  }

  clearDisplay = () => {
    this.setState({displayValue: '0'})
  }

  setDigit = digito => {
    this.setState({displayValue: digito})
  }

  setOperation = op => {

  }
  render() {
    return(
    
      <View style = {estilos.calculadora}>
        <Display value = {this.state.displayValue} />
        <View style = {estilos.botao}>
          <Button label = 'AC' triple onClick = {() => this.clearDisplay} />
          <Button label = '/'op onClick = {() => this.setOperation('/')}/>
          <Button label = '7'/>
          <Button label = '8' />
          <Button label = '9' />
          <Button label = '*' />
          <Button label = '4' />
          <Button label = '5' />
          <Button label = '6' />
          <Button label = '-' />
          <Button label = '1' />
          <Button label = '2' />
          <Button label = '3' />
          <Button label = '+' />
          <Button label = '0' />
          <Button label = '.' />
          <Button label = '=' />
        </View>
      
     {/* <Botao />*/}      
      
  {/* <Contador valorInicial = {50} />*/}
      
    {/*<DigiteSeuNome />*/}


    {/*<DimensoesFixas />*/}
      
    {/*<Mega qtDeNumeros = {7} /> */} 
      
      
      {/*  <UsuarioLogado usuario={ {nome: 'teste', email: 'teste@teste.com'}} />
        <UsuarioLogado usuario ={ {nome: 'teste 2'}}/>
        <UsuarioLogado usuario ={ {email: 'teste@teste.com'}} />
        <UsuarioLogado usuario= {null}/>
    <UsuarioLogado usuario = { {}}/>*/}

    { /* <Simples texto = 'Ruan' />*/}
       {/*<Frag titulo = "Cadastro" 
          subTitulo = " Tela de cadastro de produto" />*/ }
     
    {/* <ParImpar numero = {10}  />} */}
     
     {/*<Familia>
       <Membro nome = "Ana" sobreNome = "Silva"/>
       <Membro nome = "José" sobreNome = "Silva" />

        </Familia>*/}

    {/* <Familia>

      <Membro nome = "Bianca" sobreNome = "Cunha"/>
      <Membro nome = "Gustavo" sobreNome = "Cunha"/>
      </Familia>*/}
      
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
    fontSize: 40,
  },

  calculadora: {

    flex: 1,

  },

  botao: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});