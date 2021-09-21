import React, {useContext} from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {styles} from '../theme/styles';
import {AppContext} from '../context/AppContext';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ModalRechazado({nombre, apellido, dni, foto}) {
  const {setRechazado} = useContext(AppContext);

  return (
    <View style={styles.modalRechazado}>
      <View style={styles.contenedoresBotonesModales}>
        <TouchableOpacity onPress={() => setRechazado(false)}>
          <Text style={styles.segundoTextoModales}>Volver a escanear</Text>
          <Icon
            name="exclamation-triangle"
            size={80}
            style={styles.iconosPaginaHome}
          />
          <Image style={styles.imagenModalRechazado} source={{uri: foto}} />
          <Text style={styles.textoModalesNegro}>Inhabilitado</Text>
          <Text style={styles.textoModalesNegro}>Nombre Completo</Text>
          <Text style={styles.textoModales}>
            {apellido}, {nombre}{' '}
          </Text>

          <Text style={styles.textoModalesNegro}>DNI </Text>
          <Text style={styles.textoModales}>{dni}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
