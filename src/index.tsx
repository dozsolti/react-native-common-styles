import { StyleSheet } from 'react-native';

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row' },
  rowReversed: { flexDirection: 'row-reverse', justifyContent: 'flex-end' },

  stack: { flexDirection: 'column' },
  stackReversed: { flexDirection: 'column-reverse' },

  alignLeft: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  alignCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  alignRight: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },

  spaceBetween: { justifyContent: 'space-between' },
  spaceEvenly: { justifyContent: 'space-evenly' },
  spaceAround: { justifyContent: 'space-around' },

  fill: { flex: 1 },
});

export const commonStyles = styles;
