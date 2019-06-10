import React from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity, TextInput } from 'react-native'
// Styles
import styles from './Styles/FormSendSmsStyles'

import { Images } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import FullButton from '../Components/FullButton'
import Moment from 'moment';

export default class FormVerificacionScreen extends React.Component {

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
        <ScrollView showsVerticalScrollIndicator={false} bounces={false} style={styles.containerWhite}>
          <View style={styles.centered}>
            <Image source={Images.icbfClear} style={styles.logo} />
          </View>
          <Text style={styles.estandarText}>
          Estandar 1: Verifica la existencia del registro civil de las ninas y los ninos (y del documento de identidad de las mujeres gestantes). En los casos de no contarse orienta y hace seguimiento a la familia y cuidadoes y adelanta acciones ante la autoridad competente. segun corresponda 
          </Text>
          <View>
            <Text style={styles.questionText}>
            1. La copia del documento de identificacion de todas las ninas, ninos y mujeres gestantes reposa en sus respectivas carpetas y es legible y sin enmendaduras
            </Text>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch'}}>
              <FullButton styles={{width:100 }} text="SI" />

              <FullButton styles={{width:100 }} text="NO" />
            </View> 
          </View>
          <View>
            <Text style={styles.questionText}>
            2. En caso de no contar con los soportes del documento de identificacion de todas las ninas, ninos y mujeres gestantes, presernta alguna de las siguientes evidencias: actas, fotos, videos, listados de asistencia, registro de novedades, donde se desarrolle un proceso de sensibilizacion, orientacion y acompanamiento a las familias sobre la importancia del derecho (y las autoridades etnicas si aplica).
            </Text>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch'}}>
              <FullButton styles={{ width:80 }} text="SI" />
              <FullButton styles={{width:80 }}  text="NO" />
              <FullButton styles={{width:80 }}  text="N.A." />
            </View> 
          </View>   
          <View>
            <Text style={styles.questionText}>
            3. En caso de no contar ocn los soportes del documento de identidad de todas las ninas, ninos y mujeres gestantes  la USD pone a conociiento a la EAS dicha situacion. La notificacion a la EAS se encuenta registrada en el cuaderno de novedades.
            </Text>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch'}}>
              <FullButton styles={{ width:80 }} text="SI" />
              <FullButton styles={{width:80 }}  text="NO" />
              <FullButton styles={{width:80 }}  text="N.A." />
            </View> 
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

