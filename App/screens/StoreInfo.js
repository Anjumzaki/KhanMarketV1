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
import { FontAwesome, Entypo } from "@expo/vector-icons";
import LatoText from "../Helpers/LatoText";
import { ScrollView } from "react-native-gesture-handler";
import Expandable from "../Helpers/Expandable";
import { btnStyles, bottomTab, lines } from "../styles/base";
import { Row } from "native-base";
import CheckBox from "react-native-check-box";
const { width } = Dimensions.get("window");
const { height } = 300;

export default class StoreInfo extends Component {
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
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingVertical: 20,
              alignItems: "center"
            }}
          >
            <LatoText
              fontName="Lato-Bold"
              fonSiz={20}
              col="#2E2E2E"
              text="Basic Info"
            ></LatoText>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingBottom: 20,
              paddingTop: 0,
              alignItems: "center"
            }}
          >
            <Image
              style={{ width: 44, height: 44, marginRight: 10 }}
              source={require("../../assets/new.png")}
            />
            <View>
              <LatoText
                fontName="Lato-Regular"
                fonSiz={17}
                col="#2E2E2E"
                text="KHAN MARKET"
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingBottom: 20,
              justifyContent: "space-between"
            }}
          >
            <LatoText
              fontName="Lato-Regular"
              fonSiz={17}
              col="#2E2E2E"
              text="Category: Meat & Vegetables"
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              alignContent: "center",
              alignItems: "center",
              marginBottom: 20
            }}
          >
            <Entypo
              name="location-pin"
              color="#5C5C5C"
              size={17}
              style={{ marginRight: 15 }}
            />
            <LatoText
              fontName="Lato-Regular"
              fonSiz={20}
              col="#5C5C5C"
              text="Hemisphere black 32"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              paddingBottom:20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
              
                alignContent: "center",
                alignItems: "center"
              }}
            >
              <FontAwesome
                name="phone"
                color="#5C5C5C"
                size={17}
                style={{ marginRight: 15 }}
              />
              <LatoText
                fontName="Lato-Regular"
                fonSiz={20}
                col="#5C5C5C"
                text="(555) 555-1234"
              />
            </View>
            <LatoText
                fontName="Lato-Bold"
                fonSiz={17}
                col="#5C5C5C"
                text="Call"
              />
          </View>
          <View style={lines.simple} />
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingVertical: 20,
              alignItems: "center"
            }}
          >
            <LatoText
              fontName="Lato-Bold"
              fonSiz={20}
              col="#2E2E2E"
              text="Basic Info"
            ></LatoText>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingVertical: 10,
              justifyContent: "space-between"
            }}
          >
            <LatoText
              fontName="Lato-Regular"
              fonSiz={15}
              col="#5C5C5C"
              text="Sunday"
            />
             <LatoText
              fontName="Lato-Regular"
              fonSiz={15}
              col="#5C5C5C"
              text="Open 24 Hours"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingVertical: 10,
              justifyContent: "space-between"
            }}
          >
            <LatoText
              fontName="Lato-Regular"
              fonSiz={15}
              col="#5C5C5C"
              text="Monday"
            />
             <LatoText
              fontName="Lato-Regular"
              fonSiz={15}
              col="#5C5C5C"
              text="12pm-12am"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingVertical: 10,
              justifyContent: "space-between"
            }}
          >
            <LatoText
              fontName="Lato-Regular"
              fonSiz={15}
              col="#5C5C5C"
              text="Tuesday"
            />
             <LatoText
              fontName="Lato-Regular"
              fonSiz={15}
              col="#5C5C5C"
              text="12pm-12am"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingVertical: 10,
              justifyContent: "space-between"
            }}
          >
            <LatoText
              fontName="Lato-Regular"
              fonSiz={15}
              col="#5C5C5C"
              text="Wednesday"
            />
             <LatoText
              fontName="Lato-Regular"
              fonSiz={15}
              col="#5C5C5C"
              text="12pm-12am"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingVertical: 10,
              justifyContent: "space-between"
            }}
          >
            <LatoText
              fontName="Lato-Regular"
              fonSiz={15}
              col="#5C5C5C"
              text="Thursday"
            />
             <LatoText
              fontName="Lato-Regular"
              fonSiz={15}
              col="#5C5C5C"
              text="12pm-12am"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingVertical: 10,
              justifyContent: "space-between"
            }}
          >
            <LatoText
              fontName="Lato-Regular"
              fonSiz={15}
              col="#5C5C5C"
              text="Friday"
            />
             <LatoText
              fontName="Lato-Regular"
              fonSiz={15}
              col="#5C5C5C"
              text="12pm-12am"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingVertical: 10,
              justifyContent: "space-between"
            }}
          >
            <LatoText
              fontName="Lato-Regular"
              fonSiz={15}
              col="#5C5C5C"
              text="Saturday"
            />
             <LatoText
              fontName="Lato-Regular"
              fonSiz={15}
              col="#5C5C5C"
              text="12pm-12am"
            />
          </View>
          <View style={lines.simple} />
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              marginTop:20,
              alignItems: "center"
            }}
          >
            <LatoText
              fontName="Lato-Bold"
              fonSiz={20}
              col="#2E2E2E"
              text="Message From Store"
            ></LatoText>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingVertical: 20,
              alignItems: "center"
            }}
          >
            <LatoText
              fontName="Lato-Regular"
              fonSiz={17}
              col="#5C5C5C"
              text="Eiusmod qui esse ullamco laborum quis. Magna duis laborum est et exercitation minim esse ad esse excepteur. Cupidatat minim consequat anim non laboris veniam nisi ullamco esse. Ullamco aliqua aliqua tempor fugiat esse exercitation culpa"
            ></LatoText>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              marginTop:20,
              alignItems: "center"
            }}
          >
            <LatoText
              fontName="Lato-Bold"
              fonSiz={20}
              col="#2E2E2E"
              text="Order cancelation policy "
            ></LatoText>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingVertical: 20,
              alignItems: "center"
            }}
          >
            <LatoText
              fontName="Lato-Regular"
              fonSiz={17}
              col="#5C5C5C"
              text="Eiusmod qui esse ullamco laborum quis. Magna duis laborum est et exercitation minim esse ad esse excepteur. Cupidatat minim consequat anim non laboris veniam nisi ullamco esse. Ullamco aliqua aliqua tempor fugiat esse exercitation culpa"
            ></LatoText>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              marginTop:20,
              alignItems: "center"
            }}
          >
            <LatoText
              fontName="Lato-Bold"
              fonSiz={20}
              col="#2E2E2E"
              text="Terms & conditions"
            ></LatoText>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingVertical: 20,
              alignItems: "center"
            }}
          >
            <LatoText
              fontName="Lato-Regular"
              fonSiz={17}
              col="#5C5C5C"
              text="Eiusmod qui esse ullamco laborum quis. Magna duis laborum est et exercitation minim esse ad esse excepteur. Cupidatat minim consequat anim non laboris veniam nisi ullamco esse. Ullamco aliqua aliqua tempor fugiat esse exercitation culpa"
            ></LatoText>
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
