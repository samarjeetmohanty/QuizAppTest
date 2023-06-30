import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Title from '../component/title';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title titleText={'Quiz App'} />
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: 'https://cdni.iconscout.com/illustration/premium/thumb/giving-different-feedback-and-review-in-websites-2112230-1779230.png',
          }}
          style={styles.imagebanner}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Quiz')}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 30,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  imagebanner: {
    height: 300,
    width: 300,
  },
  button: {
    width: '100%',
    backgroundColor: '#1A759F',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '400',
    color: 'white',
  },
});
