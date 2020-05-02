import React from "react";
import {StyleSheet,View,Text,TouchableOpacity} from "react-native";
import colors from "../constants/colors";


const MainButton = props=>{

    return(
        <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
            <View style={styles.btn}>
                <Text style={styles.btnText}>{props.children}</Text>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
   btn:{
       backgroundColor:colors.primary,
       paddingVertical:12,
       paddingHorizontal:30,
       borderRadius:25,

   },
   btnText:{
         color:"white",
         fontFamily:"open-sans",
         fontSize:18,

   }
});


export default MainButton;