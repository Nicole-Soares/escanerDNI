import React, {useState, useContext} from 'react';
import {TextInput, View, Text, Button, Alert} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../theme/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {usuarios} from '../../datos';
import {AppContext} from '../context/AppContext';
import ModalAceptado from '../modals/ModalAceptado';
import ModalRechazado from '../modals/ModalRechazado';

interface Props extends StackScreenProps<any, any> {}

export default function Manualmente({navigation}: Props) {
  const [dni, setDni] = useState('');
  const {setAceptado, setRechazado, aceptado, rechazado, dato, setDato} =
    useContext(AppContext);

  const getFiltrado = () => {
    let filtrados = usuarios.filter(incidencia => incidencia.dni === dni);
    return filtrados[0];
  };

  const definirResultado = incidencia => {
    if (incidencia.estado === 'INHABILITADO') {
      setRechazado(true);
      setDato(incidencia);
    } else if (incidencia.estado === 'HABILITADO') {
      setAceptado(true);
    } else {
      console.log('no se encuentra esa persona');
    }
  };

  const verificar = () => {
    if (dni === '') {
      Alert.alert('tiene que ingresar un dni valido ');
    } else {
      let filtrado = getFiltrado();
      definirResultado(filtrado);
    }
  };

  return (
    <View style={{ height:"100%"  }}>
      {aceptado ? (
        <ModalAceptado />
      ) : rechazado ? (
        <ModalRechazado
          nombre={dato.nombre}
          apellido={dato.apellido}
          dni={dato.dni}
          foto={dato.foto}
        />
      ) : (
        <View style={styles.contenedorManualmente}>
          <View style={styles.contenedorInputManual}>
            <TextInput
              style={styles.input}
              placeholder="Ingrese DNI, sin puntos"
              placeholderTextColor="rgba(255,255,255,0.4)"
              underlineColorAndroid="white"
              keyboardType="numeric"
              selectionColor="gray"
              onChangeText={valor => setDni(String(valor))}
              value={dni}
            />
            <TouchableOpacity onPress={verificar} style={styles.botonManual}>
              <Text style={styles.textoBotonManual}>Verificar DNI</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.contenedorBotonesManualmente}>
            <TouchableOpacity
              style={styles.botonIconoManual}
              onPress={() => navigation.navigate('PaginaHome')}>
              <Icon name="home" size={40} style={styles.iconosPaginaHome} />
              <Text style={styles.textoBotonesManual}>Ir al inicio</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.botonIconoManual}
              onPress={() => navigation.navigate('Escaner')}>
              <Icon
                name="camera-retro"
                size={40}
                color="black"
                style={styles.iconosPaginaHome}
              />
              <Text style={styles.textoBotonesManual}>Escanear DNI</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}
