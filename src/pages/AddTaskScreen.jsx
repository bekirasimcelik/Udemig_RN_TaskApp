import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

export default function AddTaskScreen() {
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  inlineContainer: {},
  tasImageContainer: {},
});
