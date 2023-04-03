import React from "react";
import { Text } from "react-native";
import Padrao from "../estilo/Padrao";


export default (props: any) => (

    <>
   {
    props.numero % 2 == 0
    ? <Text>PAR</Text>
    : <Text>IMPAR</Text>
    
    }

    </>
)