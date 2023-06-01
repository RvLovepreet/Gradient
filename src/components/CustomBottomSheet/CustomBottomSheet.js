import React, { Children } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
const CustomBottomSheet = ({ refRBSheet, onPress, children }) => {
  return (
    <View style={{ background: '#111' }}>
      <RBSheet
        openDuration={500}
        closeDuration={500}
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          container: {
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#111',
          },
        }}
      >
        {children}
      </RBSheet>
    </View>
  );
};
export default CustomBottomSheet;
