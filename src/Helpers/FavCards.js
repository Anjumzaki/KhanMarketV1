import React from "react";
import { AntDesign } from "@expo/vector-icons";
import firebase from "firebase";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Dimensions,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import LatoText from "./LatoText";
import { btnStyles } from "../styles/base";

class FavCards extends React.Component {
  state = {
    heart: true,
    image: "",
    qt: 1,
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
      <View style={styles.procards}>
        <View style={styles.wrapCards}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.push("ProductDetails", {
                product: this.props.product,
              })
            }
          >
            <Image
              style={styles.proCardsImage}
              source={require("../../assets/products/veg1.png")}
            />
          </TouchableOpacity>
          <View style={styles.underCard}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <LatoText
                fontName="Lato-Regular"
                fonSiz={20}
                col="#5C5C5C"
                text={this.props.product.productName}
              ></LatoText>

              <TouchableOpacity
                onPress={() =>
                  this.setState((prevState) => {
                    return {
                      heart: !prevState.heart,
                    };
                  })
                }
              >
                {this.state.heart ? (
                  <AntDesign color="#B50000" size={18} name="heart" />
                ) : (
                  <AntDesign color="#B50000" size={18} name="hearto" />
                )}
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, flexDirection: "row", paddingTop: 5 }}>
              <LatoText
                fontName="Lato-Regular"
                fonSiz={13}
                col="#89898C"
                lineThrough="line-through"
                text={"$" + this.props.product.price + " / kg"}
              ></LatoText>
              <Text> 

              </Text>
              <LatoText
                fontName="Lato-Regular"
                fonSiz={13}
                col="#2E2E2E"
                text={
                  "$" +
                  (this.props.product.price -
                    (this.props.product.price * this.props.product.discount) /
                      100) +
                  " / kg"
                }
              ></LatoText>
            </View>
            <View style={{marginBottom:10}}>
              <LatoText
                fontName="Lato-Regular"
                fonSiz={15}
                col="#B50000"
                text={"You will save " + this.props.product.discount + "%"}
              ></LatoText>
            </View>
           <View>
              <LatoText
                fontName="Lato-Regular"
                fonSiz={13}
                col="#2E2E2E"
                text={"Khan Market"}
              />
              <LatoText
                fontName="Lato-Regular"
                fonSiz={15}
                col="#B50000"
                text={"3 miles away"}
              />
           </View>
            
            <View style={{ marginTop: 10 }}>
              {this.state.cart ? (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    style={btnStyles.plusBtn}
                    onPress={() => this.handleChange(-1)}
                  >
                    <AntDesign color="#B50000" size={18} name="minus" />
                  </TouchableOpacity>
                  <LatoText
                    fontName="Lato-Regular"
                    fonSiz={15}
                    col="#5C5C5C"
                    text={this.state.qt}
                  />
                  <TouchableOpacity
                    style={btnStyles.plusBtn}
                    onPress={() => this.handleChange(1)}
                  >
                    <AntDesign color="#B50000" size={18} name="plus" />
                  </TouchableOpacity>
                </View>
              ) : (
                <TouchableOpacity
                  onPress={() => this.setState({ cart: true })}
                  style={btnStyles.cartBtn}
                >
                  <LatoText
                    fontName="Lato-Regular"
                    fonSiz={15}
                    col="white"
                    text="Add To Cart"
                  ></LatoText>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default FavCards;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  procards: {
    width: Dimensions.get("window").width - 20,
    marginLeft: 10,
    height: Dimensions.get("window").width / 2,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: "center",
    backgroundColor: "white",
    marginVertical: 10,
  },
  proCardsImage: {
    width: Dimensions.get("window").width / 3,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    height: Dimensions.get("window").width / 2,
  },
  underCard: {
    flex: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
  },
  wrapCards: {
    width: Dimensions.get("window").width - 20,
    height: Dimensions.get("window").width / 2,
    flexDirection: "row",
  },
});
