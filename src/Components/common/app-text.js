import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

const AppText = (props) => {
  const { colors } = useTheme();
  const {
    children,
    heading,
    subHeading,
    bold,
    secondary,
    primary,
    style,
    underline,
    size,
    center,
    right,
    color,
    grey,
    small,
    italic,
    upperCase,
    lowerCase,
    paddingVertical,
    paddingHorizontal,
  } = props;

  return (
    <Text
      {...props}
      style={[
        styles.textStyle,
        style && style,
        heading && { fontSize: 20, paddingBottom: 10 },
        subHeading && { fontSize: 16 },
        bold && { fontWeight: 'bold' },
        color && { color },
        secondary && { color: colors.secondary },
        primary && { color: colors.primary },
        grey && { color: colors.warmGray },
        underline && { textDecorationLine: 'underline' },
        size && { fontSize: +size },
        center && { textAlign: 'center' },
        right && { textAlign: 'right' },
        small && { fontSize: 14 },
        italic && { fontStyle: 'italic' },
        upperCase && { textTransform: 'uppercase' },
        lowerCase && { textTransform: 'lowercase' },
        paddingVertical && { paddingVertical },
        paddingHorizontal && { paddingHorizontal },
        style && style,
      ]}>
      {children}
    </Text>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 12,
    color: 'black',
    // fontFamily: 'Poppins-Medium',
    textAlign: 'left',
  },
});
export { AppText };
