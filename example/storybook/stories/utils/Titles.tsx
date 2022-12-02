import React from 'react';
import { Text } from 'react-native';

export const Title = ({ text }: { text: string }) => {
  return (
    <Text
      style={{
        marginTop: 16,
        fontSize: 32,
        color: 'black',
        fontWeight: 'bold',
      }}
    >
      {text}
    </Text>
  );
};
export const SubTitle = ({ text }: { text: string }) => {
  return (
    <Text
      style={{
        marginTop: 16,
        fontSize: 24,
        color: 'gray',
      }}
    >
      {text}
    </Text>
  );
};
