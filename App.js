import React, {Component} from 'react';
import { Text } from 'react-native';
import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import ListaSugerencias from './src/videos/containers/lista-sugerencias';
import ListaCategorias from './src/videos/containers/lista-categorias';
import API from './src/utils/api'
import Player from './src/player/containers/player';
import { Provider } from 'react-redux';
import store from './src/redux/store';

export default class App extends Component {

  state = {   
  }
/*
  state = {
    sugerencias: [],
    listaCategorias: []
  }
*/
  async componentDidMount() {
    const suggestionList = await API.getSuggestion(10);
    const categoryList = await API.getPeliculas(); 
    
    store.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    })

    store.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList
      }
    })
  }

  render() {
    return (   
      <Provider store={store}>
        <Home>
          <Header />
          <Text>buscador</Text>
          <Text>categorias</Text>
          <Player />
          <ListaCategorias />                      
          <ListaSugerencias  />                   
        </Home>

      </Provider>         
    );
  }
}


