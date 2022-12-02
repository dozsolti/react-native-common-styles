import React from 'react';
import { Text } from 'react-native';

export const TextElements = ({ length }: { length: number }) => (
  <>
    {new Array(length).fill(0).map((_, i) => (
      <Text key={`el-${i}`}>Text {i}</Text>
    ))}
  </>
);
