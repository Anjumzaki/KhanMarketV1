import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
export const BackStack = ({ navigation, backScreen }) => (
  
    <View>
      <Button
        title="React Native by Example"
        onPress={() =>
          navigation.navigate("Details", { name: "React Native by Example " })
        }
      />
      <Button
        title="React Native School"
        onPress={() =>
          navigation.navigate("Details", { name: "React Native School" })
        }
      />
    </View>
  
);
