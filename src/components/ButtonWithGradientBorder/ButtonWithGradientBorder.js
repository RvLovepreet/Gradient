import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const ButtonWithGradientBorder = () => {
  return (
    <LinearGradient
      /*  colors={['#fc4503', '#bafc03']} */
      colors={['#ed09ed', '#ed0946']}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={styles.linearGradient}
    >
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => alert('hello')}
      >
        <Text style={{ color: '#111' }}>Hello</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};
export default ButtonWithGradientBorder;
var styles = StyleSheet.create({
  linearGradient: {
    alignitems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
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
