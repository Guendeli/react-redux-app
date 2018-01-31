import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, View, NativeModules, LayoutAnimation} from 'react-native';
import {connect} from 'react-redux';

import {CardItem} from './common';
import * as actions from '../actions';

// Required for android to support LayoutAnimations
const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

class ListItem extends Component {

    componentWillUpdate(){
        LayoutAnimation.spring();
    }

    renderDesc(){
        const  { library, expanded} = this.props;

        if(expanded){
            return(
                <CardItem>
                    <Text
                        style={styles.descStyle}
                    >
                        {library.description}
                    </Text>
                </CardItem>
            );
        }
    }

    render(){
        const {library} = this.props;
        const {id, title} = this.props.library;

        return(
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id) }
            >
                <View>
                    <CardItem>
                        <Text
                        style={styles.titleStyle}
                        >
                            {title}
                        </Text>
                    </CardItem>
                    {this.renderDesc()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}    

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    },
    descStyle: {
        flex: 1,
        paddingLeft: 2,
        paddingRight: 2
    }

}

const mapStateToProps = (state, ownProps) => {

    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded };
}

export default connect(mapStateToProps, actions)(ListItem);