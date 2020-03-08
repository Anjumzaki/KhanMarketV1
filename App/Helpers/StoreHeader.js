import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { conStyles, headerStyles } from "../styles/base";
import {
  Entypo,
  Feather,
  FontAwesome,
  EvilIcons,
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import LatoText from "./LatoText";
import { TouchableOpacity } from "react-native-gesture-handler";
export default class StoreHeader extends React.Component {
  render() {
    return (
      <SafeAreaView style={conStyles.safeAreaMy}>
        <View style={headerStyles.storeStyles}>
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <TouchableOpacity
            style={{padding:20}}
              onPress={() => this.props.navigation.toggleDrawer()}
            >
              <Image source={require("../../assets/menu-1.png")} />
            </TouchableOpacity>
            <View
              style={{padding:20}}>
              <LatoText
                fontName="Lato-Regular"
                fonSiz={20}
                col="white"
                text={"STORES NEAR YOU"}
              />
            </View>
            <View   style={{padding:20}}>
              <MaterialIcons name="shopping-cart" size={26} color={"white"} />
            </View>
          </View>

          <View style={{ flexDirection: "row",justifyContent:'center'}}>
            <EvilIcons name="location" size={26} color={"white"} />
            <LatoText
              fontName="Lato-Light"
              fonSiz={17}
              col="white"
              text={"4228 Homestead Rd Cedar Hill, California..."}
              textDec={"underline"}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
