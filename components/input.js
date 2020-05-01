import React from "react";
import {StyleSheet,TextInput,View} from "react-native";


const Input = props=>{

    return(
        <View>
        <TextInput {...props} style={{...styles.input,...props.style}}/>
        </View>
    )
}

const styles =  StyleSheet.create({
    input:{

        borderBottomColor:'grey',
        borderBottomWidth:1,
        marginVertical:10,

    }
})


export default Input;