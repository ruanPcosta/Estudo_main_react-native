{/*import React, { Component } from "react";
import { Text, TextInput } from "react-native";
import Padrao from "../estilo/Padrao";

export default class Mega extends Component {

state = {

    qtDeNumeros: this.props.qtDeNumeros,
    numeros: []
}

    constructor(props) {

super(props)



    this.alteraQtd = this.alteraQtd.bind(this)
    }
alteraQtd = (qtde) => {
    this.setState({qtDeNumeros: qtde})
}


gerarNumeroNaoContido = nums => {

    const novo = parseInt(Math.random() * 60 ) + 1
    return nums.includes(novo) ? this.gerarNumeroNaoContido(nums): novo
}

gerarNumeros = () => {

const numeros = Array(this.state.qtDeNumeros)
.fill()
.reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
.sort ((a,b) => a - b)
}    



    render () {

return (
<>
    <Text style = {Padrao.txtG}>
        Gerador de Mega Sena {this.props.qtDeNumeros}
    </Text>
   <TextInput 
   placeholder="Qtd de Numeros"
   value={this.state.qtDeNumeros}
   onChangeText={this.alteraQtd}
   keyboardType="number"
   style= {{borderBottomWidth: 1}}
   
   />
</>
)

}



}*/}