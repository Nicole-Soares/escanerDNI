import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AppContext} from '../context/AppContext';

export default function ModalAceptado() {
  const {setAceptado} = useContext(AppContext);

  return (
    <View style={styles.modalAceptado}>
      <View style={styles.contenedoresBotonesModales}>
        <TouchableOpacity onPress={() => setAceptado(false)}>
        <Text style={styles.segundoTextoModales}>Volver a escanear</Text>
          <Icon name="check-circle" size={80} style={styles.iconoModales}/>
          <Text style={styles.textoModales}> Habilitado</Text>
          
        </TouchableOpacity>
      </View>
    </View>
  );
}
