import { Dimensions, StyleSheet, Platform } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'; 
import { MAIN_COLOR, BACKGROUND_COLOR, FONT_COLOR } from "../../Utility/Color"

const { width, height } = Dimensions.get('window');
 

export const styles = StyleSheet.create({
  
  buttonStyle: { 
    height: hp('5%'),
    width: wp('50%%'),
    backgroundColor: MAIN_COLOR.PRIMARY_COLOR,
    borderColor: MAIN_COLOR.PRIMARY_COLOR, 
    justifyContent: "center",
    alignItems: "center"
  },

  textLabel: {
    width: "30%",
    height: "auto",
    fontSize: RFValue(15),
    color: FONT_COLOR.WHITE_COLOR,
  }
 

});