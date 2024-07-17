import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import LottieView from 'lottie-react-native';
import CustomTextInput from '../components/CustomTextInput';
import TaskNameIcon from '../assets/images/SearchIcon.png';

export default function AddTaskScreen() {
  const [title, setTitle] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.inlineContainer}>
        <View style={styles.tasImageContainer}>
          <LottieView
            source={require('../assets/animations/pencil.json')}
            style={{height: 200, width: '100%'}}
            autoPlay
            loop
          />
        </View>
        <CustomTextInput
          imageSource={TaskNameIcon}
          label={'Task Name'}
          onChangeText={setTitle}
          value={title}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  inlineContainer: {},
  tasImageContainer: {},
});
