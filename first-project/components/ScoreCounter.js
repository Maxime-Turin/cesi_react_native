import { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import { ScoreDisplay } from "./ScoreDisplay";

export function ScoreCounter(){
  const [score, setScore] = useState(0);
  function increaseScore(){
    setScore(score+1)
    console.log(score);
  }

  return <>
    <TouchableOpacity onPress={increaseScore}>
      <Text style={{fontSize: 40}}>Augmenter</Text>
    </TouchableOpacity>
  <ScoreDisplay score={score}/>
  </>
}