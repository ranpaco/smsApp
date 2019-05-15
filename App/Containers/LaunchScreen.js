import React, { Component } from 'react'
import { 
  ScrollView, 
  Text, 
  Image, 
  View, 
  Platform, 
  PermissionsAndroid, 
  Alert, 
  TextInput,
  Modal } from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'

import { Images } from '../Themes'
import RoundedButton from '../Components/RoundedButton'

// Styles
import styles from './Styles/LaunchScreenStyles'

//some stuff

import FormSendSmsScreen from './FormSendSmsScreen'

//var SmsAndroid = require('react-native-sms-android');
var SmsAndroid = require('react-native-android-sms');
export default class LaunchScreen extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      smsNumber: 'Phone Number',
      showModal: false 
    };
  }

 componentDidMount = () => {
   //Checking for the permission just after component loaded
    async function requestSMSPermission() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.SEND_SMS,{
            'title': 'AndoridPermissionExample App SMS Permission',
            'message': 'AndoridPermissionExample App needs access to SMS '
          }
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          //To Check, If Permission is granted
          alert("You can use SMS");
        } else {
          alert("SMS permission denied");
        }
      } catch (err) {
        alert("err",err);
        console.warn(err)
      }
    }
    if (Platform.OS === 'android') {
        //Calling the permission function
        requestSMSPermission();
    }else{
        alert('IOS device found');
    }
 }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  send_sms = (text) => {

    var SmsAndroid = require('react-native-android-sms');
    //var text = "Hello ... QASH I AM YOUR FATHER !!!!!";
    var addressList = {
        addressList: [
            this.state.smsNumber
        ]
    }
    console.log({addressList});
    SmsAndroid.send(JSON.stringify(addressList), text, (fail) => {
            console.log("OH Snap: " + fail)
        },
        (status) => {
            console.log('Status: ', status);
            
        });
    this.setState({ showModal: !this.state.showModal })
    alert("SMS SENT")

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
            Send SMS
            </Text>
          </View>

          <DevscreensButton />
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, color: 'white', marginHorizontal: 20,paddingHorizontal: 10}}
            onChangeText={(smsNumber) => this.setState({smsNumber})}
            value={this.state.smsNumber}
            selectTextOnFocus
          />  
          <RoundedButton onPress={() => this.toggleModal()}>
            Continue
          </RoundedButton>
          <Modal
            visible={this.state.showModal}
            onRequestClose={this.toggleModal}>
            <FormSendSmsScreen screenProps={{ toggle: this.toggleModal }} sendSms={this.send_sms} />
          </Modal>
        </ScrollView>
      </View>
    )
  }
}
