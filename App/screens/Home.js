import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, Button, StatusBar } from "react-native";
import StoreCard from "../Components/StoreCard";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
export default class Home extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 100, justifyContent: "center" }}>
        <ScrollView>
          <StoreCard
            navigation={this.props.navigation}
            name="Khan Market"
            distance="1 mile away"
            address="6493 Miller Ave undefined 40322 Minna... "
          />

          <StoreCard
            navigation={this.props.navigation}
            name="Metro"
            distance="4 mile away"
            address="6493 Miller Ave undefined 40322 Minna... "
          />
          <StoreCard
            navigation={this.props.navigation}
            name="SB Market"
            distance="4 mile away"
            address="6493 Miller Ave undefined 40322 Minna... "
          />
          <StoreCard
            navigation={this.props.navigation}
            name="Khan Market"
            distance="1 mile away"
            address="6493 Miller Ave undefined 40322 Minna... "
          />
          <StoreCard
            navigation={this.props.navigation}
            name="Metro"
            distance="4 mile away"
            address="6493 Miller Ave undefined 40322 Minna... "
          />
          <StoreCard
            navigation={this.props.navigation}
            name="SB Market"
            distance="4 mile away"
            address="6493 Miller Ave undefined 40322 Minna... "
          />
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
        </ScrollView>
      </View>
    );
  }
}
