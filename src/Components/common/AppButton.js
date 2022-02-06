import React from 'react';
import { StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { AppText } from '.';
import { Colors } from '../../Constants/Colors';

const AppButton = (props) => {
  const {
    children,
    color,
    onPress,
    style,
    background,
    width,
    round,
    fontSize,
    secondary,
    primary,
    bold,
    borderRadius,
    loading,
    position,
  } = props;
  const { colors } = useTheme();

  const defaultStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: width || '100%',
    borderRadius: round ? 35 : 5,
    backgroundColor: background || Colors.primary,
    marginVertical: 3,
  };
  const textStyle = {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
  };
  return (
    <TouchableOpacity
      style={[
        defaultStyle,
        style && style,
        primary && { backgroundColor: colors.primary },
        secondary && { backgroundColor: color.secondary },
        borderRadius && { borderRadius: +borderRadius },
        position && { alignSelf: position },
      ]}
      disabled={loading}
      onPress={loading ? () => null : onPress}>
      <AppText size={fontSize} bold={bold} style={textStyle}>
        {children || 'Button'}
      </AppText>
      <ActivityIndicator
        animating={loading || false}
        size="small"
        color={color || 'white'}
        style={styles.loadingIndicator}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
  },
  loadingIndicator: {
    position: 'absolute',
    right: 15,
  },
});
export { AppButton };
