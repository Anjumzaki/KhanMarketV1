import React from "react";
import { AntDesign } from "@expo/vector-icons";
import firebase from "firebase";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import LatoText from "./LatoText";
import { btnStyles } from "../styles/base";

class ProCards extends React.Component {
  state = {
    heart: false,
    image: "",
    qt: 1
  };

  componentDidMount() {
    const ref = firebase
      .storage()
      .ref("/product_images/" + this.props.product._id + "_1.jpg");
    ref.getDownloadURL().then(url => {
      this.setState({ image: url });
    });
  }
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
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.push("ProductDetails", {
              product: this.props.product
            })
          }
        >
          <ImageBackground
            style={styles.proCardsImage}
            source={{ uri: this.state.image }}
          >
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
                backgroundColor: "rgba(255, 255, 255,0.5)",
                margin: 10,
                padding: 7,
                borderRadius: 50
              }}
            >
              {this.state.heart ? (
                <AntDesign color="#B50000" size={18} name="heart" />
              ) : (
                <AntDesign color="#B50000" size={18} name="hearto" />
              )}
            </TouchableOpacity>
          </ImageBackground>
        </TouchableOpacity>
        <View style={styles.underCard}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.push("ProductDetails", {
                product: this.props.product
              })
            }
          >
            <LatoText
              fontName="Lato-Regular"
              fonSiz={20}
              col="#5C5C5C"
              text={this.props.product.productName}
            ></LatoText>
          </TouchableOpacity>

          <View style={{ flex: 1, flexDirection: "row", paddingTop: 5 }}>
            <LatoText
              fontName="Lato-Regular"
              fonSiz={17}
              lineThrough="line-through"
              col="#89898C"
              text={"$" + this.props.product.price + " / kg"}
            ></LatoText>
            <Text> </Text>
            <LatoText
              fontName="Lato-Regular"
              fonSiz={17}
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
          <View>
            <LatoText
              fontName="Lato-Regular"
              fonSiz={15}
              col="#B50000"
              text={"You will save " + this.props.product.discount + "%"}
            ></LatoText>
          </View>
          <View style={{ marginTop: 20 }}>
            {this.state.cart ? (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center"
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
    );
  }
}
export default ProCards;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  procards: {
    width: 217,
    height: 303,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5
  },
  proCardsImage: {
    width: 217,
    height: 155,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    overflow: "hidden"
  },
  underCard: {
    backgroundColor: "white",
    height: 150,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10
  }
});
