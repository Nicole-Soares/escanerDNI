import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../theme/styles';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props extends StackScreenProps<any, any> {}

export default function PaginaHome({navigation}: Props) {
  return (
    <View style={styles.containerPaginaHome}>
      <View style={styles.containerBotonesPaginaHome}>
        <TouchableOpacity
          style={styles.botonesPaginaHome}
          onPress={() => navigation.navigate('Escaner')}>
          <Icon
            name="camera-retro"
            size={40}
            color="black"
            style={styles.iconosPaginaHome}
          />
          <Text style={styles.textoBotonesPaginaHome}>Escanear DNI</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botonesPaginaHome}
          onPress={() => navigation.navigate('Manualmente')}>
          <Icon
            name="pencil-square-o"
            size={40}
            color="black"
            style={styles.iconosPaginaHome}
          />
          <Text style={styles.textoBotonesPaginaHome}>
            Ingresar DNI manualmente
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
