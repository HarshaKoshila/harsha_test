import { Dimensions, StyleSheet, Platform } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'; 
import { MAIN_COLOR, BACKGROUND_COLOR } from "../../Utility/Color"

const { width, height } = Dimensions.get('window');
 

export const styles = StyleSheet.create({
  
  textInputStyle: { 
    fontSize: RFValue(15),
    height: wp('10%'),
    width: wp('60%'),
    backgroundColor: BACKGROUND_COLOR.WHITE_COLOR,
    color: "#000000",
    borderColor: MAIN_COLOR.PRIMARY_COLOR,
    borderWidth: 1,
    padding: 5,
    paddingLeft: 10
  },

 

});