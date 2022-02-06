import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { useTheme, DefaultTheme } from '@react-navigation/native';
import { AppText } from '.';
import { Colors } from '../../Constants/Colors';

const InputField = (props) => {
  const { colors } = useTheme();

  const {
    viewStyle,
    inputRef,
    required,
    maxLength,
    onChangeText,
    name,
    disabled,
    ...textProps
  } = props;

  const ref = (r) => inputRef && inputRef(r);

  return (
    <View style={[styles.inputContainerStyle, viewStyle]}>
      {textProps.label && (
        <AppText {...textProps} secondary={textProps.secondary} primary>
          {`${textProps.label} ` || 'Label Name'}
          {required ? <AppText>*</AppText> : null}
        </AppText>
      )}
      <TextInput
        {...props}
        editable={!disabled}
        ref={ref}
        onChangeText={(val) => onChangeText(name, val)}
        placeholderTextColor={colors.warmGray}
        maxLength={maxLength}
        style={[styles.inputFieldStyle, { borderColor: Colors.primary }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainerStyle: {
    paddingBottom: 10,
    width: '100%',
  },
  inputFieldStyle: {
    paddingLeft: 10,
    paddingVertical: 0,
    color: '#000000',
    backgroundColor: 'transparent',
    borderBottomWidth: 3,
    borderBottomColor: DefaultTheme.colors.border,
  },
});
export { InputField };
