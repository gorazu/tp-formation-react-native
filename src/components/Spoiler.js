import React, { Component } from "react";
import { View, Button, Text } from "react-native";

class Spoiler extends Component {
  state = {
    display: false
  };

  render() {
    return (
      <View>
        {this.state.display && <Text>{this.props.text}</Text>}
        <Button
          onPress={this.toggleDisplay}
          title={!this.state.display ? "Show" : "Hide"}
        />
      </View>
    );
  }

  toggleDisplay = () => {
    this.setState({ display: !this.state.display });
  };
}

export default Spoiler;
