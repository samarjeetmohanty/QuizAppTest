import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CustomButton = ({title, backgroundColor, width, onPress, alignItems}) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.button, {width, backgroundColor, alignItems}]}
        onPress={onPress}>
        <Text style={styles.titleText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    paddingHorizontal: 16,
    height: 50,
    backgroundColor: '#34A0A4',
    borderRadius: 12,
    marginBottom: 20,
    alignItems: 'stretch',
  },
  titleText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
  },
});
