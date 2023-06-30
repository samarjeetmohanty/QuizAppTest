import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Title from '../component/title';
import CustomButton from '../component/button';

const Result = ({route, navigation}) => {
  const backToHome = () => {
    navigation.navigate('Home');
  };
  const {score} = route.params;
  // const resultImage =
  //   score > 5 ? require('../image/smile.png') : require('../image/sad.png');

  return (
    <View style={styles.container}>
      <Title titleText={'RESULT'} />
      {score < 5 ? (
        <View style={styles.bannerContainer}>
          <Text style={[styles.myScore, styles.redMyScore]}>{score}/10</Text>
          <Text style={[styles.myScore, styles.redMyScore]}>
            Better Luck Next Time !!
          </Text>
          <Image
            source={require('../images/sad.png')}
            style={styles.banner}
            resizeMode="contain"
          />
        </View>
      ) : (
        <View style={styles.bannerContainer}>
          <Text style={[styles.myScore, styles.greenMyScore]}>{score}/10</Text>
          <Text style={[styles.myScore, styles.greenMyScore]}>
            Well Done Keep it up !!
          </Text>
          <Image
            source={require('../images/smile.png')}
            style={styles.banner}
            resizeMode="contain"
          />
        </View>
      )}

      <CustomButton
        title={'Back To Home'}
        backgroundColor="#1A759F"
        width={'100%'}
        alignItems={'center'}
        onPress={backToHome}
      />
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop : 40,
    height: '100%',
  },
  bannerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    height: 300,
    width: 300,
    marginTop : 20,
  },
  myScore: {
    fontSize: 22,
    fontWeight: '300',
    marginBottom : 15
  },
  redMyScore: {
    color: 'red',
  },
  greenMyScore: {
    color: 'green',
  },
});
