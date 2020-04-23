import React, { Component } from 'react'
import { StyleSheet, View, FlatList } from 'react-native';
import ListItem from './components/ListItem';
import PlaceInput from './components/PlaceInput';
import PlaceDetail from './components/PlaceDetail';
import { connect } from 'react-redux'
import { deletePlace, addPlace, selectPlace, deselectPlace } from './store/actions/actions'


class Wrapper extends Component {

    receieveInput = (input) => {
        this.props.addPlace(input)
    }

    selectItem = (id) => {
        this.props.selectPlace(id)
    }

    toggleModal = () => {
        this.props.deselectPlace()
    }

    removeItem = () => {
        this.props.deletePlace()
    }


    render() {
        return (
            <View style={styles.container}>
                <PlaceDetail
                    place={this.props.data.selectedPlace}
                    closeModal={this.toggleModal}
                    deleteItem={this.removeItem}
                />
                <PlaceInput pushInputUp={this.receieveInput} />
                <FlatList style={{ width: '100%' }}
                    data={this.props.data.places}
                    renderItem={({ item }) => (
                        <ListItem
                            place={item.place}
                            placeImg={item.image}
                            onItemSelected={() => this.selectItem(item.id)} />
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        alignItems: 'center',
    }
});


const mapStateToProps = (state) => ({
    data: state.places
})



export default connect(mapStateToProps, { deletePlace, addPlace, selectPlace, deselectPlace })(Wrapper)