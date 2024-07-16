import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import React from 'react';
import colors from '../themes/Colors';

export default function CustomTextInput({
  imageSource,
  onChangeText,
  value,
  ...rest
}) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>Task</Text>
      <View style={styles.inputContainer}>
        <Image source={imageSource} style={styles.image} />
        <TextInput
          {...rest}
          placeholder="Task Ara"
          onChangeText={onChangeText}
          value={value}
          style={styles.textInput}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 15,
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    padding: 0,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 15,
    borderRadius: 15,
  },
});
