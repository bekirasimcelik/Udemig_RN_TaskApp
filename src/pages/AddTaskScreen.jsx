import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import LottieView from 'lottie-react-native';
import CustomTextInput from '../components/CustomTextInput';
import TaskNameIcon from '../assets/images/SearchIcon.png';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import colors from '../themes/Colors';
import CustomButton from '../components/CustomButton';

export default function AddTaskScreen() {
  const [title, setTitle] = useState('');

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
          />
          <CustomTextInput
            onPressIcon={() => showDatePicker()}
            imageSource={TaskNameIcon}
            style={{width: '40%'}}
            label={'Bitiş Zamanı'}
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
    marginBottom: 50,
  },
  status: {
    fontSize: 15,
    marginBottom: 5,
    fontWeight: 'bold',
    color: colors.text.primary,
  },
});
