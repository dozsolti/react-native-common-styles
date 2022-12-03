import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { commonStyles } from 'react-native-common-styles';
import { Title, SubTitle, WrapperDecorator, TextElements } from './utils';

const BoxStyles = { backgroundColor: 'gray', height: 120, padding: 4 };
storiesOf('Layout', module)
  .addDecorator(WrapperDecorator)
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
  .add('Alginment Row', () => (
    <ScrollView>
      <Title text="Row" />
      <>
        <SubTitle text="Top Left" />
        <>
          <View
            style={[
              BoxStyles,
              commonStyles.row,
              commonStyles.alignRowTop,
              commonStyles.alignRowLeft,
            ]}
          >
            <TextElements length={5} />
          </View>

          <SubTitle text="Top Center" />
          <View
            style={[
              BoxStyles,
              commonStyles.row,
              commonStyles.alignRowTop,
              commonStyles.alignRowCenterHorizontal,
            ]}
          >
            <TextElements length={5} />
          </View>

          <SubTitle text="Top Right" />
          <View
            style={[
              BoxStyles,
              commonStyles.row,
              commonStyles.alignRowTop,
              commonStyles.alignRowRight,
            ]}
          >
            <TextElements length={5} />
          </View>
        </>
        <SubTitle text="Middle Left" />
        <>
          <View
            style={[
              BoxStyles,
              commonStyles.row,
              commonStyles.alignRowCenterVertical,
              commonStyles.alignRowLeft,
            ]}
          >
            <TextElements length={5} />
          </View>

          <SubTitle text="Center" />
          <View
            style={[
              BoxStyles,
              commonStyles.row,
              commonStyles.alignCenter,
              // Longer version:
              // commonStyles.alignRowCenterHorizontal,
              // commonStyles.alignRowCenterVertical,
            ]}
          >
            <TextElements length={5} />
          </View>

          <SubTitle text="Middle Right" />
          <View
            style={[
              BoxStyles,
              commonStyles.row,
              commonStyles.alignRowCenterVertical,
              commonStyles.alignRowRight,
            ]}
          >
            <TextElements length={5} />
          </View>
        </>
        <SubTitle text="Bottom Left" />
        <>
          <View
            style={[
              BoxStyles,
              commonStyles.row,
              commonStyles.alignRowBotom,
              commonStyles.alignRowLeft,
            ]}
          >
            <TextElements length={5} />
          </View>

          <SubTitle text="Bottom Center" />
          <View
            style={[
              BoxStyles,
              commonStyles.row,
              commonStyles.alignRowBotom,
              commonStyles.alignRowCenterHorizontal,
            ]}
          >
            <TextElements length={5} />
          </View>

          <SubTitle text="Bottom Right" />
          <View
            style={[
              BoxStyles,
              commonStyles.row,
              commonStyles.alignRowBotom,
              commonStyles.alignRowRight,
            ]}
          >
            <TextElements length={5} />
          </View>
        </>
      </>
    </ScrollView>
  ))
  .add('Alignment Stack', () => (
    <ScrollView>
      <Title text="Stack" />
      <SubTitle text="Top Left" />
      <>
        <View
          style={[
            BoxStyles,
            commonStyles.stack,
            commonStyles.alignCenter,
            commonStyles.alignTop,
            commonStyles.alignLeft,
          ]}
        >
          <TextElements length={3} />
        </View>

        <SubTitle text="Top Center" />
        <View
          style={[
            BoxStyles,
            commonStyles.stack,
            commonStyles.alignCenter,
            commonStyles.alignTop,
            commonStyles.alignCenterHorizontal,
          ]}
        >
          <TextElements length={3} />
        </View>

        <SubTitle text="Top Right" />
        <View
          style={[
            BoxStyles,
            commonStyles.stack,
            commonStyles.alignCenter,
            commonStyles.alignTop,
            commonStyles.alignRight,
          ]}
        >
          <TextElements length={3} />
        </View>
      </>

      <SubTitle text="Middle Left" />
      <>
        <View
          style={[
            BoxStyles,
            commonStyles.stack,
            commonStyles.alignCenterVertical,
            commonStyles.alignLeft,
          ]}
        >
          <TextElements length={3} />
        </View>

        <SubTitle text="Center" />
        <View style={[BoxStyles, commonStyles.stack, commonStyles.alignCenter]}>
          <TextElements length={3} />
        </View>

        <SubTitle text="Middle Right" />
        <View
          style={[
            BoxStyles,
            commonStyles.stack,
            commonStyles.alignCenterVertical,
            commonStyles.alignRight,
          ]}
        >
          <TextElements length={3} />
        </View>
      </>

      <SubTitle text="Bottom Left" />
      <>
        <View
          style={[
            BoxStyles,
            commonStyles.stack,
            commonStyles.alignBotom,
            commonStyles.alignLeft,
          ]}
        >
          <TextElements length={3} />
        </View>

        <SubTitle text="Bottom Center" />
        <View
          style={[
            BoxStyles,
            commonStyles.stack,
            commonStyles.alignBotom,
            commonStyles.alignCenterHorizontal,
          ]}
        >
          <TextElements length={3} />
        </View>

        <SubTitle text="Bottom Right" />
        <View
          style={[
            BoxStyles,
            commonStyles.stack,
            commonStyles.alignBotom,
            commonStyles.alignRight,
          ]}
        >
          <TextElements length={3} />
        </View>
      </>
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
