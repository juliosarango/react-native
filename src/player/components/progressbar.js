import React from 'react';
import { View, StyleSheet, Slider } from 'react-native';

ProgressBar = (props) => {
  return (
    <View style={styles.progress}>
      <Slider
        maximumValue={props.duration}
        minimumValue={0}
        onValueChange={props.onChangeStarted}
        onSlidingComplete={props.onChangeFinished}
        style={styles.slider}
        value={props.progress}
        maximumTrackTintColor="rgb(255,255,255,.4)"
        minimumTrackTintColor="#98ca3f"
        thumbTintColor="white"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  progress: {
    width: '65%'
  },

  slider: {

  }
})

export default ProgressBar;