import React from 'react';

import { 
  StyleSheet,
  Text, 
  TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

FullScreen = (props) => {
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
    <Icon name="fullscreen" size={30} color="#98ca3f" /> 
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: 25,
    marginVertical: 5,
    marginLeft: 10,

  }
})

export default FullScreen;