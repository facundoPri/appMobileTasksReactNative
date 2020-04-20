import React, { Component } from 'react';

import { View, Text, StyleSheet, TextInput, StatusBar } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import { Button } from 'react-native-elements';
import CheckItem from '../../components/CheckItem';
import TodoModel from '../../Models/TodoModel';

// import { Container } from './styles';

const data = [new TodoModel('test')];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    bottom: 30,
    right: 30,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modelContainer: {
    backgroundColor: '#fff',
    height: 100,
    paddingBottom: 0,
  },
  titleForm: {
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  modelFormContainer: {
    flexDirection: 'row',
  },
  todoForm: {
    flex: 1,
    height: 40,
    backgroundColor: '#eee',
    borderRadius: 4,
    margin: 10,
  },
  submitButton: {
    height: 40,
    width: 40,
    backgroundColor: '#eee',
    marginTop: 10,
    marginRight: 10,
    marginBottom: 10,
  },
});

export default class Todos extends Component {
  state = {
    modalVisible: false,
    data,
  };

  toggleModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };

  render() {
    const { modalVisible } = this.state;

    return (
      <View style={styles.container}>
        <View>
          <CheckItem data={this.state.data[0]} />
          <CheckItem data={this.state.data[0]} />
          <CheckItem data={this.state.data[0]} />
        </View>
        <Modal
          isVisible={modalVisible}
          onSwipeComplete={this.toggleModal}
          swipeDirection={['down']}
          onBackdropPress={this.toggleModal}
          style={styles.modal}
          backdropOpacity={0.2}
          useNativeDriver
        >
          <View style={styles.modelContainer}>
            <StatusBar
              animated
              backgroundColor="rgba(0,0,0,0.2)"
              barStyle="light-content"
            />
            <Text style={styles.titleForm}>NEW TODO</Text>
            <View style={styles.modelFormContainer}>
              <TextInput
                style={styles.todoForm}
                placeholder="New To-Do"
                returnKeyType="send"
                onSubmitEditing={this.toggleModal}
                autoFocus
              />
              <Button
                buttonStyle={styles.submitButton}
                icon={<Icon name="add" size={20} color="#000" />}
                onPress={this.toggleModal}
              />
            </View>
          </View>
        </Modal>
        <RectButton style={styles.addButton} onPress={this.toggleModal}>
          <Icon name="add" size={20} color="#000" />
        </RectButton>
      </View>
    );
  }
}
