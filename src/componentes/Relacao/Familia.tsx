import React from "react";
import { Text } from "react-native/types";
import Padrao from "../../estilo/Padrao";





export default (props: any) => {

return (
<>

      <Text style = {Padrao.txtG}>Membros da familia </Text>
       {props.children}
</>

         )
     
}
