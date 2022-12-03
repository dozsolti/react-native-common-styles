import React from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';

export const Box = ({
  size,
  color,
  style,
}: {
  size: number;
  color: string;
  style?: StyleProp<ViewStyle>;
}) => (
  <View
    style={[{ width: size, height: size, backgroundColor: color }, style]}
  />
);

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

export const WrapperDecorator = (getStory: Function) => {
  return <View style={{ paddingHorizontal: 12 }}>{getStory()}</View>;
};

export const TextElements = ({ length }: { length: number }) => (
  <>
    {new Array(length).fill(0).map((_, i) => (
      <Text key={`el-${i}`}>Text {i}</Text>
    ))}
  </>
);
