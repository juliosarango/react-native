import React, { Component } from 'react';
import Video from 'react-native-video';
import { StyleSheet, ActivityIndicator, Text } from 'react-native';
import Layout from '../components/layout';
import ControLayout from '../components/control-layout';
import PlayPause from '../components/play-pause';
import ControlLayout from '../components/control-layout';
import FullScreen from '../components/full-screen';
import ProgressBar from '../components/progressbar';
import TimeLeft from '../components/time-left';

class Player extends Component {

  componentDidMount() {
    console.log(this.player);
  }
  

  state = {
    loading: true,
    paused: false
  }
  //esa propiedad del video no funciona correctamente en android
  onBuffer = ({ isBuffering }) => {
    this.setState({
      loading: isBuffering
    })
  }

  onLoad = () => {
    this.setState({
      loading: false
    })
  }

  playPause = () => {
    this.setState({
      paused: !this.state.paused
    })
  }

  fullScreen = (event) => {

    console.log(this.player);
    
    let fullScreen = false;    
    if(!this.state.fullScreen) {
      this.player.presentFullscreenPlayer();      
      fullScreen = true;
    } else {
      this.player.dismissFullscreenPlayer();
      fullScreen = false;
    }

    this.setState({
      fullScreen
    })      
  }

  timeReadable = (time) => {
    let duration = time / 60;
    let mins = Math.floor(duration);
    let seconds = duration % 1;
    seconds = (seconds * 60) / 1000;
    let currentTime = (mins + seconds * 10).toFixed(2);
    return currentTime;
  }

  changeSliderStarted = (value) => (
    this.timeReadable(this.props.duration * value)
  )

  changeSliderFinished = (value) => (
    this.player.seek(value)
  )

  render() {
    return (
      <Layout
        loading={this.state.loading}
        video={
          <Video
            ref={(ref) => { this.player = ref} }
            source={{uri: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
            style={styles.video}
            resizeMode="contain"
            onBuffer={this.onBuffer}
            paused={this.state.paused}            
            //en el caso de que no funcione únicamente con onBuffer, utilizar onLoad
            //onLoad={this.onLoad}
         />      
        }
        loader={
          <ActivityIndicator color="red" />
        }
        controls={
          <ControlLayout>
            <PlayPause 
              onPress={this.playPause}
              paused={this.state.paused}
            />
            <ProgressBar 
              progress={this.props.progress}
              onChangeStarted={this.changeSliderStarted}
              onChangeFinished={this.changeSliderFinished}
            />
            <TimeLeft 
              currentTime={this.props.currentTime}
              duration={this.props.duration}
            />            
            <FullScreen 
               onPress={this.fullScreen}
            />            
          </ControlLayout>
        }
      />      
    )
  }
}

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  }
})

export default Player;