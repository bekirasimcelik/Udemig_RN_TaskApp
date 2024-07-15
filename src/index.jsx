import {View, Text} from 'react-native';
import React from 'react';
import Routes from './navigation/Routes';
import {NavigationContainer} from '@react-navigation/native';

export default function index() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
