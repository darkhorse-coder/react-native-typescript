import React from 'react';
import { View } from 'react-native';

import { SPButton, SPLabel } from '~components';

const OnboardScreen = () => {
  return (
    <View>
      <SPLabel type="title"> Welome React Native Typescript! </SPLabel>
      <SPButton />
    </View>
  );
};

export default OnboardScreen;
