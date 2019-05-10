import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'

import { Images } from '../Themes'
import RoundedButton from '../Components/RoundedButton'

// Styles
import styles from './Styles/LaunchScreenStyles'

//some stuff

var SmsAndroid = require('react-native-sms-android');

export default class LaunchScreen extends Component {
  send_sms() {

    SmsAndroid.sms(
      '04129680087', // phone number to send sms to
      'This is the sms text', // sms body
      'sendDirect', // sendDirect or sendIndirect
      (err, message) => {
        if (err){
          console.log("error");
        } else {
          console.log(message); // callback message
        }
      }
    );

  }
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Image source={Images.ready} />
            <Text style={styles.sectionText}>
              This probably isn't what your app is going to look like. Unless your designer handed you this screen and, in that case, congrats! You're ready to ship. For everyone else, this is where you'll see a live preview of your fully functioning app using Ignite.
            </Text>
          </View>

          <DevscreensButton />
          <RoundedButton onPress={this.send_sms}>
            Send SMS
          </RoundedButton>
        </ScrollView>
      </View>
    )
  }
}
