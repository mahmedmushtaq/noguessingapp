import React from "react";
import {StyleSheet,View,Text,Button,Image} from "react-native";
import defaultStylesheet from "../constants/defaultStylesheet";
import colors from "../constants/colors";
import MainButton from "../components/MainButton";


const GameScreenOverlay = props=>{
    return(
        <View style={styles.screen}>
            <Text style={[defaultStylesheet.titleText,styles.title]}>Game is over!</Text>
            <View style={styles.imageContainer}>
                <Image style={styles.image}
                       source={{uri:"https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}}
                    //   source={require('../assets/success.png')}
                />
            </View>
            <Text style={[defaultStylesheet.bodyText,styles.text]}>
                Total rounds is <Text style={styles.highlight}>{props.guessRounds}</Text>
            </Text>
            <MainButton onPress={props.resetGame} >Start game again</MainButton>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        fontSize:20,
    },
    imageContainer:{
        height:300,
        width:300,
        borderRadius:150,
        marginVertical:10,
        overflow:"hidden",
        borderWidth:3,
    },
    image:{
        height:"100%",
        width:"100%",

    },
    text:{
        marginVertical: 10,

    },
    highlight:{
        color:colors.primary,
    }
});

export default GameScreenOverlay;