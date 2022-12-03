import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { commonStyles } from 'react-native-common-styles';
import { Label, SubTitle, WrapperDecorator } from './utils';

const boxStyles = { backgroundColor: 'red', height: 10 };
const boxStyles2 = { backgroundColor: 'blue', height: 10 };

const columnStyles = { backgroundColor: 'red', width: 15 };
const columnStyles2 = { backgroundColor: 'blue', width: 15 };
storiesOf('Sizing', module).add('Fill', () => (
  <>
    <Text>Here some{'\n'}content</Text>
    <View style={[commonStyles.fill, { backgroundColor: 'gray' }]}>
      <Text>fill in the rest</Text>
    </View>
  </>
));

storiesOf('Sizing', module)
  .addDecorator(WrapperDecorator)
  .add('Width', () => (
    <ScrollView>
      <SubTitle text="Width" />
      <Label text="width0" />
      <View style={[boxStyles, commonStyles.width0]} />
      <Label text="width10" />
      <View style={[boxStyles, commonStyles.width10]} />
      <Label text="width15" />
      <View style={[boxStyles, commonStyles.width15]} />
      <Label text="width20" />
      <View style={[boxStyles, commonStyles.width20]} />
      <Label text="width25" />
      <View style={[boxStyles, commonStyles.width25]} />
      <Label text="width33" />
      <View style={[boxStyles, commonStyles.width33]} />
      <Label text="width50" />
      <View style={[boxStyles, commonStyles.width50]} />
      <Label text="width66" />
      <View style={[boxStyles, commonStyles.width66]} />
      <Label text="width75" />
      <View style={[boxStyles, commonStyles.width75]} />
      <Label text="width80" />
      <View style={[boxStyles, commonStyles.width80]} />
      <Label text="width85" />
      <View style={[boxStyles, commonStyles.width85]} />
      <Label text="width90" />
      <View style={[boxStyles, commonStyles.width90]} />
      <Label text="width100" />
      <View style={[boxStyles, commonStyles.width100]} />

      <SubTitle text="Combining" />
      <Label text="width15 + width85 = width100" />
      <View style={[commonStyles.row]}>
        <View style={[boxStyles, commonStyles.width15]} />
        <View style={[boxStyles2, commonStyles.width85]} />
      </View>
      <Label text="width33 + width66 = width100" />
      <View style={[commonStyles.row]}>
        <View style={[boxStyles, commonStyles.width33]} />
        <View style={[boxStyles2, commonStyles.width66]} />
      </View>
      <Label text="width50 + width50 = width100" />
      <View style={[commonStyles.row]}>
        <View style={[boxStyles, commonStyles.width50]} />
        <View style={[boxStyles2, commonStyles.width50]} />
      </View>

      <SubTitle text="minWidth" />
      <Label text="Same classes as width." />
      <View style={[boxStyles, commonStyles.width0, commonStyles.minWidth15]} />

      <SubTitle text="maxWidth" />
      <Label text="Same classes as width" />
      <View style={[boxStyles, commonStyles.maxWidth50]} />
    </ScrollView>
  ))
  .add('Height', () => (
    <View>
      <SubTitle text="Height" />
      <ScrollView horizontal style={commonStyles.minHeight100}>
        <View style={[commonStyles.marginRight4]}>
          <Label text="height0" />
          <View style={[columnStyles, commonStyles.height0]} />
        </View>
        <View style={[commonStyles.marginRight4]}>
          <Label text="height10" />
          <View style={[columnStyles, commonStyles.height10]} />
        </View>
        <View style={[commonStyles.marginRight4]}>
          <Label text="height15" />
          <View style={[columnStyles, commonStyles.height15]} />
        </View>
        <View style={[commonStyles.marginRight4]}>
          <Label text="height20" />
          <View style={[columnStyles, commonStyles.height20]} />
        </View>
        <View style={[commonStyles.marginRight4]}>
          <Label text="height25" />
          <View style={[columnStyles, commonStyles.height25]} />
        </View>
        <View style={[commonStyles.marginRight4]}>
          <Label text="height33" />
          <View style={[columnStyles, commonStyles.height33]} />
        </View>
        <View style={[commonStyles.marginRight4]}>
          <Label text="height50" />
          <View style={[columnStyles, commonStyles.height50]} />
        </View>
        <View style={[commonStyles.marginRight4]}>
          <Label text="height66" />
          <View style={[columnStyles, commonStyles.height66]} />
        </View>
        <View style={[commonStyles.marginRight4]}>
          <Label text="height75" />
          <View style={[columnStyles, commonStyles.height75]} />
        </View>
        <View style={[commonStyles.marginRight4]}>
          <Label text="height80" />
          <View style={[columnStyles, commonStyles.height80]} />
        </View>
        <View style={[commonStyles.marginRight4]}>
          <Label text="height85" />
          <View style={[columnStyles, commonStyles.height85]} />
        </View>
        <View style={[commonStyles.marginRight4]}>
          <Label text="height90" />
          <View style={[columnStyles, commonStyles.height90]} />
        </View>
        <View style={[commonStyles.marginRight4]}>
          <Label text="height100" />
          <View style={[columnStyles, commonStyles.height100]} />
        </View>
        <View style={[commonStyles.marginRight4]}>
          <Label text="height10 + height90 = height100" />
          <View style={[columnStyles, commonStyles.height10]} />
          <View style={[columnStyles2, commonStyles.height90]} />
        </View>
      </ScrollView>
    </View>
  ));
