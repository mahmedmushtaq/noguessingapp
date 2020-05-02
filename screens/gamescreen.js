import React,{useState,useRef,useEffect} from "react";
import {View,Text,StyleSheet,ScrollView,Alert} from "react-native";
import Card from "../components/Card";
import MainButton from "../components/MainButton";
import {Ionicons} from "@expo/vector-icons";


const generateRandomNo = (min,max,exclude)=>{
    let no = Math.floor(Math.random() * (max-min)+min);
    return no;

}

const Gamescreen = props=>{
  const [initialGuess,setInitialGuess] = useState(generateRandomNo(1,100,props.userChoice))
  const [currentGuess,setCurrentGuess] = useState(initialGuess);
  const [pastGuess,setPastGuesses] = useState([]);
  const [noOfRounds,setNoOfRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const {userChoice,onGameOver,setGuessList} = props;


    useEffect(() => {

       // onGameOver(noOfRounds);
        setPastGuesses([...pastGuess,currentGuess]);
        console.log("past guess is ",pastGuess);
       if(currentGuess == props.userChoice){

                onGameOver(noOfRounds);
                setGuessList(pastGuess)
       }

    }, [currentGuess,userChoice]);


    const pastGuessesList =( value,index)=>(
        <Text style={styles.listItem} key={index}>
           #{index} {value}
        </Text>
    )
    

  const generateNew = direction=>{

      if (
          (direction === 'lower' && currentGuess < props.userChoice) ||
          (direction === 'greater' && currentGuess > props.userChoice)
      ) {
          Alert.alert("Don't lie!", 'You know that this is wrong...', [
              { text: 'Sorry!', style: 'cancel' }
          ]);
          return;
      }

      let nextNumber = 0;

      if(currentHigh.current !== currentLow.current) {
          if (direction === 'lower') {
              currentHigh.current = currentGuess;
          } else {
              currentLow.current = currentGuess;
          }

            nextNumber = generateRandomNo(
              currentLow.current,
              currentHigh.current,
              currentGuess
          );

      }else{
           nextNumber = generateRandomNo(
             1,100,currentGuess );


      }

      setCurrentGuess(nextNumber);




      setNoOfRounds(currentNo=>currentNo+1);

  }


  return(
      <View style={styles.screen}>
          <Text>Opponent's choice</Text>
          <Text style={{marginBottom:10}}>{currentGuess}</Text>

          <Card height={"10%"} style={styles.btnContainer}>
              <MainButton  onPress={generateNew.bind(this,"lower")}>
                  <Ionicons name={"md-remove"} size={24} color={"white"}/>
              </MainButton>
              <MainButton  onPress={generateNew.bind(this,"higher")}>
                  <Ionicons name={"md-add"} size={24} color={"white"}/>
              </MainButton>
          </Card>

         <View style={styles.list} >
         <ScrollView>
              {
                  pastGuess.map((guess,i)=>{
                     return pastGuessesList(guess,pastGuess.length-i)
                  })
              }
          </ScrollView>
      </View>
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


    },
    list:{
      width:'100%',
      flex:1,


    },
    listItem:{
         borderColor:"#ccc",
         borderWidth:1,
         padding:15,
        borderRadius:20,


        marginVertical:10,
        backgroundColor:"white",
        flexDirection: "row",
        alignSelf:"center",
        justifyContent: "space-between",
        width:'60%'
    }
});

export default Gamescreen;