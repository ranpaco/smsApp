import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
  button: {
    marginVertical: 5,
    //borderTopColor: Colors.fire,
    //borderBottomColor: Colors.bloodOrange,
    borderColor: Colors.background,
    borderWidth: 2, 
    marginHorizontal: 15,
   
    backgroundColor: Colors.transparent
  },
  buttonText: {
    margin: 15,
    textAlign: 'center',
    color: Colors.coal,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.bold
  }
})
