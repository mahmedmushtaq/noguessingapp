import React from "react";
import {View ,StyleSheet} from "react-native";

const Card = props=>{
    return(
        <View style={{height: props.height || "40%"}}><View style={{...styles.card,...props.style}}>{props.children}</View></View>
    )
};

const styles = StyleSheet.create({

    card:{
        shadowColor:"black",
        shadowOffset:{width:0,height:0},
        shadowRadius:0,
        shadowOpacity:0.26,
        elevation:8,
        backgroundColor:"white",
        flex:1,

        padding:10,
        borderRadius:10,
    }
});

export default Card;