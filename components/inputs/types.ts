import { StyleProp, TextInput, TextInputProps } from 'react-native';
import { ComponentProps, ReactNode } from 'react';
import {MaterialCommunityIcons} from '@expo/vector-icons'

interface ExtraInputProps{
    placeholder: string;
    icon: ComponentProps<typeof MaterialCommunityIcons>['name']
}

export type InputProps = TextInputProps & ExtraInputProps