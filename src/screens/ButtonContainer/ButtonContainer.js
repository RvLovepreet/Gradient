import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  LinearGradientButton,
  ButtonWithGradientBorder,
  LinearGradientComponent,
} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
const ButtonContainer = () => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradientComponent />
    </View>
  );
};
export default ButtonContainer;
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
