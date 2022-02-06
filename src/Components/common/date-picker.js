import React from 'react';
import { View, StyleSheet } from 'react-native';
import RNDatePicker from 'react-native-datepicker';
import { useTheme, DefaultTheme } from '@react-navigation/native';

import { AppText } from '.';

const DatePicker = (props) => {
  const { colors } = useTheme();

  const {
    viewStyle,
    inputRef,
    required,
    maxLength,
    onChangeText,
    name,
    disabled,
    placeholder,
    onChange,
    value = new Date(),
    ...textProps
  } = props;
  return (
    <View style={styles.container}>
      {textProps.label && (
        <AppText {...textProps} secondary={textProps.secondary} primary>
          {`${textProps.label} ` || 'Label Name'}
          {props.required ? <AppText>*</AppText> : null}
        </AppText>
      )}
      <RNDatePicker
        style={styles.dateContainer}
        date={value}
        mode="date"
        placeholder={'Select date' || placeholder}
        format="YYYY-MM-DD"
        maxDate={new Date()}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: { display: 'none' },
          dateInput: styles.dateInput,
          placeholderText: { color: colors.warmGray },
        }}
        onDateChange={onChange}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
  },
  dateContainer: {
    width: '100%',
  },
  dateInput: {
    alignItems: 'flex-start',
    paddingLeft: 10,
    paddingVertical: 0,
    color: '#000000',
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderBottomWidth: 3,
    borderBottomColor: DefaultTheme.colors.border,
  },
});
export { DatePicker };
