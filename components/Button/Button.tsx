import React from 'react'
// import { Button, Text, TextInput, withTheme } from 'react-native-paper';

import { Text, TouchableOpacity } from 'react-native'
import { buttonText, buttonStyle } from './Button.style'

export type Props = {
    onClick: () => void,
    name: string,
    theme: any,
    state: 'normal' | 'disabled'
}

const Button: React.FC<Props> = (props) => {

    const getColorFromState = () => {
        // if (props.state == 'disabled') {
        // return props.theme.colors.disabled;
        // } else {
        return props.theme.colors.primary;
        // }
    }

    return (
        <TouchableOpacity style={buttonStyle(getColorFromState()).ButtonStyle} onPress={props.onClick} disabled={props.state == 'disabled'}>
            <Text style={buttonText().ButtonText}>{props.name}</Text>
        </TouchableOpacity>
    )
    // return(
    //     <button onClick={props.onClick}>{props.name}</button>
    // )
}


export default Button;