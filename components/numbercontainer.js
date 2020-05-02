import React from "react";
import {Text,View,StyleSheet,Button} from "react-native";
import color from "../constants/colors";
import MainButton from "./MainButton";

const NumberContainer = (props)=>{
    return(
       <View>
           <Text style={styles.numberContainer}>
               {props.number}
           </Text>
           <MainButton  onPress={props.chooseNumber.bind(this,props.number)} >Start a game</MainButton>
       </View>
    )
}

const styles = StyleSheet.create({
    numberContainer:{
        padding:15,
        borderWidth:2,
        borderColor:color.primary,
        fontSize:20,
        borderRadius:50,
        textAlign:"center",
        marginVertical:5

    }
});

export default NumberContainer;
