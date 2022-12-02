import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';

storiesOf('Utilities', module).add('Basic', () => (
  <>
    <Text>Hello</Text>
  </>
));
/*
    text:
        - textLeft
        - textCenter
        - textRight

        - textBold
        - textBolder
        - textBoldest

        - textUnderline
        - textStrike

        - textUppercase
        - textLowercase
        - textCapitalize

    spacing:
        - margin0-12
        - marginLeft0-12
        - marginHorizontal0-12
        - marginVertical0-12

        - padding0-12
        - paddingLeft0-12
        - paddingHorizontal0-12
        - paddingVertical0-12

    z-index 0 - 12, 999
    opacity 0-10

    bordered 1px solid black
    borderRadius1-3
    rounded => borderRadius 99999
    hidden: diplay: none
    show: diplay: flex

    imageContaine
    imageCover
    imageX => resizeMode: X 

    position
        - relative
        - absolute
        - absoluteBottom: { position: "absolute", bottom: 0, left: 0, right: 0 },
        - absoluteTop: { position: "absolute", top: 0, left: 0, right: 0 },
        - absoluteFill: StyleSheet.absoluteFillObject,


    sizes:
        - fullScreen

        - width0,10,15,20,25,33,50,66,75,80,85,90,100 %
        - widthScreen: { width: screenWidth },
        - maxWidthScreen: { maxWidth: screenWidth },
        
        - height0,10,15,20,25,33,50,66,75,80,85,90,100 %
        - heightScreen: { height: screenHeight },
        - maxHeightScreen: { maxHeight: screenHeight },

*/
