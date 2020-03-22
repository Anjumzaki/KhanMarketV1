import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  StyleSheet,
  LinearGradient,
  TouchableOpacity
} from "react-native";
import Carousel from "react-native-looped-carousel";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LatoText from "../Helpers/LatoText";
import { ScrollView } from "react-native-gesture-handler";
import Expandable from "../Helpers/Expandable";
import { btnStyles, bottomTab, lines } from "../styles/base";
import { Row } from "native-base";
import CheckBox from "react-native-check-box";
import ProcardsSmall from "../Helpers/ProcardsSmall";
const { width } = Dimensions.get("window");
const { height } = 300;

export default class SingleCateg extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heart: false,
      qt: 1
    };
  }

  _onLayoutDidChange = e => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  };
  handleChange(num) {
    var preNum = this.state.qt;
    preNum = num + preNum;
    console.log(preNum);
    if (preNum >= 1) {
      this.setState({ qt: preNum });
    }
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <ScrollView style={{ backgroundColor: "white" }}>
          <View style={{ marginVertical: 10, flexDirection: "row",width:'100%',flexWrap: 'wrap' }}>
            <ProcardsSmall
              navigation={this.props.navigation}
              key={1}
              product={{
                __v: 0,
                _id: "5e6c73426ab4b4fa150ea5ef",
                calories: "32",
                cholesterol: "34",
                dietaryFiber: "34",
                discount: "23",
                fatInGm: "54",
                monounsaturatedFatInGm: "344",
                noOfImages: "3",
                polyunsaturatedFatInGm: "3",
                potassium: "34",
                price: "23",
                productDescription:
                  "asdasdasd asdasdhas dahsgda sdjagsd asdgjasd jashgd asdiagsd asjdhgas diagsdmasdjhgasd ashdgas dhasgdba sdhgasd asdgkasdm ashdgka sdasgdk asdj",
                productName: "ASD",
                productType: "Vegetable",
                protienInGm: "34",
                saturatedFatInGm: "34",
                servingPerContainer: "34",
                servingSize: "34",
                sodium: "34",
                specialInstruction:
                  "asdasdasd asdasdhas dahsgda sdjagsd asdgjasd jashgd asdiagsd asjdhgas diagsdmasdjhgasd ashdgas dhasgdba sdhgasd asdgkasdm ashdgka sdasgdk asdj",
                storeId: "5e658f62cead2c04281c9f85",
                sugar: "34",
                totalCarbs: "34",
                transFatInGm: "34"
              }}
            />
            <ProcardsSmall
              width={"50%"}
              navigation={this.props.navigation}
              key={1}
              product={{
                __v: 0,
                _id: "5e6c73426ab4b4fa150ea5ef",
                calories: "32",
                cholesterol: "34",
                dietaryFiber: "34",
                discount: "23",
                fatInGm: "54",
                monounsaturatedFatInGm: "344",
                noOfImages: "3",
                polyunsaturatedFatInGm: "3",
                potassium: "34",
                price: "23",
                productDescription:
                  "asdasdasd asdasdhas dahsgda sdjagsd asdgjasd jashgd asdiagsd asjdhgas diagsdmasdjhgasd ashdgas dhasgdba sdhgasd asdgkasdm ashdgka sdasgdk asdj",
                productName: "ASD",
                productType: "Vegetable",
                protienInGm: "34",
                saturatedFatInGm: "34",
                servingPerContainer: "34",
                servingSize: "34",
                sodium: "34",
                specialInstruction:
                  "asdasdasd asdasdhas dahsgda sdjagsd asdgjasd jashgd asdiagsd asjdhgas diagsdmasdjhgasd ashdgas dhasgdba sdhgasd asdgkasdm ashdgka sdasgdk asdj",
                storeId: "5e658f62cead2c04281c9f85",
                sugar: "34",
                totalCarbs: "34",
                transFatInGm: "34"
              }}
            />
            <ProcardsSmall
              navigation={this.props.navigation}
              key={1}
              product={{
                __v: 0,
                _id: "5e6c73426ab4b4fa150ea5ef",
                calories: "32",
                cholesterol: "34",
                dietaryFiber: "34",
                discount: "23",
                fatInGm: "54",
                monounsaturatedFatInGm: "344",
                noOfImages: "3",
                polyunsaturatedFatInGm: "3",
                potassium: "34",
                price: "23",
                productDescription:
                  "asdasdasd asdasdhas dahsgda sdjagsd asdgjasd jashgd asdiagsd asjdhgas diagsdmasdjhgasd ashdgas dhasgdba sdhgasd asdgkasdm ashdgka sdasgdk asdj",
                productName: "ASD",
                productType: "Vegetable",
                protienInGm: "34",
                saturatedFatInGm: "34",
                servingPerContainer: "34",
                servingSize: "34",
                sodium: "34",
                specialInstruction:
                  "asdasdasd asdasdhas dahsgda sdjagsd asdgjasd jashgd asdiagsd asjdhgas diagsdmasdjhgasd ashdgas dhasgdba sdhgasd asdgkasdm ashdgka sdasgdk asdj",
                storeId: "5e658f62cead2c04281c9f85",
                sugar: "34",
                totalCarbs: "34",
                transFatInGm: "34"
              }}
            />
            <ProcardsSmall
              width={"50%"}
              navigation={this.props.navigation}
              key={1}
              product={{
                __v: 0,
                _id: "5e6c73426ab4b4fa150ea5ef",
                calories: "32",
                cholesterol: "34",
                dietaryFiber: "34",
                discount: "23",
                fatInGm: "54",
                monounsaturatedFatInGm: "344",
                noOfImages: "3",
                polyunsaturatedFatInGm: "3",
                potassium: "34",
                price: "23",
                productDescription:
                  "asdasdasd asdasdhas dahsgda sdjagsd asdgjasd jashgd asdiagsd asjdhgas diagsdmasdjhgasd ashdgas dhasgdba sdhgasd asdgkasdm ashdgka sdasgdk asdj",
                productName: "ASD",
                productType: "Vegetable",
                protienInGm: "34",
                saturatedFatInGm: "34",
                servingPerContainer: "34",
                servingSize: "34",
                sodium: "34",
                specialInstruction:
                  "asdasdasd asdasdhas dahsgda sdjagsd asdgjasd jashgd asdiagsd asjdhgas diagsdmasdjhgasd ashdgas dhasgdba sdhgasd asdgkasdm ashdgka sdasgdk asdj",
                storeId: "5e658f62cead2c04281c9f85",
                sugar: "34",
                totalCarbs: "34",
                transFatInGm: "34"
              }}
            />
          </View>
        </ScrollView>
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
  imgCon: {
    width: Dimensions.get("window").width,
    height: 250
  },
  topRight: {
    alignSelf: "flex-end"
  },
  wrapTop: {
    alignSelf: "flex-end",

    marginTop: 30,
    backgroundColor: "#7cba80",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15
  },
  bottomText: {
    height: 200,
    flexDirection: "row"
  },
  buybBtn: {
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  }
});
