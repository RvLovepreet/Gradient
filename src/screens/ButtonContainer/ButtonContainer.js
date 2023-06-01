import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { LinearGradientComponent } from '../../components';

const ButtonContainer = () => {
  const color = [
    ['#d08fee', '#f18bac'],
    ['#fcefb8', '#fadfaf', '#dddbc0', '#aef4dc'],
    ['#f4b1a1', '#f185a2', '#f2295f'],
    ['#f1b5ff', '#f4b6f3', '#d5a4ff', '#bac8ff'],
    ['#8feec8', '#95f1c8', '#70dad5', '#84dff2'],
  ];
  return (
    <View>
      <FlatList
        data={color}
        renderItem={({ item, index }) => (
          <View style={styles.containerStyle}>
            <LinearGradientComponent color={color[index]} />
            <LinearGradientComponent circle={true} color={color[index]} />
          </View>
        )}
      />
    </View>
  );
};
export default ButtonContainer;
var styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    padding: 15,
  },
});
