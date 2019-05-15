import React from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity, TextInput } from 'react-native'
// Styles
import styles from './Styles/FormSendSmsStyles'

import { Images } from '../Themes'
import RoundedButton from '../Components/RoundedButton'

export default class FormSendSmsScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      question1: 'Question 1',
      question2: 'Question 2',
      question3: 'Question 3'
    };
  }
getTextToSend = () => {
	return this.state.question1 + " / " + this.state.question2 + " /  " + this.state.question3;
}


render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <TouchableOpacity onPress={this.props.screenProps.toggle} style={{
          position: 'absolute',
          paddingTop: 30,
          paddingHorizontal: 10,
          zIndex: 10
        }}>
          <Image source={Images.closeButton} />
        </TouchableOpacity>
        <ScrollView showsVerticalScrollIndicator={false} bounces={false} style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.igniteClear} style={styles.logo} />
          </View>

          <Text style={styles.sectionText}>
            Default screens for forms to get data to send in sms.
          </Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, color: 'white', margin: 20,paddingHorizontal: 10}}
            onChangeText={(question1) => this.setState({question1})}
            value={this.state.question1}
            selectTextOnFocus
          /> 
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, color: 'white', margin: 20,paddingHorizontal: 10}}
            onChangeText={(question2) => this.setState({question2})}
            value={this.state.question2}
            selectTextOnFocus
          /> 
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, color: 'white', margin: 20,paddingHorizontal: 10}}
            onChangeText={(question3) => this.setState({question3})}
            value={this.state.question3}
            selectTextOnFocus
          /> 
          <RoundedButton onPress={() => this.props.sendSms(this.getTextToSend())}>
            Send SMS
          </RoundedButton>
        </ScrollView>
        <View style={styles.banner}>
          <Text style={styles.bannerLabel}>Made with ❤️ by Infinite Red</Text>
        </View>
      </View>
    )
  }


}

