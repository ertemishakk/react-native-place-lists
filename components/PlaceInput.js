import React, { Component } from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native';


class PlaceInput extends Component {

    state = {
        placeName: ''
    }

    placeNameChangeHandler = (value) => {
        this.setState({
            placeName: value
        })
    }
    sendUp = () => {
        if (this.state.placeName !== '') {
            this.props.pushInputUp(this.state.placeName)
            this.setState({
                placeName: ''
            })
        }
    }

    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.InputStyle}
                    value={this.state.placeName}
                    onChangeText={this.placeNameChangeHandler}
                    placeholder='An Awesome Place'
                />
                <Button
                    onPress={this.sendUp}
                    title='Add to List'
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    InputStyle: {
        fontSize: 20,
        width: '65%',
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
        marginRight: 20
    },

});

export default PlaceInput