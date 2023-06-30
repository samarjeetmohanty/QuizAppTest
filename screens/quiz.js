import { StyleSheet, Text, ToastAndroid, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import CustomButton from '../component/button'; // Custom Button
import { getQuizData } from '../component/APIServiceManager'; // Custom API

const Quiz = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [questions, setQuestions] = useState(null); // used for question
  const [qNo, setQNo] = useState(0); // used for question number
  const [option, setOption] = useState(); // multiple choice options
  const [score, setScore] = useState(0); // total marks or score
  const h2p = require('html2plaintext');

  const getAPIData = async () => {
    setIsLoading(true);
    try {
      const response = await getQuizData();
      console.log('Response from api :::', response);
      setQuestions(response);
      setOption(genrateOptions(response[qNo]));
      setIsLoading(false);
    } catch (error) {
      console.log('API error ::', error);
    }
  };

  useEffect(() => {
    getAPIData();
  }, []);

  // ALL FUNCTION
  const genrateOptions = optionData => {
    const option = [...optionData.incorrect_answers];
    option.push(optionData.correct_answer);
    console.log('Multiple Choice option are :::', option);

    shuffleArray(option);
    return option;
  };

  // Shuffling of options
  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const handleSkipButton = () => {
    if (qNo !== 9) {
      setQNo(qNo + 1);
      setOption(genrateOptions(questions[qNo + 1]));
    } else {
      console.log('Reached end point');
    }
  };
  const handlePreviousButton = () => {
    if (qNo > 0) {
      setQNo(qNo - 1);
    } else {
      setQNo(0);
      ToastAndroid.show('No Previous !', ToastAndroiad.SHORT);
    }
  };
  const handleResultButton = () => {
    console.log('Handle Button Result');
    navigation.navigate('Result', { score: score });
  };

  const handleSelectedOption = option => {
    console.log(option);
    console.log(option == questions[qNo].correct_answer);
    if (option === questions[qNo].correct_answer) {
      console.log('Correct Answer');
      setScore(score + 1);
    }
    if (qNo !== 9) {
      setQNo(qNo + 1);
      setOption(genrateOptions(questions[qNo + 1]));
    } else {
      navigation.navigate('Result', { score: score });
    }
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loading}>
          <Text style={{ fontSize: 35, fontWeight: '600' }}>Loading . . .</Text>
        </View>
      ) : (
        <View style={styles.innerContainer}>
          <View>
            <Text style={styles.questionText}>
              {qNo + 1 + ') ' + h2p(questions[qNo].question)}
            </Text>
          </View>
          <View style={styles.option}>
            <CustomButton
              // title={h2p(option[0])}
              title={'A) ' + h2p(option[0])}
              backgroundColor="#34A0A4"
              width="100%"
              onPress={() => handleSelectedOption(option[0])}
            />
            <CustomButton
              // title={h2p(option[1])}
              title={'B) ' + h2p(option[1])}
              backgroundColor="#34A0A4"
              width="100%"
              onPress={() => handleSelectedOption(option[1])}
            />
            <CustomButton
              // title={h2p(option[2])}
              title={'C) ' + h2p(option[2])}
              backgroundColor="#34A0A4"
              width="100%"
              onPress={() => handleSelectedOption(option[2])}
            />
            <CustomButton
              // title={h2p(option[3])}
              title={'D) ' + h2p(option[3])}
              backgroundColor="#34A0A4"
              width="100%"
              onPress={() => handleSelectedOption(option[3])}
            />
          </View>

          <View style={styles.buttomButton}>
            <CustomButton
              title={'PREV'}
              backgroundColor="#1A759F"
              onPress={handlePreviousButton}
            />
            {qNo !== 9 ? (
              <CustomButton
                title={'SKIP'}
                backgroundColor="#1A759F"
                onPress={handleSkipButton}
              />
            ) : (
              <CustomButton
                title={'SHOW RESULT'}
                backgroundColor="#1A759F"
                onPress={handleResultButton}
              />
            )}
          </View>
        </View>
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: { height: '100%' },
  questionText: {
    fontSize: 22,
    fontWeight: '500',
    color: 'black',
  },
  option: {
    paddingVertical: 30,
    flex: 1,
  },
  buttomButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
