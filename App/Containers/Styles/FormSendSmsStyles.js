import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    //marginBottom: 60,
    paddingTop: Metrics.section,
    //paddingBottom: 100
  },
  containerWhite: {
    marginTop: 60,
    marginHorizontal:15,
    paddingTop: Metrics.section,
    //paddingBottom: 30,
    backgroundColor: 'white', 
    borderRadius: 5,  
    borderColor: 'gray', 
    borderWidth: 2,  
  },  
  logo: {
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain',
    marginTop: Metrics.doubleBaseMargin
  },
  buttonsContainer: {
    flexDirection: 'row',
    flex: 1
  },
  centered: {
    alignItems: 'center'
  },
  componentButton: {
    borderColor: Colors.border,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1
  },
  apiButton: {
    borderColor: Colors.border,
    borderRightWidth: 1,
    borderBottomWidth: 1
  },
  usageButton: {
    borderColor: Colors.border,
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  deviceButton: {
    borderColor: Colors.border,
    borderRightWidth: 1,
    borderTopWidth: 1
  },
  questionText: {
    textAlign: 'justify',
    fontFamily: Fonts.base,
    fontSize: 14,
    marginHorizontal: Metrics.baseMargin,
    lineHeight: 30,
    marginVertical: Metrics.doubleBaseMargin,
    color: 'black'
  },
  estandarText: {
    textAlign: 'justify',
    fontFamily: Fonts.base,
    fontSize: 16,
    marginHorizontal: Metrics.baseMargin,
    lineHeight: 30,
    marginVertical: Metrics.doubleBaseMargin,
    color: 'black'
  },
  sectionText: {
    textAlign: 'center',
    fontFamily: Fonts.base,
    fontSize: 14,
    marginHorizontal: Metrics.baseMargin,
    lineHeight: 30,
    marginVertical: Metrics.doubleBaseMargin,
    color: Colors.text
  },
  banner: {
    position: 'absolute',
    width: Metrics.screenWidth,
    backgroundColor: Colors.banner,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0,
    height: 36
  },
  bannerLabel: {
    ...Fonts.style.h5,
    fontSize: 12,
    color: Colors.snow
  },
  input: {
    flex: 1,
    backgroundColor: 'white', 
    borderRadius: 5, 
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 2, 
    color: 'black', 
    marginHorizontal: 20,
    marginVertical: 8,
    paddingHorizontal: 10         
  },
  inputOnlyRead: {
    flex: 1,
    backgroundColor: '#D8D8D8', 
    borderRadius: 5, height: 40, 
    borderColor: 'gray', 
    borderWidth: 2, 
    color: 'black', 
    marginHorizontal: 20,
    marginVertical: 8,
    paddingHorizontal: 10         
  },
  bottom: {
    //flex: 1,
    justifyContent: 'flex-end',
    height: 60
    //marginBottom: Metrics.section
  }
})
