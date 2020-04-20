import React, { Component } from 'react';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import { Container } from './styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    height: 50,
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
    borderColor: '#999',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  todoText: {
    fontSize: 20,
  },
  check: {
    margin: 10,
  },
  todoTextChecked: {
    fontSize: 20,
    textDecorationLine: 'line-through',
  },
});

export default class CheckItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: this.props.data.todo,
      checked: this.props.data.checked,
    };
  }

  toggleCheck = () => {
    this.setState({ checked: !this.state.checked });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.check} onPress={this.toggleCheck}>
          {this.state.checked ? (
            <Icon name="check-box" size={25} color="#000" />
          ) : (
            <Icon name="check-box-outline-blank" size={25} color="#000" />
          )}
        </TouchableOpacity>
        {this.state.checked ? (
          <Text style={styles.todoTextChecked}>{this.state.todo}</Text>
        ) : (
          <Text style={styles.todoText}>{this.state.todo}</Text>
        )}
      </View>
    );
  }
}
