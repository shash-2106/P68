import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class Facebook extends React.Component{
    render(){
        return(
    <View>
        <TouchableOpacity>
            <Text style={styles.buttonTextF}>Facebook</Text>
        </TouchableOpacity>
    </View>
        )
}
}
const styles = StyleSheet.create({
    buttonTextF:{
        color:'blue',
        
    },

})