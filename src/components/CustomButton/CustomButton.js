import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
const CustomButton = ({ title, onPress }) => {
  return (
    // <>
    <TouchableOpacity
      onPress={onPress}
      style={{ backgroundColor: '#3399ff', padding: 20 }}
    >
      <Text style={{ textAlign: 'center', color: '#fff' }}>{title}</Text>
    </TouchableOpacity>
    // </>
  );
};
export default CustomButton;
/* const styles = StyleSheet.create({

}) */
