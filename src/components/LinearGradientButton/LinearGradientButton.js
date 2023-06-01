import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const LinearGradientButton = () => {
  return (
    <TouchableOpacity onPress={() => alert('hello')}>
      <LinearGradient
        /*  colors={['#fc4503', '#bafc03']} */
        colors={['#ed09ed', '#ed0946']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.linearGradient}
      >
        <Text style={{ color: '#fff' }}>Hello</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
export default LinearGradientButton;
var styles = StyleSheet.create({
  linearGradient: {
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
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
