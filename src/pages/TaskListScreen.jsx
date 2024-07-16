import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../themes/Colors';
import CustomTextInput from '../components/CustomTextInput';
import SearchIcon from '../assets/images/SearchIcon.png';
import TodoItem from '../components/TodoItem';

export default function TaskListScreen() {
  const [searchText, setSearchText] = useState('');
  const [tasks, setTasks] = useState([
    {
      userId: 1,
      id: 1,
      title: 'title',
      status: 'closed',
    },
    {
      userId: 2,
      id: 2,
      title: 'title',
      status: 'open',
    },
    {
      userId: 3,
      id: 3,
      title: 'title',
      status: 'closed',
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.mainContentContainer}>
        <SafeAreaView style={[styles.container, {marginBottom: 20}]}>
          <CustomTextInput
            value={searchText}
            onChangeText={setSearchText}
            imageSource={SearchIcon}
          />
          <FlatList
            data={tasks}
            renderItem={({item}) => <TodoItem data={item} />}
          />
        </SafeAreaView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  mainContentContainer: {
    height: '100%',
    position: 'absolute',
    padding: 20,
    width: Dimensions.get('screen').width,
  },
});
