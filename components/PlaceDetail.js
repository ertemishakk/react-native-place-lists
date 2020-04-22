import React, { Component } from 'react'
import { StyleSheet, Modal, View, Image, Text, Button } from 'react-native';

class PlaceDetail extends Component {
    render() {
        return (
            <Modal
                onRequestClose={this.props.closeModal}
                visible={this.props.place !== null} animationType='slide'>

                <View style={styles.modalContainer}>
                    {this.props.place !== null && (
                        <React.Fragment>
                            <Image style={styles.modalImage} source={this.props.place.image} />
                            <Text style={styles.modalText}>{this.props.place.place}</Text>
                        </React.Fragment>
                    )}
                    <View style={styles.modalButton1}>
                        <Button
                            title='delete'
                            color='red'
                            onPress={this.props.deleteItem}
                        />
                    </View>
                    <View style={styles.modalButton2}>
                        <Button
                            title='close'
                            onPress={this.props.closeModal}
                        />
                    </View>

                </View>

            </Modal>
        )
    }
}


const styles = StyleSheet.create({
    modalContainer: {
        margin: 22,
        // alignItems: 'center'
    },
    modalImage: {
        height: 200,
        width: '100%',

    },
    modalButton1: {
        paddingHorizontal: 20
    },
    modalButton2: {
        paddingVertical: 20,
        paddingHorizontal: 20

    },
    modalText: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 28,
        marginVertical: 10
    }
})



export default PlaceDetail