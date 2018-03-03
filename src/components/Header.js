import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {

    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>Albums Header</Text>
        </View>
    );
};


const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8'
    },
    textStyle: {
        fontSize: 30
    }
};

export default Header;
