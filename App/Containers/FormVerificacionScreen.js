import React from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity, TextInput } from 'react-native'
// Styles
import styles from './Styles/FormSendSmsStyles'

import { Images } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import FullButton from '../Components/FullButton'

import {
  SelectMultipleGroupButton
} from "react-native-selectmultiple-button";
export default class FormVerificacionScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      s11: '',
      s12: '',
      s13: ''
    }
   
  }
getTextToSend = () => {
	return this.state.s11 + " / " + this.state.s12 + " /  " + this.state.s13;
}

  _onRadioGroupButtonSingleTap(nameTap, valueTap) {
    this.setState({
      [nameTap]: valueTap
    });
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
          <View style={{paddingBotton: 100}}>
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
            <View style={{paddingHorizontal: 10, flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch'}}>
            <SelectMultipleGroupButton
              multiple={false}
              //defaultSelectedIndexes={defaultSelectedIndex_group_gender}
              containerViewStyle={{ flexDirection: "row", justifyContent: 'space-between', width: "100%" }}
              highLightStyle={{
                borderColor: "gray",
                backgroundColor: "transparent",
                textColor: "gray",
                borderTintColor: "green",
                backgroundTintColor: "green",
                textTintColor: "white"
              }}
              buttonViewStyle={{ width: 60, height: 60, borderRadius: 30 }}
              singleTap={valueTap => {
                this._onRadioGroupButtonSingleTap("s11",valueTap);
              }}
              group={[{ value: "S", displayValue: "SI" },{ value: "N", displayValue: "NO" },]}
            />              
            </View> 
          </View>
          <View>
            <Text style={styles.questionText}>
            2. En caso de no contar con los soportes del documento de identificacion de todas las ninas, ninos y mujeres gestantes, presernta alguna de las siguientes evidencias: actas, fotos, videos, listados de asistencia, registro de novedades, donde se desarrolle un proceso de sensibilizacion, orientacion y acompanamiento a las familias sobre la importancia del derecho (y las autoridades etnicas si aplica).
            </Text>
            <View style={{paddingHorizontal: 10, flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch'}}>
<SelectMultipleGroupButton
              multiple={false}
              //defaultSelectedIndexes={defaultSelectedIndex_group_gender}
              containerViewStyle={{ flexDirection: "row", justifyContent: 'space-between', width: "100%" }}
              highLightStyle={{
                borderColor: "gray",
                backgroundColor: "transparent",
                textColor: "gray",
                borderTintColor: "green",
                backgroundTintColor: "green",
                textTintColor: "white"
              }}
              buttonViewStyle={{ width: 60, height: 60, borderRadius: 30 }}
              singleTap={valueTap => {
                this._onRadioGroupButtonSingleTap("s12", valueTap);
              }}
              group={[{ value: "S", displayValue: "SI" },{ value: "N", displayValue: "NO" },{ value: "A", displayValue: "N.A." }]}
            />  
            </View> 
          </View>   
          <View>
            <Text style={styles.questionText}>
            3. En caso de no contar ocn los soportes del documento de identidad de todas las ninas, ninos y mujeres gestantes  la USD pone a conociiento a la EAS dicha situacion. La notificacion a la EAS se encuenta registrada en el cuaderno de novedades.
            </Text>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch', paddingBottom:50}}>
<SelectMultipleGroupButton
              multiple={false}
              //defaultSelectedIndexes={defaultSelectedIndex_group_gender}
              containerViewStyle={{ flexDirection: "row", justifyContent: 'space-between', width: "100%" }}
              highLightStyle={{
                borderColor: "gray",
                backgroundColor: "transparent",
                textColor: "gray",
                borderTintColor: "green",
                backgroundTintColor: "green",
                textTintColor: "white"
              }}
              buttonViewStyle={{ width: 60, height: 60, borderRadius: 30 }}
              singleTap={valueTap => {
                this._onRadioGroupButtonSingleTap("s13", valueTap);
              }}
              group={[{ value: "S", displayValue: "SI" },{ value: "N", displayValue: "NO" },{ value: "A", displayValue: "N.A." }]}
            /> 
            </View> 
          </View>   
          </View>
        </ScrollView>
        <View style={styles.bottom}>
          <RoundedButton onPress={() => this.props.sendSms(this.getTextToSend(), 2)}>
            Send SMS
          </RoundedButton>         
        </View>
      </View>
    )
  }


}

