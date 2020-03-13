import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import LatoText from "./LatoText";
import { AntDesign } from "@expo/vector-icons";
import { btnStyles } from "../styles/base";

class ProCards extends React.Component {
  state = {
    heart: false,
    cart: false,
    qt: 1
  };
  handleChange (num){
    var preNum = this.state.qt
    preNum =num + preNum
    console.log(preNum)
    if(preNum>=1){
      this.setState({qt:preNum})
    }
  }
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.push("ProductDetails")}
        style={styles.procards}
      >
        <ImageBackground
          style={styles.proCardsImage}
          source={this.props.product.image}
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
        <View style={styles.underCard}>
          <LatoText
            fontName="Lato-Regular"
            fonSiz={20}
            col="#5C5C5C"
            text={this.props.product.name}
          ></LatoText>
          <View style={{ flex: 1, flexDirection: "row", paddingTop: 5 }}>
            <LatoText
              fontName="Lato-Regular"
              fonSiz={17}
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
              text={"You will save" + this.props.product.discount + "%"}
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
                <TouchableOpacity style={btnStyles.plusBtn} onPress={()=>this.handleChange(-1)}>
                  <AntDesign color="#B50000" size={18} name="minus" />
                </TouchableOpacity>
                <LatoText
                  fontName="Lato-Regular"
                  fonSiz={15}
                  col="#5C5C5C"
                  text={this.state.qt}
                />
                <TouchableOpacity style={btnStyles.plusBtn} onPress={()=>this.handleChange(1)}>
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
      </TouchableOpacity>
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
