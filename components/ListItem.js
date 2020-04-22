import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';


class ListItem extends Component {


    render() {
        return (
            <TouchableOpacity style={styles.placeView} onPress={this.props.onItemSelected}>
                <Image resizeMode='contain' style={styles.placeImg} source={this.props.placeImg} />
                <Text style={styles.placeText} >{this.props.place}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({

    placeText: {
        fontSize: 30,
    },
    placeView: {
        backgroundColor: '	rgb(211,211,211)',
        marginTop: 10,
        alignItems: 'center',
        padding: 10,
        marginVertical: 10,
        flexDirection: 'row'
    },
    placeImg: {
        margin: 10,
        height: 60,
        width: 60
    }
});


export default ListItem