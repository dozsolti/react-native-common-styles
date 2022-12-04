import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { commonStyles } from 'react-native-common-styles';
import { Label, SubTitle, WrapperDecorator } from './utils';

const imageStyles = { width: 200, height: 200 };

const getRandomColor = () =>
  '#' + Math.floor(Math.random() * 16777215).toString(16);
storiesOf('Utilities', module)
  .addDecorator(WrapperDecorator)
  .add('Display', () => (
    <>
      <SubTitle text="Display" />
      <Text style={commonStyles.show}>Now you see me</Text>
      <Text style={commonStyles.hidden}>Now you don't</Text>
    </>
  ))
  .add('Image', () => (
    <ScrollView>
      <SubTitle text="Image" />
      <View
        style={[commonStyles.marginTop8, commonStyles.alignCenterHorizontal]}
      >
        <Label text="Center" />
        <Image
          source={{ uri: 'https://api.lorem.space/image/game?w=150&h=220' }}
          style={[imageStyles, commonStyles.imageCenter]}
        />
      </View>
      <View
        style={[commonStyles.marginTop8, commonStyles.alignCenterHorizontal]}
      >
        <Label text="Contain" />
        <Image
          source={{ uri: 'https://api.lorem.space/image/game?w=150&h=220' }}
          style={[imageStyles, commonStyles.imageContain]}
        />
      </View>
      <View
        style={[commonStyles.marginTop8, commonStyles.alignCenterHorizontal]}
      >
        <Label text="Cover" />
        <Image
          source={{ uri: 'https://api.lorem.space/image/game?w=150&h=220' }}
          style={[imageStyles, commonStyles.imageCover]}
        />
      </View>
      <View
        style={[commonStyles.marginTop8, commonStyles.alignCenterHorizontal]}
      >
        <Label text="Repeat" />
        <Image
          source={{ uri: 'https://api.lorem.space/image/game?w=150&h=220' }}
          style={[imageStyles, commonStyles.imageRepeat]}
        />
      </View>
      <View
        style={[commonStyles.marginTop8, commonStyles.alignCenterHorizontal]}
      >
        <Label text="Stretch" />
        <Image
          source={{ uri: 'https://api.lorem.space/image/game?w=150&h=220' }}
          style={[imageStyles, commonStyles.imageStretch]}
        />
      </View>
    </ScrollView>
  ))
  .add('Position', () => (
    <ScrollView>
      <View
        style={[{ backgroundColor: 'yellow' }, commonStyles.absoluteFill]}
      />

      <SubTitle text="Position" />
      <Text style={commonStyles.relative}>position relative</Text>

      <View style={commonStyles.relative}>
        <Text>
          {'\n'}Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Incidunt, magni iste. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Dolorem dignissimos dolores sit blanditiis nesciunt
          impedit reiciendis excepturi dicta ut eum natus aut a, vitae sequi
          eaque vel eius quos repellat rem ad dolorum suscipit. Animi fuga et
          assumenda, temporibus nesciunt porro quo voluptate dolorum dignissimos
          possimus soluta repudiandae quidem.
        </Text>
        <Text style={commonStyles.absolute}>position absolute</Text>
      </View>

      <SubTitle text="Position utils" />
      <Label text="absoluteTop: todo" />
      <Label text="absoluteBottom: todo" />
      <Label text="absoluteFill: todo" />
      <View
        style={[
          { height: 550, backgroundColor: 'gray' },
          commonStyles.width100,
          commonStyles.relative,
        ]}
      >
        <View
          style={[
            { backgroundColor: 'red' },
            commonStyles.height20,
            commonStyles.absoluteTop,
          ]}
        />
        <View
          style={[
            { backgroundColor: 'blue' },
            commonStyles.height20,
            commonStyles.absoluteBottom,
          ]}
        />
      </View>
    </ScrollView>
  ))
  .add('Utilities', () => {
    const boxStyles = [
      { aspectRatio: 1 / 1, backgroundColor: 'black' },
      commonStyles.fill,
      commonStyles.marginHorizontal1,
    ];
    const boxStylesZIndex = [
      { backgroundColor: 'black', width: 50, height: 50 },
      commonStyles.absolute,
    ];

    return (
      <ScrollView>
        <SubTitle text="Opacity" />
        <View style={[commonStyles.row, commonStyles.spaceBetween]}>
          <View style={[boxStyles, commonStyles.opacity0]} />
          <View style={[boxStyles, commonStyles.opacity1]} />
          <View style={[boxStyles, commonStyles.opacity2]} />
          <View style={[boxStyles, commonStyles.opacity3]} />
          <View style={[boxStyles, commonStyles.opacity4]} />
          <View style={[boxStyles, commonStyles.opacity5]} />
          <View style={[boxStyles, commonStyles.opacity6]} />
          <View style={[boxStyles, commonStyles.opacity7]} />
          <View style={[boxStyles, commonStyles.opacity8]} />
          <View style={[boxStyles, commonStyles.opacity9]} />
          <View style={[boxStyles, commonStyles.opacity10]} />
        </View>

        <SubTitle text="Border" />
        <View style={commonStyles.row}>
          <View
            style={[
              commonStyles.width20,
              commonStyles.square,
              commonStyles.bordered,
            ]}
          />
          <View
            style={[
              commonStyles.width20,
              commonStyles.square,
              commonStyles.bordered,
              commonStyles.rounded1,
            ]}
          />
          <View
            style={[
              commonStyles.width20,
              commonStyles.square,
              commonStyles.bordered,
              commonStyles.rounded2,
            ]}
          />
          <View
            style={[
              commonStyles.width20,
              commonStyles.square,
              commonStyles.bordered,
              commonStyles.rounded3,
            ]}
          />
          <View
            style={[
              commonStyles.width20,
              commonStyles.square,
              commonStyles.bordered,
              commonStyles.rounded,
            ]}
          />
        </View>

        <SubTitle text="zIndex 0 - 10 + zIndexTop" />
        <View style={[commonStyles.relative]}>
          <View
            style={[
              boxStylesZIndex,
              { backgroundColor: getRandomColor() },
              commonStyles.zIndex10,
            ]}
          />
          <View
            style={[
              boxStylesZIndex,
              { backgroundColor: getRandomColor() },
              commonStyles.marginTop2,
              commonStyles.marginLeft2,
              commonStyles.zIndex9,
            ]}
          />
          <View
            style={[
              boxStylesZIndex,
              { backgroundColor: getRandomColor() },
              commonStyles.marginTop4,
              commonStyles.marginLeft4,
              commonStyles.zIndex8,
            ]}
          />
          <View
            style={[
              boxStylesZIndex,
              { backgroundColor: getRandomColor() },
              commonStyles.marginTop6,
              commonStyles.marginLeft6,
              commonStyles.zIndex7,
            ]}
          />
          <View
            style={[
              boxStylesZIndex,
              { backgroundColor: getRandomColor() },
              commonStyles.marginTop8,
              commonStyles.marginLeft8,
              commonStyles.zIndex6,
            ]}
          />

          <View
            style={[
              boxStylesZIndex,
              { backgroundColor: getRandomColor() },
              commonStyles.marginTop10,
              commonStyles.marginLeft10,
              commonStyles.zIndex5,
            ]}
          />

          <View
            style={[
              boxStylesZIndex,
              { backgroundColor: getRandomColor() },
              commonStyles.marginTop12,
              commonStyles.marginLeft12,
              commonStyles.zIndexTop,
            ]}
          />
        </View>
      </ScrollView>
    );
  });
