import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/styles';
import {AppContext} from '../context/AppContext';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ModalRechazado({nombre, apellido, dni, instruccion}) {
  const {setRechazado} = useContext(AppContext);

  return (
    <View style={styles.modalRechazado}>
      <View style={styles.contenedoresBotonesModales}>
        <TouchableOpacity onPress={() => setRechazado(false)}>
        <Text style={styles.segundoTextoModales}>Volver a escanear</Text>
          <Icon name="exclamation-triangle" size={80} style={styles.iconosPaginaHome}/>
          <Text style={styles.textoModales}>Deshabilitado</Text>
          <Text style={styles.textoModales}>Nombre:{nombre}</Text>
          <Text style={styles.textoModales}>Apellido:{apellido}</Text>
          <Text style={styles.textoModales}>D.N.I:{dni}</Text>
          <Text style={styles.textoModales}>Instruccion:{instruccion}</Text>
          
        </TouchableOpacity>
      </View>
    </View>
  );
}
