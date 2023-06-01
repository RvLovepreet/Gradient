import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradientButton, ButtonWithGradientBorder } from '..';
import LinearGradient from 'react-native-linear-gradient';
const LinearGradientComponent = () => {
  return (
    <View style={styles.buttonStyle} onPress={() => alert('hello')}>
      <LinearGradient
        colors={['#8a3bd9', '#b179e8']}
        /*    colors={['#ed09ed', '#ed0946']} */
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 1 }}
        style={styles.linearGradient}
      />
    </View>
  );
};
export default LinearGradientComponent;
var styles = StyleSheet.create({
  linearGradient: {
    alignitems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    width: 100,
    height: 100,
  },
  buttonStyle: {
    flex: 1,
    margin: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
