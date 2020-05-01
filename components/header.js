import React from "react";
import {View,Text,StyleSheet} from "react-native";
import color from "../constants/colors";

const Header = (props)=>{
    return(
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
          width:'100%',
          height:90,
          backgroundColor:color.primary,
          alignItems:"center",
          justifyContent:"center",
          paddingTop:20,
    },
    headerTitle:{
        color:"white",
        fontSize:18,


    }
});

export default Header;

