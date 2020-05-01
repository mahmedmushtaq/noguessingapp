import React from "react";
import {StyleSheet,View,Text,Button} from "react-native";


const GameScreenOverlay = props=>{
    return(
        <View style={styles.screen}>
            <Text>Game is over!</Text>
            <Text>Total rounds is {props.guessRounds}</Text>
            <Button onPress={props.resetGame} title={"Start game again"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
});

export default GameScreenOverlay;