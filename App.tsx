import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {styles} from './src/theme/styles';
import {StackNavegacion} from './src/navegacion/StackNavegacion';
import AppProvider from './src/context/AppContext';


export default function App() {
    
  return (
    <NavigationContainer>
      <AppProvider>
        <View style={styles.containerPrincipal}>
          <StackNavegacion />
        
        </View>
      </AppProvider>
    </NavigationContainer>
  );
}
