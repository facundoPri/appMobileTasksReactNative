import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <Routes />
    </>
  );
}
