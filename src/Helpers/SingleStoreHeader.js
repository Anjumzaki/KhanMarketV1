import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  TextInput,
  StatusBar
} from "react-native";
import { conStyles, headerStyles } from "../styles/base";

import {
  Entypo,
  Feather,
  FontAwesome,
  EvilIcons,
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import LatoText from "./LatoText";
import { TouchableOpacity } from "react-native-gesture-handler";
import { bindActionCreators } from "redux";
import { storeAsync } from "../store/actions";
import { connect } from "react-redux";

class SingleStoreHeader extends React.Component {
  render() {
    console.log("HEAAAAAAAAAAAAAAAAAADER", this.props.store)

    return (
      <View
        style={{
          height: 140 + StatusBar.currentHeight,
          width: Dimensions.get("window").width,
          justifyContent: "flex-end",
          padding: 5,
          paddingTop: 0,
          backgroundColor: "transparent",
          shadowOffset: {
            width: 0,
            height: 0
          },
          shadowOpacity: 1,
          shadowRadius: 3.84,
          borderTopWidth: 0,
          elevation: 5
        }}
      >
        <Image
          style={{
            height: 140 + StatusBar.currentHeight,
            width: Dimensions.get("window").width,
            position: "absolute",
            top: 0,
            left: 0
          }}
          source={require("../../assets/bgheader.png")}
          resizeMode="cover"
        />
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <TouchableOpacity
            style={{ padding: 20 }}
            onPress={() => this.props.navigation.goBack()}
          >
            <MaterialIcons name="arrow-back" color="white" size={25} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.props.navigation.push('StoreInfo')} style={{ padding: 20 }}>
            <LatoText
              fontName="Lato-Regular"
              fonSiz={20}
              col="white"
              text={this.props.store.toUpperCase().substring(0,18)}
            />
          </TouchableOpacity> 
          <TouchableOpacity
            onPress={() => this.props.navigation.push("Cart")}
            style={{ padding: 20 }}
          >
            <View>
              <View style={headerStyles.cartTxt}>
                <LatoText
                  fontName="Lato-Regular"
                  fonSiz={7}
                  col="white"
                  text={"1"}
                />
              </View>
              <MaterialIcons name="shopping-cart" size={26} color={"white"} />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            bottom: 15
          }}
        >
          <MaterialIcons name="location-on" size={16} color="white" />
          <LatoText
            fontName="Lato-Light"
            fonSiz={16}
            col="white"
            text="Hemisphere Black 32"
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.wrapperText}>
            <EvilIcons name="search" size={26} color="#89898c" />
            <TextInput style={styles.textI} placeholder="Search..." />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textI: {
    width: "100%",
    paddingLeft: 5,
    fontSize: 17
  },
  wrapperText: {
    flexDirection: "row",
    backgroundColor: "white",
    width: "94%",
    paddingHorizontal: 7,
    paddingVertical: 7,
    borderRadius: 5,
    paddingLeft: 20,
    marginLeft: 10,
    marginBottom: 10,
    opacity: 0.9,
    alignItems: "center"
  }
});

const mapStateToProps = state => ({
  store: state.Store.storeData, 
  loading: state.Store.storeLoading,
  error: state.Store.storeError
});
const mapDispatchToProps = (dispatch, ownProps) =>
  bindActionCreators(
      {
          storeAsync
      },
      dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleStoreHeader);
