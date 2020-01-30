import { Dimensions, StyleSheet, Platform } from 'react-native'; 
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { MAIN_COLOR, BACKGROUND_COLOR, FONT_COLOR } from "../Utility/Color"

const { width, height } = Dimensions.get('window');
 

export const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  top: {
    width: width,
    flex: 0.8,
    backgroundColor: MAIN_COLOR.PRIMARY_COLOR
  },

  center: {
    flex: 8,
    width: width,
    alignItems: 'center',
    marginTop: wp("20%"),
    backgroundColor: BACKGROUND_COLOR.WHITE_COLOR
  },

  centerInner: { 
    width: "95%", 
    borderWidth: 1
  },

  centerInnerItem: {
    padding: wp("5%"),
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center', 
    flexDirection: "row",
    //borderWidth: 1
  },

  bottom: {
    flex: 1,
    width: width,
    backgroundColor: 'red'
  },

  textLabel: {
    width: "30%",
    height: "auto",
    fontSize: RFValue(15),
    //borderWidth: 1
  },

  errorTextLabel: { 
    fontSize: RFValue(15),
    color: FONT_COLOR.ERROR_COLOR
  }


 
 

});