import { StyleSheet } from 'react-native';

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row' },
  rowReversed: { flexDirection: 'row-reverse', justifyContent: 'flex-end' },

  stack: { flexDirection: 'column' },
  stackReversed: { flexDirection: 'column-reverse' },

  spaceBetween: { justifyContent: 'space-between' },
  spaceEvenly: { justifyContent: 'space-evenly' },
  spaceAround: { justifyContent: 'space-around' },

  fill: { flex: 1 },

  //#region Widths
  width0: { width: 0 },
  width10: { width: '10%' },
  width15: { width: '15%' },
  width20: { width: '20%' },
  width25: { width: '25%' },
  width33: { width: '33.5%' },
  width50: { width: '50%' },
  width66: { width: '66.5%' },
  width75: { width: '75%' },
  width80: { width: '80%' },
  width85: { width: '85%' },
  width90: { width: '90%' },
  width100: { width: '100%' },

  minWidth0: { minWidth: 0 },
  minWidth10: { minWidth: '10%' },
  minWidth15: { minWidth: '15%' },
  minWidth20: { minWidth: '20%' },
  minWidth25: { minWidth: '25%' },
  minWidth33: { minWidth: '33.5%' },
  minWidth50: { minWidth: '50%' },
  minWidth66: { minWidth: '66.5%' },
  minWidth75: { minWidth: '75%' },
  minWidth80: { minWidth: '80%' },
  minWidth85: { minWidth: '85%' },
  minWidth90: { minWidth: '90%' },
  minWidth100: { minWidth: '100%' },

  maxWidth0: { maxWidth: 0 },
  maxWidth10: { maxWidth: '10%' },
  maxWidth15: { maxWidth: '15%' },
  maxWidth20: { maxWidth: '20%' },
  maxWidth25: { maxWidth: '25%' },
  maxWidth33: { maxWidth: '33.5%' },
  maxWidth50: { maxWidth: '50%' },
  maxWidth66: { maxWidth: '66.5%' },
  maxWidth75: { maxWidth: '75%' },
  maxWidth80: { maxWidth: '80%' },
  maxWidth85: { maxWidth: '85%' },
  maxWidth90: { maxWidth: '90%' },
  maxWidth100: { maxWidth: '100%' },
  //#endregion

  //#region Height
  height0: { height: 0 },
  height10: { height: '10%' },
  height15: { height: '15%' },
  height20: { height: '20%' },
  height25: { height: '25%' },
  height33: { height: '33.5%' },
  height50: { height: '50%' },
  height66: { height: '66.5%' },
  height75: { height: '75%' },
  height80: { height: '80%' },
  height85: { height: '85%' },
  height90: { height: '90%' },
  height100: { height: '100%' },

  minHeight0: { minHeight: 0 },
  minHeight10: { minHeight: '10%' },
  minHeight15: { minHeight: '15%' },
  minHeight20: { minHeight: '20%' },
  minHeight25: { minHeight: '25%' },
  minHeight33: { minHeight: '33.5%' },
  minHeight50: { minHeight: '50%' },
  minHeight66: { minHeight: '66.5%' },
  minHeight75: { minHeight: '75%' },
  minHeight80: { minHeight: '80%' },
  minHeight85: { minHeight: '85%' },
  minHeight90: { minHeight: '90%' },
  minHeight100: { minHeight: '100%' },

  maxHeight0: { maxHeight: 0 },
  maxHeight10: { maxHeight: '10%' },
  maxHeight15: { maxHeight: '15%' },
  maxHeight20: { maxHeight: '20%' },
  maxHeight25: { maxHeight: '25%' },
  maxHeight33: { maxHeight: '33.5%' },
  maxHeight50: { maxHeight: '50%' },
  maxHeight66: { maxHeight: '66.5%' },
  maxHeight75: { maxHeight: '75%' },
  maxHeight80: { maxHeight: '80%' },
  maxHeight85: { maxHeight: '85%' },
  maxHeight90: { maxHeight: '90%' },
  maxHeight100: { maxHeight: '100%' },
  //#endregion

  alignCenter: { alignItems: 'center', justifyContent: 'center' },

  alignTop: { justifyContent: 'flex-start' },
  alignBotom: { justifyContent: 'flex-end' },
  alignLeft: { alignItems: 'flex-start' },
  alignRight: { alignItems: 'flex-end' },
  alignCenterVertical: { justifyContent: 'center' },
  alignCenterHorizontal: { alignItems: 'center' },

  alignRowTop: { alignItems: 'flex-start' },
  alignRowBotom: { alignItems: 'flex-end' },
  alignRowLeft: { justifyContent: 'flex-start' },
  alignRowRight: { justifyContent: 'flex-end' },
  alignRowCenterVertical: { alignItems: 'center' },
  alignRowCenterHorizontal: { justifyContent: 'center' },

  //#region Margins and Paddings
  margin0: { margin: 0 },
  margin1: { margin: 4 }, // 1
  margin2: { margin: 8 }, // 2
  margin3: { margin: 12 }, // 3
  margin4: { margin: 16 }, // 4
  margin5: { margin: 20 }, // 5
  margin6: { margin: 24 }, // 6
  margin7: { margin: 28 }, // 7
  margin8: { margin: 32 }, // 8
  margin9: { margin: 36 }, // 9
  margin10: { margin: 40 }, // 10
  margin11: { margin: 44 }, // 11
  margin12: { margin: 48 }, // 12

  marginTop0: { marginTop: 0 },
  marginTop1: { marginTop: 4 }, // 1
  marginTop2: { marginTop: 8 }, // 2
  marginTop3: { marginTop: 12 }, // 3
  marginTop4: { marginTop: 16 }, // 4
  marginTop5: { marginTop: 20 }, // 5
  marginTop6: { marginTop: 24 }, // 6
  marginTop7: { marginTop: 28 }, // 7
  marginTop8: { marginTop: 32 }, // 8
  marginTop9: { marginTop: 36 }, // 9
  marginTop10: { marginTop: 40 }, // 10
  marginTop11: { marginTop: 44 }, // 11
  marginTop12: { marginTop: 48 }, // 12

  marginRight0: { marginRight: 0 },
  marginRight1: { marginRight: 4 }, // 1
  marginRight2: { marginRight: 8 }, // 2
  marginRight3: { marginRight: 12 }, // 3
  marginRight4: { marginRight: 16 }, // 4
  marginRight5: { marginRight: 20 }, // 5
  marginRight6: { marginRight: 24 }, // 6
  marginRight7: { marginRight: 28 }, // 7
  marginRight8: { marginRight: 32 }, // 8
  marginRight9: { marginRight: 36 }, // 9
  marginRight10: { marginRight: 40 }, // 10
  marginRight11: { marginRight: 44 }, // 11
  marginRight12: { marginRight: 48 }, // 12

  marginBottom0: { marginBottom: 0 },
  marginBottom1: { marginBottom: 4 }, // 1
  marginBottom2: { marginBottom: 8 }, // 2
  marginBottom3: { marginBottom: 12 }, // 3
  marginBottom4: { marginBottom: 16 }, // 4
  marginBottom5: { marginBottom: 20 }, // 5
  marginBottom6: { marginBottom: 24 }, // 6
  marginBottom7: { marginBottom: 28 }, // 7
  marginBottom8: { marginBottom: 32 }, // 8
  marginBottom9: { marginBottom: 36 }, // 9
  marginBottom10: { marginBottom: 40 }, // 10
  marginBottom11: { marginBottom: 44 }, // 11
  marginBottom12: { marginBottom: 48 }, // 12

  marginLeft0: { marginLeft: 0 },
  marginLeft1: { marginLeft: 4 }, // 1
  marginLeft2: { marginLeft: 8 }, // 2
  marginLeft3: { marginLeft: 12 }, // 3
  marginLeft4: { marginLeft: 16 }, // 4
  marginLeft5: { marginLeft: 20 }, // 5
  marginLeft6: { marginLeft: 24 }, // 6
  marginLeft7: { marginLeft: 28 }, // 7
  marginLeft8: { marginLeft: 32 }, // 8
  marginLeft9: { marginLeft: 36 }, // 9
  marginLeft10: { marginLeft: 40 }, // 10
  marginLeft11: { marginLeft: 44 }, // 11
  marginLeft12: { marginLeft: 48 }, // 12

  marginVertical0: { marginVertical: 0 },
  marginVertical1: { marginVertical: 4 }, // 1
  marginVertical2: { marginVertical: 8 }, // 2
  marginVertical3: { marginVertical: 12 }, // 3
  marginVertical4: { marginVertical: 16 }, // 4
  marginVertical5: { marginVertical: 20 }, // 5
  marginVertical6: { marginVertical: 24 }, // 6
  marginVertical7: { marginVertical: 28 }, // 7
  marginVertical8: { marginVertical: 32 }, // 8
  marginVertical9: { marginVertical: 36 }, // 9
  marginVertical10: { marginVertical: 40 }, // 10
  marginVertical11: { marginVertical: 44 }, // 11
  marginVertical12: { marginVertical: 48 }, // 12

  marginHorizontal0: { marginHorizontal: 0 },
  marginHorizontal1: { marginHorizontal: 4 }, // 1
  marginHorizontal2: { marginHorizontal: 8 }, // 2
  marginHorizontal3: { marginHorizontal: 12 }, // 3
  marginHorizontal4: { marginHorizontal: 16 }, // 4
  marginHorizontal5: { marginHorizontal: 20 }, // 5
  marginHorizontal6: { marginHorizontal: 24 }, // 6
  marginHorizontal7: { marginHorizontal: 28 }, // 7
  marginHorizontal8: { marginHorizontal: 32 }, // 8
  marginHorizontal9: { marginHorizontal: 36 }, // 9
  marginHorizontal10: { marginHorizontal: 40 }, // 10
  marginHorizontal11: { marginHorizontal: 44 }, // 11
  marginHorizontal12: { marginHorizontal: 48 }, // 12

  padding0: { padding: 0 },
  padding1: { padding: 4 }, // 1
  padding2: { padding: 8 }, // 2
  padding3: { padding: 12 }, // 3
  padding4: { padding: 16 }, // 4
  padding5: { padding: 20 }, // 5
  padding6: { padding: 24 }, // 6
  padding7: { padding: 28 }, // 7
  padding8: { padding: 32 }, // 8
  padding9: { padding: 36 }, // 9
  padding10: { padding: 40 }, // 10
  padding11: { padding: 44 }, // 11
  padding12: { padding: 48 }, // 12

  paddingTop0: { paddingTop: 0 },
  paddingTop1: { paddingTop: 4 }, // 1
  paddingTop2: { paddingTop: 8 }, // 2
  paddingTop3: { paddingTop: 12 }, // 3
  paddingTop4: { paddingTop: 16 }, // 4
  paddingTop5: { paddingTop: 20 }, // 5
  paddingTop6: { paddingTop: 24 }, // 6
  paddingTop7: { paddingTop: 28 }, // 7
  paddingTop8: { paddingTop: 32 }, // 8
  paddingTop9: { paddingTop: 36 }, // 9
  paddingTop10: { paddingTop: 40 }, // 10
  paddingTop11: { paddingTop: 44 }, // 11
  paddingTop12: { paddingTop: 48 }, // 12

  paddingRight0: { paddingRight: 0 },
  paddingRight1: { paddingRight: 4 }, // 1
  paddingRight2: { paddingRight: 8 }, // 2
  paddingRight3: { paddingRight: 12 }, // 3
  paddingRight4: { paddingRight: 16 }, // 4
  paddingRight5: { paddingRight: 20 }, // 5
  paddingRight6: { paddingRight: 24 }, // 6
  paddingRight7: { paddingRight: 28 }, // 7
  paddingRight8: { paddingRight: 32 }, // 8
  paddingRight9: { paddingRight: 36 }, // 9
  paddingRight10: { paddingRight: 40 }, // 10
  paddingRight11: { paddingRight: 44 }, // 11
  paddingRight12: { paddingRight: 48 }, // 12

  paddingBottom0: { paddingBottom: 0 },
  paddingBottom1: { paddingBottom: 4 }, // 1
  paddingBottom2: { paddingBottom: 8 }, // 2
  paddingBottom3: { paddingBottom: 12 }, // 3
  paddingBottom4: { paddingBottom: 16 }, // 4
  paddingBottom5: { paddingBottom: 20 }, // 5
  paddingBottom6: { paddingBottom: 24 }, // 6
  paddingBottom7: { paddingBottom: 28 }, // 7
  paddingBottom8: { paddingBottom: 32 }, // 8
  paddingBottom9: { paddingBottom: 36 }, // 9
  paddingBottom10: { paddingBottom: 40 }, // 10
  paddingBottom11: { paddingBottom: 44 }, // 11
  paddingBottom12: { paddingBottom: 48 }, // 12

  paddingLeft0: { paddingLeft: 0 },
  paddingLeft1: { paddingLeft: 4 }, // 1
  paddingLeft2: { paddingLeft: 8 }, // 2
  paddingLeft3: { paddingLeft: 12 }, // 3
  paddingLeft4: { paddingLeft: 16 }, // 4
  paddingLeft5: { paddingLeft: 20 }, // 5
  paddingLeft6: { paddingLeft: 24 }, // 6
  paddingLeft7: { paddingLeft: 28 }, // 7
  paddingLeft8: { paddingLeft: 32 }, // 8
  paddingLeft9: { paddingLeft: 36 }, // 9
  paddingLeft10: { paddingLeft: 40 }, // 10
  paddingLeft11: { paddingLeft: 44 }, // 11
  paddingLeft12: { paddingLeft: 48 }, // 12

  paddingVertical0: { paddingVertical: 0 },
  paddingVertical1: { paddingVertical: 4 }, // 1
  paddingVertical2: { paddingVertical: 8 }, // 2
  paddingVertical3: { paddingVertical: 12 }, // 3
  paddingVertical4: { paddingVertical: 16 }, // 4
  paddingVertical5: { paddingVertical: 20 }, // 5
  paddingVertical6: { paddingVertical: 24 }, // 6
  paddingVertical7: { paddingVertical: 28 }, // 7
  paddingVertical8: { paddingVertical: 32 }, // 8
  paddingVertical9: { paddingVertical: 36 }, // 9
  paddingVertical10: { paddingVertical: 40 }, // 10
  paddingVertical11: { paddingVertical: 44 }, // 11
  paddingVertical12: { paddingVertical: 48 }, // 12

  paddingHorizontal0: { paddingHorizontal: 0 },
  paddingHorizontal1: { paddingHorizontal: 4 }, // 1
  paddingHorizontal2: { paddingHorizontal: 8 }, // 2
  paddingHorizontal3: { paddingHorizontal: 12 }, // 3
  paddingHorizontal4: { paddingHorizontal: 16 }, // 4
  paddingHorizontal5: { paddingHorizontal: 20 }, // 5
  paddingHorizontal6: { paddingHorizontal: 24 }, // 6
  paddingHorizontal7: { paddingHorizontal: 28 }, // 7
  paddingHorizontal8: { paddingHorizontal: 32 }, // 8
  paddingHorizontal9: { paddingHorizontal: 36 }, // 9
  paddingHorizontal10: { paddingHorizontal: 40 }, // 10
  paddingHorizontal11: { paddingHorizontal: 44 }, // 11
  paddingHorizontal12: { paddingHorizontal: 48 }, // 12

  //#endregion

  //#region Text
  textAuto: { textAlign: 'auto' },
  textLeft: { textAlign: 'left' },
  textCenter: { textAlign: 'center' },
  textRight: { textAlign: 'right' },
  textJustify: { textAlign: 'justify' },

  textThinest: { fontWeight: '100' },
  textThiner: { fontWeight: '200' },
  textThin: { fontWeight: '300' },
  textNormal: { fontWeight: 'normal' },
  textBold: { fontWeight: '700' },
  textBolder: { fontWeight: '800' },
  textBoldest: { fontWeight: '900' },

  textUppercase: { textTransform: 'uppercase' },
  textLowercase: { textTransform: 'lowercase' },
  textCapitalize: { textTransform: 'capitalize' },
  textNoTransform: { textTransform: 'none' },

  textUnderline: { textDecorationLine: 'underline' },
  textStrike: { textDecorationLine: 'line-through' },
  textNoDecoration: { textDecorationLine: 'none' },
  //#endregion
});

export const commonStyles = styles;
