import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

//<Text style={styles.genre}>{props.genres[0]}</Text>

Category = (props) => {

  return (    
    <ImageBackground
      style={styles.wrapper}
      source={{uri: props.background_image}}
    >
      {
        (props.genres) ? 
           <Text style={styles.genre}>{props.genres[0]}</Text> :
           <Text style={styles.genre}>Sin Categoria</Text>
      }      
    </ImageBackground>
  )

}

const styles = StyleSheet.create({
  wrapper: {
    width: 250,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',    
    justifyContent: 'center',
    alignItems: 'center',
  },
  genre: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    // para crear una sombra en la imagen. No se nota en android.
    textShadowColor: 'rgba(0,0,0,.75)',
    textShadowOffset: {
      width: 2,
      height: 2
    },
    textShadowRadius: 0,
  }
})

export default Category;