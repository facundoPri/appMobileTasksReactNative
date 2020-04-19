import React, { Component } from 'react';

import { View, Text, StyleSheet, TextInput, StatusBar } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';

import { Button } from 'react-native-elements';

// import { Container } from './styles';

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 60,
    borderRadius: 50,
    backgroundColor: '#fff',
    bottom: 50,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modelContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 60,
    paddingBottom: 0,
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
    counter: 0,
    modalVisible: false,
  };

  toggleModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };

  render() {
    const { modalVisible } = this.state;

    return (
      <View style={styles.conteiner}>
        <Text>{String(modalVisible)}</Text>

        <Modal
          isVisible={modalVisible}
          onSwipeComplete={this.toggleModal}
          swipeDirection={['down']}
          onBackdropPress={this.toggleModal}
          style={styles.modal}
          backdropOpacity={0.2}
        >
          <View style={styles.modelContainer}>
            <StatusBar
              animated
              backgroundColor="rgba(0,0,0,0.2)"
              barStyle="light-content"
            />
            <TextInput
              style={styles.todoForm}
              placeholder="New To-Do"
              returnKeyType="send"
              onSubmitEditing={this.toggleModal}
            />
            <Button
              buttonStyle={styles.submitButton}
              icon={<Icon name="arrow-downward" size={20} color="#000" />}
              onPress={this.toggleModal}
            />
          </View>
        </Modal>

        <RectButton style={styles.addButton} onPress={this.toggleModal}>
          <Icon name="add" size={20} color="#000" />
        </RectButton>
      </View>
    );
  }
}
