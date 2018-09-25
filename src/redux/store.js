import { createStore } from 'redux';
import reducer from './reducers/videos-reducer';

// createStore recibe: reducer, estado inicial, y enhancer

const store = createStore(reducer, {
  video: 'la monja'
})

export default store;