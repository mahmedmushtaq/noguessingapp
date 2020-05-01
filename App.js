import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/header";
import Startgame from "./screens/startgame";
import Gamescreen from "./screens/gamescreen";
import GameScreenOverlay from "./screens/gamescreenoverly";

export default function App() {
  const [chooseNumber,setChooseNumber] = useState('');
  const [guessRounds,setGuessRounds] = useState(0);


  const resetGame = ()=>{
      setChooseNumber('');
      setGuessRounds(0);
  }

  const chooseNumberHandler = (number)=>{
      setChooseNumber(number);
      setGuessRounds(0);
  }

  const gameOverlayHandler = rounds=>{
      setGuessRounds(rounds);

  }

  let content= <Startgame chooseNumber={chooseNumberHandler}/>;

  if(chooseNumber && guessRounds <=0){
      content = <Gamescreen userChoice={chooseNumber} onGameOver={gameOverlayHandler}/>
  }else if(guessRounds > 0){
      content = <GameScreenOverlay guessRounds={guessRounds} resetGame={resetGame}/>
  }

  return (
    <View style={styles.screen}>
      <Header title={"Guess a number"}/>
        {
            content
        }
    </View>
  );
}

const styles = StyleSheet.create({
   screen:{
     flex:1
   },
   gameScreen:{
       height:"70%"



   }
});
