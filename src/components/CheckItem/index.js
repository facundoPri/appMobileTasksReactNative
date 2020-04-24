import React, { Component } from 'react';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import IconF from 'react-native-vector-icons/Feather';

// import { Container } from './styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
    height: 50,
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
    borderColor: '#999',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 10,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  todoText: {
    fontSize: 20,
    marginBottom: 3,
  },
  check: {
    marginRight: 10,
  },
  todoTextChecked: {
    color: '#999',
    fontSize: 20,
    marginBottom: 3,
    textDecorationLine: 'line-through',
  },
  trash: {
    justifyContent: 'flex-end',
  },
});

export default class CheckItem extends Component {
  state = {
    checked: this.props.data.checked,
  };

  toggleCheck = () => {
    this.setState({ checked: !this.state.checked });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.left}>
          <TouchableOpacity style={styles.check} onPress={this.toggleCheck}>
            {this.state.checked ? (
              <IconMI name="check-box" size={25} color="#000" />
            ) : (
              <IconMI name="check-box-outline-blank" size={25} color="#000" />
            )}
          </TouchableOpacity>
          {this.state.checked ? (
            <Text style={styles.todoTextChecked}>{this.props.data.todo}</Text>
          ) : (
            <Text style={styles.todoText}>{this.props.data.todo}</Text>
          )}
        </View>
        <TouchableOpacity onPress={this.props.function}>
          <IconF style={styles.rigth} name="trash-2" size={25} color="#000" />
        </TouchableOpacity>
      </View>
    );
  }
}
