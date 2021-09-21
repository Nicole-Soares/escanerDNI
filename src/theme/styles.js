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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  botonesPaginaHome: {
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#BDDFE7',
    width: 170,
    height: 170,
    backgroundColor: '#BDDFE7',
    marginBottom: 20,
  },
  textoBotonesPaginaHome: {
    textAlign: 'center',
    color: '#9C9C9C',
    fontSize: 25,
  },
  iconosPaginaHome: {
    textAlign: 'center',
    color: '#4F5050',
    marginTop: 30,
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 100,
  },
  textoBotonesEscaner: {
    textAlign: 'center',
    color: '#4F5050',
    fontSize: 20,
  },
  botonIconoEscaner: {
    width: 150,
    height: 70,
    backgroundColor: '#BDDFE7',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#BDDFE7',
    textAlign: 'center',
  },
  iconosEscaner: {
    textAlign: 'center',
    color: '#4F5050',
    marginBottom: -10,
  },
  contenedorManualmente: {
    height: '100%',
    width: '100%',
  },
  contenedorInputManual: {
    height: 200,
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 80,
  },
  input: {
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: '#BDDFE7',
    marginBottom: 10,
  },
  botonManual: {
    backgroundColor: '#BDDFE7',
    width: 100,
    borderRadius: 15,
    borderWidth: 2,
    alignSelf: 'center',
  },
  textoBotonManual: {
    textAlign: 'center',
    color: '#4F5050',
    fontSize: 20,
  },
  contenedorBotonesManualmente: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textoBotonesManual: {
    textAlign: 'center',
    color: '#4F5050',
    fontSize: 15,
  },
  botonIconoManual: {
    width: 100,
    height: 100,
    backgroundColor: '#BDDFE7',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#BDDFE7',
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
  textoModalesNegro:{
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    fontWeight:"bold"
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
    marginBottom:10
  },
  imagenModalRechazado: {
    width: 200,
    height: 200,
    justifyContent:"center",
    alignSelf:"center"
  },
});
