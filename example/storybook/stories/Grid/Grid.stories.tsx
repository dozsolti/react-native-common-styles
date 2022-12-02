import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { commonStyles } from 'react-native-common-styles';
import { Title, SubTitle } from '../utils/Titles';
import { TextElements } from '../utils/TextElements';

storiesOf('Grid', module)
  .add('Basic', () => (
    <>
      <SubTitle text="Basic row" />
      <View style={[commonStyles.row]}>
        <TextElements length={5} />
      </View>

      <SubTitle text="Basic stack" />
      <View style={[commonStyles.stack]}>
        <TextElements length={5} />
      </View>
    </>
  ))
  .add('Algin', () => (
    <ScrollView>
      <Title text="Row" />
      <SubTitle text="Left" />
      <View style={[commonStyles.row, commonStyles.alignLeft]}>
        <TextElements length={5} />
      </View>
      <SubTitle text="Center" />
      <View style={[commonStyles.row, commonStyles.alignCenter]}>
        <TextElements length={5} />
      </View>
      <SubTitle text="Right" />
      <View style={[commonStyles.row, commonStyles.alignRight]}>
        <TextElements length={5} />
      </View>

      <Title text="Stack" />
      <SubTitle text="Left" />
      <View style={[commonStyles.stack, commonStyles.alignLeft]}>
        <TextElements length={5} />
      </View>
      <SubTitle text="Center" />
      <View style={[commonStyles.stack, commonStyles.alignCenter]}>
        <TextElements length={5} />
      </View>
      <SubTitle text="Right" />
      <View style={[commonStyles.stack, commonStyles.alignRight]}>
        <TextElements length={5} />
      </View>
    </ScrollView>
  ))
  .add('Spacing', () => (
    <>
      <Title text="Row" />
      <SubTitle text="Around" />
      <View style={[commonStyles.row, commonStyles.spaceAround]}>
        <TextElements length={5} />
      </View>
      <SubTitle text="Between" />
      <View style={[commonStyles.row, commonStyles.spaceBetween]}>
        <TextElements length={5} />
      </View>
      <SubTitle text="Evenly" />
      <View style={[commonStyles.row, commonStyles.spaceEvenly]}>
        <TextElements length={5} />
      </View>
    </>
  ));
/*
  Later on
  .add('Basic reversed', () => (
    <>
      <SubTitle text="Basic row" />
      <View style={[commonStyles.rowReversed]}>
        <TextElements length={5} />
      </View>

      <SubTitle text="Basic stack" />
      <View style={[commonStyles.stackReversed]}>
        <TextElements length={5} />
      </View>
    </>
  ))*/
