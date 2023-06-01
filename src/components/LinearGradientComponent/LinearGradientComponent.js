import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const LinearGradientComponent = ({ circle, color }) => {
  return (
    <>
      <LinearGradient
        colors={color}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.linearGradient(circle)}
      />
    </>
  );
};
export default LinearGradientComponent;
var styles = StyleSheet.create({
  linearGradient: circle => ({
    alignitems: 'center',
    justifyContent: 'center',
    borderRadius: circle ? 50 : 35,
    width: 100,
    height: 100,
  }),
});
