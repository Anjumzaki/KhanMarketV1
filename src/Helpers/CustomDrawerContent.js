import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { View, Image } from "react-native";
import LatoText from "../Helpers/LatoText";
import { TouchableOpacity } from "react-native-gesture-handler";
export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView style={{ backgroundColor: "#5C5C5C" }} {...props}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Profile")}
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 30,
          borderBottomColor: "#89898C",
          borderBottomWidth: 1,
          marginBottom: 30,
        }}
      >
        <View>
          <Image source={require("../../assets/Ellipse20.png")} />
        </View>
        <View style={{ paddingLeft: 10 }}>
          <LatoText
            col="#FFFFFF"
            fontName={"Lato-Bold"}
            fontSiz={20}
            text="Bernard Murphy"
          />
          <View style={{ paddingTop: 2 }}>
            <LatoText
              col="#FFFFFF"
              fontName={"Lato-LightItalic"}
              fontSiz={12}
              text="Profile 90% complete"
            />
          </View>
        </View>
      </TouchableOpacity>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
