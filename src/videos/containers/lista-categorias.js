import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import Layout from '../components/category-list-layout';
import ListaVacia from '../components/lista-vacia';
import Separator from '../../sections/components/horizontal-separator';
import Category from '../components/category';
import { connect } from 'react-redux';

class ListaCategorias extends Component {
  renderEmpty = () => (<ListaVacia text='No hay elementos'/>);

  renderItem = ({item}) => {    
    return <Category {...item} />
  };
    
  separator = () => (<Separator />);

  keyExtractor = (item) => (item.id.toString());
  
  render() {    
    //utilizamos la propiedad horizontal para hacer que la lista sea horizontal
    
    return (
      <Layout
        title='Categorias'
      >      
        <FlatList
          horizontal
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
    list: state.categoryList
  };
}


export default connect(mapStateToProps)(ListaCategorias);