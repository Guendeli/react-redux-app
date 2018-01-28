import React, {Component} from 'react';
import {Text} from 'react-native';
import {CardItem} from './common';

class ListItem extends Component {
    render(){
        const {library} = this.props;

        return(
            <CardItem>
                <Text
                style={styles.titleStyle}
                >
                    {library.title}
                </Text>
            </CardItem>
        );
    }
}    

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}
export default ListItem;