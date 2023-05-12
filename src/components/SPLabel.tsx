import React from 'react';
import { Text, TextProps, TextStyle } from 'react-native';

import { Inter } from '~constants/Fonts';

type LabelTypes = 'title' | 'standard' | 'error';

type SPLabelProps = {
  type: LabelTypes;
} & TextProps;

export const SPLabel = (props: SPLabelProps) => {
  const style: { [key: string]: TextStyle } = {
    standard: { fontFamily: Inter.regular, fontSize: 16, lineHeight: 29 },
    title: { fontFamily: Inter.bold, fontSize: 24, lineHeight: 29 },
    error: { fontFamily: Inter.regular, fontSize: 14, lineHeight: 29 },
  };
  return (
    <Text {...props} style={style[props.type]}>
      {props?.children}
    </Text>
  );
};
