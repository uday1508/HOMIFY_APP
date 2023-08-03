import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native'
import {React,useState} from 'react'
import Background from '../components/Background'
import Paragraph from '../components/Paragraph'
import { Poll } from 'react-native'
import { theme } from '../core/theme'
//import { Poll } from 'react-native-polls';
import {RNPoll, IChoice}  from "react-native";
import { FlatList } from 'react-native'
import Button from '../components/Button'
//import { BinaryPoll } from 'react-leaf-polls/dist/components/BinaryPoll/BinaryPoll'
import Backs from '../components/Backs'


const pollData = {
  question:'PLANNINGS FOR SUMMER VACATOINS',
  options: ['SINGING CLASSES', 'SWIMMING CLASSES', 'ZUMBA DANCE', 'YOGA WORKOUTS']
};




const Scr2 = () => {
  const [selectedOption, setSelectedOption] = useState(null);


  function handleOptionPress(option) {
    setSelectedOption(option);
  }
  
  function handleSubmit() {
    if (selectedOption !== null) {
      onSubmit(selectedOption);
    }
  }

  return (
  
      <Backs>
      <View style={styles.container}>
      <Text style={styles.question}>{pollData.question}</Text>
      <View>
      {(pollData.options).map((option) => (
        
        <TouchableOpacity
          key={option}
          style={[
            styles.option,
            selectedOption === option ? styles.selectedOption : null,
          ]}
          onPress={() => handleOptionPress(option)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
        
      ))}
      </View>
     
    

      <Button
          mode="contained" 
          style={styles.submitButton}
          >
         SUBMIT
         </Button>

    </View>
   </Backs>
    
  )
}

export default Scr2

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'#FFA500'
  },
  option: {
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  selectedOption: {
    backgroundColor: '#FFA500',
  },
  optionText: {
    fontSize: 16,
    color:'#ffffff'
  },
  submitButton: {
    backgroundColor: '#FFA500',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    color:'#560CCE'
  },
  submitButtonText: {
    color: '#560CCE',
    fontSize: 18,
    textAlign: 'center',
  },
});



