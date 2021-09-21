import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PaginaHome from '../screen/PaginaHome';
import Escaner from '../screen/Escaner';
import Manualmente from '../screen/Manualmente';
import ModalAceptado from '../modals/ModalAceptado';
import ModalRechazado from '../modals/ModalRechazado';

const Stack = createStackNavigator();

export function StackNavegacion() {
  return (
    <Stack.Navigator
    initialRouteName="PaginaHome"
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="PaginaHome"
        options={{title: 'Pagina de inicio'}}
        component={PaginaHome}
      />
      <Stack.Screen
        name="Escaner"
        options={{title: 'Pagina de QR'}}
        component={Escaner}
      />
      <Stack.Screen
      name="Manualmente"
      options={{title: "Ingresar DNI manualmente"}}
      component={Manualmente}
      />
      <Stack.Screen
      name="ModalAceptado"
      component={ModalAceptado}
      />
      <Stack.Screen
      name="ModalRechazado"
      component={ModalRechazado}
      />
    </Stack.Navigator>
  );
}
