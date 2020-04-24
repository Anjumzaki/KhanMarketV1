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

class OrderCards extends React.Component {
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
    console.log("order",this.props.order)
    return (
      <View style={styles.procards}>
        <View style={styles.wrapCards}>
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
                text={this.props.order.storeName}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingTop: 5,
                justifyContent: "space-between",
              }}
            >
              <LatoText
                fontName="Lato-Regular"
                fonSiz={17}
                col="#5C5C5C"
                text={"Order # "+this.props.order.orderNumber}
              />
              {this.props.order.isRejected === true ? (

              <LatoText
                fontName="Lato-Regular"
                fonSiz={15}
                col="#808080"
                text={
                    "Cancelled" 
                }
              />) : (
                <LatoText
                fontName="Lato-Regular"
                fonSiz={15}
                col="#2AA034"
                text={
                  this.props.order.isAccepted === true && this.props.order.isInPreparation === true ? (
                    "Being Prepared"
                  ) : (
                    this.props.order.isAccepted === true && this.props.order.isPicked === true ? (
                      "Completed"
                    ): (
                      "Wait"
                    )
                  )
                }
              />
              )}
            </View>
            <View>
              <View style={{ marginBottom: 10 }}>
                <LatoText
                  fontName="Lato-Regular"
                  fonSiz={17}
                  col="#2E2E2E"
                  text={"Total: $"+parseFloat(this.props.order.totalAmount).toFixed(2)}
                />
              </View>
              <View style={{flexDirection:"row",justifyContent:'space-between'}}>
                <LatoText
                  fontName="Lato-Regular"
                  fonSiz={15}
                  col="#5C5C5C"
                  text={this.props.order.orderDate + " "+ this.props.order.orderTime}
                />
                 <LatoText
                  fontName="Lato-Regular"
                  fonSiz={15}
                  col="#B50000"
                  text={"Cancel Order"}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default OrderCards;
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
    height: Dimensions.get("window").width / 2.5,
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

  underCard: {
    flex: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: Dimensions.get("window").width / 2.5,
    justifyContent: "space-between",
    padding: 10,
  },
  wrapCards: {
    width: Dimensions.get("window").width - 20,
    height: Dimensions.get("window").width / 2.5,
    flexDirection: "row",
  },
});
