import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import { commonStyles } from 'react-native-common-styles';
import { SubTitle, WrapperDecorator } from './utils';

storiesOf('Text', module)
  .addDecorator(WrapperDecorator)
  .add('Alignment', () => (
    <>
      <SubTitle text="Text Alignment" />
      <Text style={commonStyles.textAuto}>auto</Text>
      <Text style={commonStyles.textLeft}>left</Text>
      <Text style={commonStyles.textCenter}>center</Text>

      <Text style={commonStyles.textRight}>right</Text>

      <Text style={commonStyles.textJustify}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod amet totam
        fuga provident odit exercitationem accusantium autem at, eveniet ab
        pariatur saepe atque quidem commodi nesciunt vel ipsum reprehenderit?
        Placeat!
      </Text>
    </>
  ))
  .add('Weight', () => (
    <>
      <SubTitle text="Text Weight" />

      <Text style={commonStyles.textThinest}>thinest</Text>
      <Text style={commonStyles.textThiner}>thiner</Text>
      <Text style={commonStyles.textThin}>thin</Text>
      <Text style={commonStyles.textNormal}>normal</Text>
      <Text style={commonStyles.textBold}>bold</Text>
      <Text style={commonStyles.textBolder}>bolder</Text>
      <Text style={commonStyles.textBoldest}>boldest</Text>
    </>
  ))
  .add('Transform', () => (
    <>
      <SubTitle text="Text Transform" />

      <Text>
        uPPeRcAsE {'-> '}
        <Text style={commonStyles.textUppercase}>uPPeRcAsE</Text>
      </Text>
      <Text>
        LoWeRcAse {'-> '}
        <Text style={commonStyles.textLowercase}>LoWeRcAse</Text>
      </Text>
      <Text>
        cApItALiZe {'-> '}
        <Text style={commonStyles.textCapitalize}>cApItALiZe</Text>
      </Text>
      <Text
        style={[
          commonStyles.textLowercase,
          commonStyles.textUppercase,
          commonStyles.textNoTransform,
        ]}
      >
        Remove ANY transforms
      </Text>
    </>
  ))
  .add('Decorations', () => (
    <>
      <SubTitle text="Text Decorations" />

      <Text style={commonStyles.textUnderline}>Underline</Text>
      <Text style={commonStyles.textStrike}>Strike</Text>
      <Text style={[commonStyles.textStrike, commonStyles.textNoDecoration]}>
        No decoration
      </Text>
    </>
  ));
