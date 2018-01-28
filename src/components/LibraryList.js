import React, { Component } from 'react';
import {FlatList, View, Text} from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  renderItem({item}){
    const {title} = item;
    return <Text> {title} </Text>
  }

  renderRow(libraries){
    return <ListItem 
      library={libraries.item}
    />
  }
  render() {
    return(
      <FlatList 
        data={this.props.libraries}
        renderItem={this.renderRow}
        keyExtractor={({id}) => id}
      />
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);