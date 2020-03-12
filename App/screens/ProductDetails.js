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
import { AntDesign } from "@expo/vector-icons";
import LatoText from "../Helpers/LatoText";
import { ScrollView } from "react-native-gesture-handler";
import Expandable from '../Helpers/Expandable'

const { width } = Dimensions.get("window");
const { height } = 300;

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heart: false
    };
  }

  _onLayoutDidChange = e => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  };

  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <View
          onLayout={this._onLayoutDidChange}
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center"
          }}
        >
          {/* <Text>asd</Text> */}
          <Carousel
            delay={6000}
            style={{
              width: Dimensions.get("window").width - 40,
              height: 250,
              marginTop: 20,
              borderRadius: 10
            }}
            autoplay={true}
            bullets
            onAnimateNextPage={p => console.log(p)}
            bulletStyle={{
              padding: 0,
              margin: 3,
              marginTop: 80,
              borderColor: "#89898C"
            }}
            chosenBulletStyle={{
              padding: 0,
              margin: 3,
              marginTop: 80,
              backgroundColor: "#89898C"
            }}
          >
            <View style={{ borderRadius: 10, overflow: "hidden" }}>
              <Image
                style={{ width: Dimensions.get("window").width - 40 }}
                source={require("../../assets/products/beef1.png")}
              />
            </View>
            <View style={{ borderRadius: 10, overflow: "hidden" }}>
              <Image
                style={{ width: Dimensions.get("window").width - 40 }}
                source={require("../../assets/products/beef2.png")}
              />
            </View>
            <View style={{ borderRadius: 10, overflow: "hidden" }}>
              <Image
                style={{ width: Dimensions.get("window").width - 40 }}
                source={require("../../assets/products/beef3.png")}
              />
            </View>
            <View style={{ borderRadius: 10, overflow: "hidden" }}>
              <Image
                style={{ width: Dimensions.get("window").width - 40 }}
                source={require("../../assets/products/beef4.png")}
              />
            </View>
            <View style={{ borderRadius: 10, overflow: "hidden" }}>
              <Image
                style={{ width: Dimensions.get("window").width - 40 }}
                source={require("../../assets/products/beef5.png")}
              />
            </View>
          </Carousel>
        </View>

        <TouchableOpacity
          onPress={() =>
            this.setState(prevState => {
              return {
                heart: !prevState.heart
              };
            })
          }
          style={{
            alignSelf: "flex-end",
            backgroundColor: "rgb(255, 255, 255)",
            margin: 10,
            padding: 7,
            borderRadius: 50,
            position: "relative",
            bottom: 25,
            right: 20,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5
          }}
        >
          {this.state.heart ? (
            <AntDesign
              style={styles.favIcon}
              color="#B50000"
              size={18}
              name="heart"
            />
          ) : (
            <AntDesign
              style={styles.favIcon}
              color="#B50000"
              size={18}
              name="hearto"
            />
          )}
        </TouchableOpacity>
        <View style={{ paddingHorizontal: 20 }}>
          <LatoText
            fontName="Lato-Regular"
            fonSiz={25}
            col="#5C5C5C"
            text={"Rib Eye"}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginTop: 22,
                alignItems: "center"
              }}
            >
              <LatoText
                fontName="Lato-Regular"
                fonSiz={17}
                col="#89898C"
                text={"$5.0 / lb "}
              />
              <LatoText
                fontName="Lato-Bold"
                fonSiz={20}
                col="#5C5C5C"
                text={" $4.5 / lb "}
              />
            </View>
            <View style={{ marginTop: 22 }}>
              <LatoText
                fontName="Lato-Regular"
                fonSiz={17}
                col="#B50000"
                text={" You will save 10% "}
              />
            </View>
          </View>
          <View style={{ marginTop: 22 }}>
            <LatoText
              fontName="Lato-Regular"
              fonSiz={17}
              col="#5C5C5C"
              text={
                "Eiusmod qui esse ullamco laborum quis. Magna duis laborum est et exercitation minim esse ad esse excepteur. Cupidatat minim consequat anim non laboris veniam nisi ullamco esse. "
              }
            />
          </View>
        
        </View>
        <Expandable/>
      </ScrollView>
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
