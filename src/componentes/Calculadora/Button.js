import React from "react";
import { StyleSheet, Text, Dimensions, TouchableHighlight } from "react-native";

const estilo = StyleSheet.create ({
button: {
    fontSize: 40,
    height: Dimensions.get('window').height / 7,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#444',
    textAlign:'center',
    borderWidth: 1,
    borderColor: '#fff',
    color: '#fff'
},

buttonOp: {
    color: '#fff',
    backgroundColor: '#ADD8EC',
},

buttonDouble: {
    width: (Dimensions.get('window').width/4) * 2,
},

buttonTriple: {

    width: (Dimensions.get('window').width/4) * 3,
},



})

export default props => {

    const styleButton = [estilo.button]

    if (props.double) styleButton.push(estilo.buttonDouble)
    if (props.triple) styleButton.push(estilo.buttonTriple)
    if (props.op) styleButton.push(estilo.buttonOp)

    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={styleButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}