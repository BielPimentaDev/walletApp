import { StyleProp } from 'react-native';
import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';
export interface ContainerProps{
    children: ReactNode;
    style?: StyleProp<ViewStyle>
}