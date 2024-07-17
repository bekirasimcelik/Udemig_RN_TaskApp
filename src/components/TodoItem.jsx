import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../themes/Colors';
import StatusButton from './StatusButton';
import {useNavigation} from '@react-navigation/native';
import ScreenName from '../constants/ScreenName';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function TodoItem({data}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.itemHeader}>
        <Text
          style={[
            styles.taskTitle,
            {
              textDecorationLine:
                data?.status === 'closed' ? 'line-through' : null,
            },
          ]}>
          {data?.title?.toUpperCase()}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View
            style={[
              styles.statusContainer,
              {
                backgroundColor:
                  data?.status === ('open' || 'progress')
                    ? '#CAf6cb'
                    : '#FECcb1',
              },
            ]}>
            <Text
              style={{
                color:
                  data?.status === ('open' || 'progress')
                    ? '#72966F'
                    : '#d6825c',
              }}>
              {data?.status}
            </Text>
          </View>
          <StatusButton
            iconName={'pencil'}
            onPress={() => navigation.navigate(ScreenName.addTask)}
          />
          <StatusButton iconName={'delete'} color={'#c0695e'} />
        </View>
      </View>
      <Text style={styles.taskDescription}>{data?.description}</Text>
      <View style={styles.footerContainer}>
        <View>
          <Text>Başlangıç Tarihi</Text>
          <View style={styles.timeContainer}>
            <Icon name="clock-outline" size={15} color={colors.primary} />
            <Text style={styles.timeText}>17.07.2024 00:42</Text>
          </View>
        </View>
        <View>
          <Text>Bitiş Tarihi</Text>
          <View style={styles.timeContainer}>
            <Icon name="clock-outline" size={15} color={colors.primary} />
            <Text style={styles.timeText}>19.07.2024 00:42</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 15,
    marginBottom: 15,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  taskTitle: {
    flex: 1,
    fontSize: 15,
    color: colors.text.primary,
    fontWeight: '600',
    marginBottom: 5,
  },
  statusContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    justifyContent: 'center',
  },
  taskDescription: {},
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeText: {
    color: colors.primary,
    fontWeight: '600',
    marginHorizontal: 5,
    fontSize: 12,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
