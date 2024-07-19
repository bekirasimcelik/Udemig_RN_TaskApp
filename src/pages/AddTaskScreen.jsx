import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import LottieView from 'lottie-react-native';
import CustomTextInput from '../components/CustomTextInput';
import TaskNameIcon from '../assets/images/SearchIcon.png';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import colors from '../themes/Colors';
import CustomButton from '../components/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import ScreenName from '../constants/ScreenName';

export default function AddTaskScreen() {
  const navigation = useNavigation();
  const {data} = {};
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Open', value: 'open'},
    {label: 'Progress', value: 'progress'},
    {label: 'Pending', value: 'pending'},
    {label: 'Closed', value: 'closed'},
  ]);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    hideDatePicker();
  };

  const handleAddTask = async () => {
    const newTask = {
      id: 1,
      title: title,
      startDate,
      endDate,
      status: value,
    };

    try {
      const existingTasks = await AsyncStorage.getItem('tasks');
      let tasks = existingTasks ? JSON.parse(existingTasks) : [];

      if (data) {
        tasks = tasks.map(task => (task.id === data.id ? newTask : task));
      } else {
        tasks.push(newTask);
      }

      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));

      navigation.navigate(ScreenName.taskList);

      AsyncStorage.setItem('tasks');
    } catch (error) {}
  };

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
        <View style={{flexDirection: 'row'}}>
          <CustomTextInput
            onPressIcon={() => showDatePicker()}
            imageSource={TaskNameIcon}
            style={{width: '40%'}}
            label={'Başlangıç Zamanı'}
            isDate
            value={setStartDate}
          />
          <CustomTextInput
            onPressIcon={() => showDatePicker()}
            imageSource={TaskNameIcon}
            style={{width: '40%'}}
            label={'Bitiş Zamanı'}
            isDate
            value={setEndDate}
          />
        </View>
        <Text style={styles.status}>Status</Text>
        <View style={styles.dropDownContainer}>
          <View>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              containerStyle={{width: '90%'}}
              style={{borderWidth: 0}}
            />
          </View>
        </View>
      </View>

      <CustomButton label={'Save Task'} />

      <DateTimePickerModal
        onCancel={hideDatePicker}
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
    alignItems: 'center',
  },
  inlineContainer: {
    width: '100%',
  },
  tasImageContainer: {
    marginTop: 60,
  },
  dropDownContainer: {
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    marginBottom: 150,
  },
  status: {
    fontSize: 15,
    marginBottom: 5,
    fontWeight: 'bold',
    color: colors.text.primary,
  },
});
