import React,{useState} from "react";
import {View,Text,Alert,Button,StyleSheet,TouchableWithoutFeedback,Keyboard} from "react-native";
import Card from "../components/Card";
import color from "../constants/colors";
import Input from "../components/input";
import NumberContainer from "../components/numbercontainer";

const Startgame = props=>{
    const [enteredValue,setEnteredValue] = useState('');
    const [confirmed,setConfirmed] = useState(false);
    const [chooseNumber,setChooseNumber] = useState(-2);

    const inputHandler = (inputText)=>{
        setEnteredValue(inputText.replace(/[^0-9]/g,''));
    }
    const resetValue = ()=>{
        setEnteredValue('');
        setChooseNumber('')
        setConfirmed(false);
    }
    const confirmedValue = ()=>{
        const chooseNumberLocal = parseInt(enteredValue);
        if(isNaN(chooseNumberLocal) || chooseNumberLocal <=0 ||  chooseNumberLocal > 99){
            Alert.alert("Invalid Number"
                ,"Number has to be a number between 1 and 99"
                , [{text:"Okay",style:"destructive",onPress:resetValue}]
            )
            return;
        }

        setConfirmed(true);
        setChooseNumber(enteredValue);
        setEnteredValue("");

        Keyboard.dismiss();


    }

    let message;
    if(confirmed){
         message = (
            <Card style={styles.numberCard}>
              <Text>Your number is</Text>
               <NumberContainer number={chooseNumber} chooseNumber={props.chooseNumber}/>
            </Card>
        );
    }

    return(
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a new game!</Text>
                <Card style={styles.inputContainer}>

                    <Text >Select A number </Text>

                    <Input onChangeText={inputHandler} value={enteredValue} style={styles.input} keyboardType={"numeric"} blurOnSubmit/>

                    <View style={styles.btnContainer}>
                      <Button onPress={resetValue} style={styles.btn} color={color.primary} title={"Reset"}/>
                      <Button onPress={confirmedValue} style={styles.btn} color={color.accent} title={"Confirm"}/>

                    </View>

                </Card>

                {
                    message
                }

            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:"center",
    },
    title:{
        fontSize:20,
        marginVertical:10,
        fontFamily:"open-sans-bold"
    },

    // shadow property only works in ios not in android
    // elevation works in android not in ios
    inputContainer:{
        alignItems: "center",
        width: 300,
        maxWidth: '80%',
        height:500,
     },
    btnContainer:{
        flexDirection:"row",
        width:"100%",
        justifyContent:"space-between"
    },
    btn:{
        width:100,
    },
    input:{
      width:100,
      borderBottomColor: '#000000',

    },
    numberCard:{
        marginTop:15,
    }



});


export default Startgame;