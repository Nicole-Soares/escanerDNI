import React, {useContext, useState} from 'react';
import {View, Text, Linking} from 'react-native';
import {styles} from '../theme/styles';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {StackScreenProps} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {usuarios} from '../../datos';
import ModalRechazado from '../modals/ModalRechazado';
import {AppContext} from '../context/AppContext';
import ModalAceptado from '../modals/ModalAceptado';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props extends StackScreenProps<any, any> {}

export default function Escaner({navigation}: Props) {
  const {setAceptado, setRechazado, aceptado, rechazado, dato, setDato} =
    useContext(AppContext);

  const getFiltrado = dni => {
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

  const ifScaned = e => {
    let dni = e.data.split('@')[4];
    let filtrado = getFiltrado(dni);
    definirResultado(filtrado);
  };

  return (
    <View style={styles.containerEscaner}>
      {aceptado ? (
        <ModalAceptado />
      ) : rechazado ? (
        <ModalRechazado
          nombre={dato.nombre}
          apellido={dato.apellido}
          dni={dato.dni}
          instruccion={dato.dni}
        />
      ) : (
        <View style={styles.containerEscaner}>
          <QRCodeScanner
            onRead={ifScaned}
            topContent={
              <Text style={styles.tituloEscaner}>Acerca la camara al QR</Text>
            }
            reactivate={true}
            reactivateTimeout={10}
            showMarker={true}
            markerStyle={{borderColor: '#FFF', borderRadius: 10, width:400, height:100}}
            permissionDialogMessage="Necesitamos permisos para acceder a la camara"
          />
          <View style={styles.contenedorBotonesEscaner}>
            <TouchableOpacity
              style={styles.botonIconoEscaner}
              onPress={() => navigation.navigate('PaginaHome')}>
              <Icon name="home" size={30} style={styles.iconosEscaner} />
              <Text style={styles.textoBotonesEscaner}>Ir al inicio</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.botonIconoEscaner}
              onPress={() => navigation.navigate('Manualmente')}>
              <Icon
                name="pencil-square-o"
                size={30}
                style={styles.iconosEscaner}
              />
              <Text style={styles.textoBotonesEscaner}>
                Ingresar manualmente
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}
