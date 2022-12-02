import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text, View } from 'react-native';
import { commonStyles } from 'react-native-common-styles';

storiesOf('Layout', module).add('Fill', () => (
  <>
    <View>
      <Text>Simple{'\n'}content</Text>
    </View>
    <View style={[commonStyles.fill, { backgroundColor: 'gray' }]}>
      <Text>Fill the rest</Text>
    </View>
  </>
));
