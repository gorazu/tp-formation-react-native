import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import BreedPicker from "./BreedPicker";
import Button from "./ui/Button";

const styles = StyleSheet.create({
  container: { flex: 1 },
  img: { width: 400, height: 400 },
  loadingContainer: { width: 400, height: 400 },
  button: {
    width: 400,
    height: 100
  }
});

const api = "https://dog.ceo/api/breed";

class Dog extends Component {
  state = {
    loading: true,
    url: "",
    breed: "shiba"
  };

  componentDidMount() {
    this.fetchDog();
  }

  render() {
    const { breed } = this.state;
    return (
      <View style={styles.container}>
        <BreedPicker value={breed} onChange={this.handleChange} />
        {this.state.loading ? (
          <View style={styles.loadingContainer}>
            <Text>Loading...</Text>
          </View>
        ) : (
          <Image style={styles.img} source={{ uri: this.state.url }} />
        )}
        <Button title="REFRESH" onPress={this.fetchDog} />
      </View>
    );
  }

  handleChange = breed => {
    this.setState({ breed });
  };

  fetchDog = () => {
    fetch(`${api}/${this.state.breed}/images/random`)
      .then(response => response.json())
      .then(data => this.setState({ loading: false, url: data.message }))
      .catch(err => console.error(err));
  };
}

export default Dog;
