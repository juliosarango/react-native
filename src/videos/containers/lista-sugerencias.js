import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import Layout from '../components/lista-sugerencias-layout';
import ListaVacia from '../components/lista-vacia';
import Separator from '../../sections/components/vertical-separator';
import Sugerencias from '../components/sugerencias'
import { connect } from 'react-redux';


class ListaSugerencias extends Component {

  renderEmpty = () => (<ListaVacia text='No hay elementos'/>);

  renderItem = ({item}) => (<Sugerencias {...item} />);
    
  separator = () => (<Separator />);

  keyExtractor = (item) => (item.id.toString());

  render() {    
    return (
      <Layout
        title='Recomendado para ti'
      >
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.separator}
          renderItem={this.renderItem}
        />
      </Layout>        
    )  
  }
}

function mapStateToProps(state) {
  return {
    list: state.suggestionList
  }
}

export default connect(mapStateToProps)(ListaSugerencias)