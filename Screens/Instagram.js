import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Instagram extends React.Component{
    render(){
       return(
    <View>
        <TouchableOpacity>
            <Text style={styles.buttonTextI}>Instagram</Text>
        </TouchableOpacity>

    </View>
    )

}
}
const styles = StyleSheet.create({
    buttonTextI:{
        color:'pink',

    },

})