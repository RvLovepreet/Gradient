import React, { useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {
  CustomBottomSheet,
  CustomButton,
  CustomContent,
} from '../../components';
const HomeScreen = () => {
  const refRBSheet = useRef();
  const refRBSheet1 = useRef();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
      }}
    >
      <CustomButton
        title="Bottom Sheet"
        onPress={() => refRBSheet.current.open()}
      />

      <CustomBottomSheet
        /*  onPress={() => refRBSheet.current.close()} */
        refRBSheet={refRBSheet}
      >
        <CustomContent onPress={() => refRBSheet.current.close()} />
      </CustomBottomSheet>
    </View>
  );
};
export default HomeScreen;
