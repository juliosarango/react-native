import React from 'react';
import { 
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';

PlayPause = (props) => {
  // TouchableHighlight: Cambia de color cuando el boton se presion
  return (
    <TouchableHighlight 
      onPress={props.onPress}
      style={styles.container}
      //sombrear todo el espacio cuando se hace click, esto esá asociado al TouchableHighlight
      underlayColor="red"
      //para que el botón tenga efecto fuera de su área de dibujo
      hitSlop={{
        left: 5,
        top: 5,
        bottom: 5,
        right: 5
      }}
    >
      {
        props.paused ? 
        <Text style={styles.button}>Play</Text>
        :
        <Text style={styles.button}>Pause</Text>
      }
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  container: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: 25,
    marginRight: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: 'gray',
  }

})

export default  PlayPause;
