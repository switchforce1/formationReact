import React from 'react';
import { FlatList } from 'react-native';
import {Text} from 'react-native';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props)
    }

    _keyExtractor = (item, index) => `${item.id}`
    

    render() {
        return (
            <FlatList
                keyExtractor={this._keyExtractor}
                data={this.props.todos}
                renderItem={({ item }) => <Text key={item.id}>{item.id} - {item.title} </Text>}
            />
        );
    }
}