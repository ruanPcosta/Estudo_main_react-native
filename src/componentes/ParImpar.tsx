import React from "react";
import { Text } from "react-native";
import Padrao from "../estilo/Padrao";

function getParImpar(num: any){

    const resultado = num % 2 == 0 ? 'PAR': 'IMPAR'
    
    //if (num % 2 == 0){
     //   return <Text style = {Padrao.ex} >PAR</Text>
    //}else{
    return <Text style = {Padrao.ex} >{resultado}</Text>
   // }
}


export default (props: any) => (

    <>
   {
    
    getParImpar(props.numero)
    }

    </>
)