import React from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity, TextInput } from 'react-native'
// Styles
import styles from './Styles/FormSendSmsStyles'

import { Images } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import Moment from 'moment';

export default class FormSendSmsScreen extends React.Component {

  constructor(props) {
    super(props);
    Moment.locale('es')
    let date = new Date()
    this.state = { 
      question1: 'Question 1',
      question2: 'Question 2',
      question3: 'Question 3',
      fechaVisita: Moment(date).format('d MMM YYYY'),
      horaVisita: Moment(date).format('hh:mm a'),
      profesional: 'Profesional Encargado',
      cedula: 'Cedula',
      admServicio: 'Administrador de Servicio',
      nit: 'NIT',
      unitServicio: 'Unidad de Servicio',
      codigoCuentame: 'Codigo Cuentame',
      direccion: 'Direccion',
      infantes: 'Infantes Evidenciados',
      mujeresGestantes: 'Mujeres Gestantes'
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
            <Image source={Images.icbfClear} style={styles.logo} />
          </View>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextInput
            style={styles.inputOnlyRead}
            //onChangeText={(fechaVisita) => this.setState({fechaVisita})}
            value={this.state.fechaVisita}
            editable = {false}
          /> 
          <TextInput
            style={styles.inputOnlyRead}
            //onChangeText={(question3) => this.setState({question3})}
            value={this.state.horaVisita}
            //selectTextOnFocus
            editable = {false}
          /> 
          </View>  
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextInput
            style={styles.input}
            onChangeText={(profesional) => this.setState({profesional})}
            value={this.state.profesional}
            selectTextOnFocus
          /> 
          <TextInput
            style={styles.input}
            onChangeText={(cedula) => this.setState({cedula})}
            value={this.state.cedula}
            selectTextOnFocus
          /> 
          </View>
        
          <TextInput
            style={styles.input}
            onChangeText={(question1) => this.setState({question1})}
            value={this.state.question1}
            selectTextOnFocus
          /> 
          <TextInput
            style={styles.input}
            onChangeText={(question1) => this.setState({question1})}
            value={this.state.question1}
            selectTextOnFocus
          />           
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextInput
            style={styles.input}
            onChangeText={(question2) => this.setState({question2})}
            value={this.state.question2}
            selectTextOnFocus
          /> 
          <TextInput
            style={styles.inputOnlyRead}
            onChangeText={(question3) => this.setState({question3})}
            value={this.state.question3}
            selectTextOnFocus
          /> 
          </View>

        </ScrollView>
        <View style={styles.bottom}>
          <RoundedButton onPress={() => this.props.sendSms(this.getTextToSend())}>
            Send SMS
          </RoundedButton>         
        </View>
      </View>
    )
  }


}

