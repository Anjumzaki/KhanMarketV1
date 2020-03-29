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
const { width } = Dimensions.get("window");
const { height } = 300;

export default class Filters extends Component {
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
    if (preNum >= 1) {
      this.setState({ qt: preNum });
    }
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <ScrollView style={{ backgroundColor: "white" }}>
        <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingVertical: 30,
              alignItems: "center",
            }}
          >
           <LatoText
              fontName="Lato-Regular"
              fonSiz={20}
              col="#5C5C5C"
              text="Filter"
            ></LatoText>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingBottom:20,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <CheckBox
              style={{ flex: 1 }}
              onClick={() => {
                this.setState({
                  isChecked: !this.state.isChecked
                });
              }}
              isChecked={this.state.isChecked}
              rightText={"CheckBox"}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingBottom:20,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <CheckBox
              style={{ flex: 1 }}
              onClick={() => {
                this.setState({
                  isChecked: !this.state.isChecked
                });
              }}
              isChecked={this.state.isChecked}
              rightText={"CheckBox"}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingBottom:20,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <CheckBox
              style={{ flex: 1 }}
              onClick={() => {
                this.setState({
                  isChecked: !this.state.isChecked
                });
              }}
              isChecked={this.state.isChecked}
              rightText={"CheckBox"}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingBottom:20,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <CheckBox
              style={{ flex: 1 }}
              onClick={() => {
                this.setState({
                  isChecked: !this.state.isChecked
                });
              }}
              isChecked={this.state.isChecked}
              rightText={"CheckBox"}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingBottom:20,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <CheckBox
              style={{ flex: 1 }}
              onClick={() => {
                this.setState({
                  isChecked: !this.state.isChecked
                });
              }}
              isChecked={this.state.isChecked}
              rightText={"CheckBox"}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingBottom:20,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <CheckBox
              style={{ flex: 1 }}
              onClick={() => {
                this.setState({
                  isChecked: !this.state.isChecked
                });
              }}
              isChecked={this.state.isChecked}
              rightText={"CheckBox"}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingBottom:20,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <CheckBox
              style={{ flex: 1 }}
              onClick={() => {
                this.setState({
                  isChecked: !this.state.isChecked
                });
              }}
              isChecked={this.state.isChecked}
              rightText={"CheckBox"}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingVertical: 30,
              alignItems: "center",
            }}
          >
           <LatoText
              fontName="Lato-Regular"
              fonSiz={20}
              col="#5C5C5C"
              text="Filter"
            ></LatoText>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingBottom:20,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <CheckBox
              style={{ flex: 1 }}
              onClick={() => {
                this.setState({
                  isChecked: !this.state.isChecked
                });
              }}
              isChecked={this.state.isChecked}
              rightText={"CheckBox"}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingBottom:20,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <CheckBox
              style={{ flex: 1 }}
              onClick={() => {
                this.setState({
                  isChecked: !this.state.isChecked
                });
              }}
              isChecked={this.state.isChecked}
              rightText={"CheckBox"}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingBottom:20,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <CheckBox
              style={{ flex: 1 }}
              onClick={() => {
                this.setState({
                  isChecked: !this.state.isChecked
                });
              }}
              isChecked={this.state.isChecked}
              rightText={"CheckBox"}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingBottom:20,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <CheckBox
              style={{ flex: 1 }}
              onClick={() => {
                this.setState({
                  isChecked: !this.state.isChecked
                });
              }}
              isChecked={this.state.isChecked}
              rightText={"CheckBox"}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingBottom:20,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <CheckBox
              style={{ flex: 1 }}
              onClick={() => {
                this.setState({
                  isChecked: !this.state.isChecked
                });
              }}
              isChecked={this.state.isChecked}
              rightText={"CheckBox"}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingBottom:20,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <CheckBox
              style={{ flex: 1 }}
              onClick={() => {
                this.setState({
                  isChecked: !this.state.isChecked
                });
              }}
              isChecked={this.state.isChecked}
              rightText={"CheckBox"}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingBottom:20,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <CheckBox
              style={{ flex: 1 }}
              onClick={() => {
                this.setState({
                  isChecked: !this.state.isChecked
                });
              }}
              isChecked={this.state.isChecked}
              rightText={"CheckBox"}
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
