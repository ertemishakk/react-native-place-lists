import React from 'react';
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
import ListItem from './components/ListItem';
import PlaceInput from './components/PlaceInput';
import placeImage from './assets/test.jpg'
import PlaceDetail from './components/PlaceDetail';


class App extends React.Component {

  state = {
    places: [],
    selectedPlace: null
  }

  receieveInput = (input) => {
    let places = [...this.state.places]
    let newItem = {}
    if (input !== '') {
      newItem.place = input
      newItem.id = Math.random()
      newItem.image = placeImage

      places.unshift(newItem)
      this.setState({
        places
      })
    }
  }

  selectItem = (id) => {

    let places = [...this.state.places]


    this.setState({
      selectedPlace: places.find(place => place.id === id)
    })
  }

  toggleModal = () => {
    this.setState({
      selectedPlace: null
    })
  }

  removeItem = () => {
    let places = [...this.state.places]
    let index = places.findIndex(item => item.id === this.state.selectedPlace.id)
    places.splice(index, 1)
    this.setState({
      places,
      selectedPlace: null
    })

  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          place={this.state.selectedPlace}
          closeModal={this.toggleModal}
          deleteItem={this.removeItem}
        />
        <PlaceInput pushInputUp={this.receieveInput} />
        <FlatList style={{ width: '100%' }}
          data={this.state.places}
          renderItem={({ item }) => (
            <ListItem
              place={item.place}
              placeImg={item.image}
              onItemSelected={() => this.selectItem(item.id)} />
          )}
          keyExtractor={item => item.id}
        />


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
  }
});



export default App