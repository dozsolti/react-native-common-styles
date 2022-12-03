import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { commonStyles } from 'react-native-common-styles';
import { Box, SubTitle } from './utils';

const backgroundStyle = { backgroundColor: 'gray' };
const ContainerStyles = [
  { backgroundColor: 'gray', marginTop: 4 },
  commonStyles.row,
  commonStyles.alignRowCenterVertical,
];
storiesOf('Spacing', module)
  .add('Margins', () => (
    <ScrollView>
      <SubTitle
        text={`Margins\n1 unit = 4 margins\nmarginLeft3 = { marginLeft: 12 }`}
      />
      <View style={ContainerStyles}>
        <Text>margin0:</Text>
        <Box size={40} color="red" style={commonStyles.margin0} />
      </View>
      <View style={ContainerStyles}>
        <Text>margin1:</Text>
        <Box size={40} color="red" style={commonStyles.margin1} />
      </View>
      <View style={ContainerStyles}>
        <Text>margin2:</Text>
        <Box size={40} color="red" style={commonStyles.margin2} />
      </View>
      <SubTitle text="..." />
      <View style={ContainerStyles}>
        <Text>margin7:</Text>
        <Box size={40} color="red" style={commonStyles.margin7} />
      </View>
      <SubTitle text="..." />
      <View style={ContainerStyles}>
        <Text>margin11:</Text>
        <Box size={40} color="red" style={commonStyles.margin11} />
      </View>
      <View style={ContainerStyles}>
        <Text>margin12:</Text>
        <Box size={40} color="red" style={commonStyles.margin12} />
      </View>

      <SubTitle text="Margin Top/Right/Bottom/Left" />
      <View style={[commonStyles.row]}>
        <Box size={40} color="purple" style={commonStyles.marginBottom3} />
        <Box size={40} color="red" style={commonStyles.marginLeft4} />
        <Box size={40} color="green" style={commonStyles.marginRight8} />
        <Box size={40} color="blue" style={commonStyles.marginTop12} />
      </View>

      <SubTitle text="Margin Horizontal/Vertical" />
      <Box size={40} color="red" style={commonStyles.marginHorizontal12} />
      <Box size={40} color="blue" style={commonStyles.marginVertical12} />
    </ScrollView>
  ))
  .add('Paddings', () => (
    <ScrollView>
      <SubTitle
        text={`Paddings\n1 unit = 4 paddings\npaddingLeft3 = { paddingLeft: 12 }`}
      />
      <View style={[ContainerStyles, commonStyles.padding0]}>
        <Text>padding0</Text>
      </View>
      <View style={[ContainerStyles, commonStyles.padding1]}>
        <Text>padding1</Text>
      </View>
      <View style={[ContainerStyles, commonStyles.padding2]}>
        <Text>padding2</Text>
      </View>
      <SubTitle text="..." />
      <View style={[ContainerStyles, commonStyles.padding7]}>
        <Text>padding7</Text>
      </View>
      <SubTitle text="..." />
      <View style={[ContainerStyles, commonStyles.padding11]}>
        <Text>padding11</Text>
      </View>
      <View style={[ContainerStyles, commonStyles.padding12]}>
        <Text>padding12</Text>
      </View>

      <SubTitle text="Padding Top/Right/Bottom/Left" />
      <View style={[backgroundStyle, commonStyles.paddingTop6]}>
        <Box size={40} color="red" />
      </View>
      <View style={[backgroundStyle, commonStyles.paddingBottom3]}>
        <Box size={40} color="purple" />
      </View>
      <View style={[backgroundStyle, commonStyles.paddingLeft3]}>
        <Box size={40} color="blue" />
      </View>
      <View style={[backgroundStyle, commonStyles.paddingRight10]}>
        <Box size={40} color="green" />
      </View>

      <SubTitle text="Padding Horizontal/Vertical" />
      <View style={[backgroundStyle, commonStyles.paddingHorizontal12]}>
        <Box size={40} color="red" />
      </View>
      <SubTitle text="" />
      <View style={[backgroundStyle, commonStyles.paddingVertical12]}>
        <Box size={40} color="blue" />
      </View>
    </ScrollView>
  ));
