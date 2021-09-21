import {StyleSheet} from 'react-native';
import {text} from 'stream/consumers';
export const styles = StyleSheet.create({
  containerPrincipal: {
    width: '100%',
    height: '100%',
  },
  containerPaginaHome: {
    width: '100%',
    height: '100%',
    backgroundColor: '#CDD5D5',
  },
  containerBotonesPaginaHome: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  botonesPaginaHome: {
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#BDDFE7',
    width: 300,
    height: 100,
    backgroundColor: '#BDDFE7',
  },
  textoBotonesPaginaHome: {
    textAlign: 'center',
    color: '#9C9C9C',
    fontSize: 25,
  },
  iconosPaginaHome: {
    textAlign: 'center',
    color: '#4F5050',
    marginBottom: -10,
  },
  containerEscaner: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: '#CDD5D5',
  },
  tituloEscaner: {
    fontSize: 20,
    position: 'absolute',
    top: 10,
    fontWeight: 'bold',
    color: '#4F5050',
  },
  contenedorBotonesEscaner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
  textoBotonesEscaner: {
    textAlign: 'center',
    color: '#4F5050',
    fontSize: 20,
  },
  botonIconoEscaner: {
    width: 300,
    height: 50,
    backgroundColor: '#BDDFE7',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#BDDFE7',
    marginBottom: 30,
  },
  iconosEscaner: {
    textAlign: 'center',
    color: '#4F5050',
    marginBottom: -10,
  },
  contenedorBotonesManualmente: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  textoBotonesManual: {
    textAlign: 'center',
    color: '#4F5050',
    fontSize: 25,
  },
  botonIconoManual: {
    width: 300,
    height: 100,
    backgroundColor: '#BDDFE7',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#BDDFE7',
    marginBottom:10
  },
  modalAceptado: {
    backgroundColor: '#67C206',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contenedoresBotonesModales: {
    width: '100%',
    height: 50,
    display: 'flex',
    justifyContent: 'center',
  },
  textoModales: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
  segundoTextoModales: {
    color: 'black',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
  },
  iconoModales: {
    textAlign: 'center',
    color: 'white',
  },
  modalRechazado: {
    backgroundColor: 'red',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
