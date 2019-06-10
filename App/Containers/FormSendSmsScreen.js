import React from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity, TextInput } from 'react-native'
// Styles
import styles from './Styles/FormSendSmsStyles'

import { Images } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import Moment from 'moment';
var esLocale = require('moment/locale/es');

export default class FormSendSmsScreen extends React.Component {

  constructor(props) {
    super(props);
    Moment.locale('es', esLocale)
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

findCodigoCuentame = (codigoCuentame)  => {
  this.setState({codigoCuentame})
  if (codigoCuentame === "1234")
    this.setState({unitServicio: "Unidad 5", direccion: "Calle 100, Bogota"})
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
            onChangeText={(admServicio) => this.setState({admServicio})}
            value={this.state.admServicio}
            selectTextOnFocus
          /> 
          <TextInput
            style={styles.input}
            onChangeText={(nit) => this.setState({nit})}
            value={this.state.nit}
            selectTextOnFocus
          />           
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextInput
            style={styles.input}
            onChangeText={(codigoCuentame) => this.findCodigoCuentame(codigoCuentame)}
            value={this.state.codigoCuentame}
            selectTextOnFocus
          />           
          <TextInput
            style={styles.inputOnlyRead}
            //onChangeText={(unitServicio) => this.setState({unitServicio})}
            value={this.state.unitServicio}
            editable = {false}
            //selectTextOnFocus
          /> 
          </View>
          <TextInput
            style={styles.inputOnlyRead}
            //onChangeText={(direccion) => this.setState({direccion})}
            value={this.state.direccion}
            editable = {false}
           // selectTextOnFocus
          />
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextInput
            style={styles.input}
            onChangeText={(infantes) => this.setState({infantes})}
            value={this.state.infantes}
            selectTextOnFocus
          /> 
          <TextInput
            style={styles.input}
            onChangeText={(mujeresGestantes) => this.setState({mujeresGestantes})}
            value={this.state.mujeresGestantes}
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

