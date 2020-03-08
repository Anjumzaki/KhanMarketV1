import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, Button, StatusBar } from "react-native";

export default class Home extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 100 }}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Text>Master List Screen</Text>
        <Button
          title="React Native by Example"
          onPress={() =>
            this.props.navigation.push("Details", {
              name: "React Native by Example "
            })
          }
        />
        <Button
          title="React Native School"
          onPress={() =>
            this.props.navigation.push("Details", {
              name: "React Native School"
            })
          }
        />
        <Button
          title="Drawer"
          onPress={() => this.props.navigation.toggleDrawer()}
        />
      </View>
    );
  }
}
