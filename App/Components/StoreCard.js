import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { cardStyles } from "../styles/base";
import LatoText from "../Helpers/LatoText";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class StoreCard extends React.Component {
  render() {
    const { name, distance, address, img } = this.props;
    console.log("props data", name, distance, address, img)
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.push("StoreDetails")}
        style={cardStyles.storeCard}
      >
        <View style={cardStyles.cImgWrap}> 
          <Image
            style={{ width: "100%", height: 200 }}
            source={img}
          />
        </View>
        <View style={cardStyles.cTextWrap}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <LatoText
              fontName="Lato-Bold"
              fonSiz={20}
              col="#5C5C5C"
              text={name}
            />
            <LatoText
              fontName="Lato-Regular"
              fonSiz={17}
              col="#B50000"
              text={distance}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 10
            }}
          >
            <LatoText
              fontName="Lato-Bold"
              fonSiz={17}
              col="#89898C"
              text={address}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
