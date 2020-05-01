import React,{useState,useRef,useEffect} from "react";
import {View,Text,StyleSheet,Button,Alert} from "react-native";
import Card from "../components/Card";

const generateRandomNo = (min,max,exclude)=>{
    let no = Math.floor(Math.random() * (max-min)+min);
    return no;

}

const Gamescreen = props=>{
  const [currentGuess,setCurrentGuess] = useState(generateRandomNo(1,100,props.userChoice));
  const [noOfRounds,setNoOfRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const {userChoice,onGameOver} = props;

    useEffect(() => {

       // onGameOver(noOfRounds);
       if(currentGuess == props.userChoice){

                onGameOver(noOfRounds);
            }

    }, [currentGuess,userChoice]);
    

  const generateNew = direction=>{
      console.log("check guess no is "+currentGuess+" user choice is "+userChoice);
      if (
          (direction === 'lower' && currentGuess < props.userChoice) ||
          (direction === 'greater' && currentGuess > props.userChoice)
      ) {
          Alert.alert("Don't lie!", 'You know that this is wrong...', [
              { text: 'Sorry!', style: 'cancel' }
          ]);
          return;
      }

      if(currentHigh.current !== currentLow.current) {
          if (direction === 'lower') {
              currentHigh.current = currentGuess;
          } else {
              currentLow.current = currentGuess;
          }

          const nextNumber = generateRandomNo(
              currentLow.current,
              currentHigh.current,
              currentGuess
          );
          setCurrentGuess(nextNumber);
      }else{
          const nextNumber = generateRandomNo(
             1,100,currentGuess );
          setCurrentGuess(nextNumber);

      }

      setNoOfRounds(currentNo=>currentNo+1);

  }


  return(
      <View style={styles.screen}>
          <Text>Opponent's choice</Text>
          <Text style={{marginBottom:10}}>{currentGuess}</Text>

          <Card height={"10%"} style={styles.btnContainer}>
              <Button title={"LOWER"} onPress={generateNew.bind(this,"lower")}/>
              <Button title={"HIGHER"} onPress={generateNew.bind(this,"higher")}/>
          </Card>
      </View>
  )
}

const styles = StyleSheet.create({
       screen:{
           flex:1,
           padding:10,
           alignItems:"center"
       },
    btnContainer: {
           flexDirection:"row",
          justifyContent:"space-between",
        width:300,
        maxWidth:"80%",


    }
});

export default Gamescreen;