import { GestureResponderEvent, StyleProp, TextStyle } from 'react-native';
import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';

export interface ButtonProps{
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
    textStyle ?: StyleProp<TextStyle>;
    icon ?: any,
    onPress: ((event: GestureResponderEvent) => void) | undefined

}