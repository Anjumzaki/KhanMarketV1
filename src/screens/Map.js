import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, Alert } from "react-native";

export default class Map extends React.Component {
  componentDidMount() {
    Alert.alert(
      "Turn On Device Location",
      'For better experience please turn on your device location. Alternatively you can select location manualy.',
      [
        {
          text: "Turn On",
          onPress: () => this.props.navigation.navigate("App")
        },
        {
          text: "Select Manually",
          onPress: () => this.props.navigation.navigate("App"),
          style: "cancel"
        },
        { text: "Go Back", onPress: () => this.props.navigation.navigate("App") }
      ],
      { cancelable: false }
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height + 50
  }
});
