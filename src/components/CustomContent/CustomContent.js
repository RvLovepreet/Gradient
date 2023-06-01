import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import CustomButton from '../CustomButton/CustomButton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CustomContent = ({ onPress }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <TouchableOpacity onPress={onPress}>
        <Text style={{ fontSize: 43 }}> My Bottom Sheet1 </Text>
      </TouchableOpacity>
      <Text style={{ fontSize: hp('2%') }}>
        LogRocket: Session Replay, Product Analytics, & Error Tracking GET
        STARTED FREE → Taofiq Aiyelabegan Taofiq is a technical writer and
        software engineer working on building mobile and web applications.
        Additionally, he likes to contribute to open source projects and
        exploring new topics. LogRocket: Session Replay, Product Analytics, &
        Error Tracking GET STARTED FREE → Taofiq Aiyelabegan Taofiq is a
        technical writer and software engineer working on building mobile and
        web applications. Additionally, he likes to contribute to open source
        projects and exploring new topics. LogRocket: Session Replay, Product
        Analytics, & Error Tracking GET STARTED FREE → Taofiq Aiyelabegan Taofiq
        is a technical writer and software engineer working on building mobile
        and web applications. Additionally, he likes to contribute to open
        source projects and exploring new topics. LogRocket: Session Replay,
        Product Analytics, & Error Tracking GET STARTED FREE → Taofiq
        Aiyelabegan Taofiq is a technical writer and software engineer working
        on building mobile and web applications. Additionally, he likes to
        contribute to open source projects and exploring new topics. LogRocket:
        Session Replay, Product Analytics, & Error Tracking GET STARTED FREE →
        Taofiq Aiyelabegan Taofiq is a technical writer and software engineer
        working on building mobile and web applications. Additionally, he likes
        to contribute to open source projects and exploring new topics.
      </Text>
      <CustomButton title="Bottom Sheet" onPress={onPress} />
    </ScrollView>
  );
};

export default CustomContent;
