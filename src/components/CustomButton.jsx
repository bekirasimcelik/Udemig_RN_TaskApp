import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function CustomButton({label}) {
  return (
    <TouchableOpacity>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
}
