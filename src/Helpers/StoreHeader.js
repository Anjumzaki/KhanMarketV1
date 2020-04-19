import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, Button, Image,StatusBar } from "react-native";
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
import { storeAsync, cartAsync } from "../store/actions";
import { connect } from "react-redux";


class StoreHeader extends React.Component {
  render() {
    return (
      <SafeAreaView style={[conStyles.safeAreaMy, { backgroundColor: '#2E2E2E' }]}>
        <StatusBar translucent={true} barStyle='light-content'/>
        <View style={headerStyles.storeStyles}>
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <TouchableOpacity
            style={{padding:20}}
              onPress={() => this.props.navigation.toggleDrawer()}
            >
              <Image source={require("../../assets/menu-1.png")} />
            </TouchableOpacity>
            <View
              style={{padding:20}}>
              <LatoText
                fontName="Lato-Regular"
                fonSiz={20}
                col="white"
                text={"STORES NEAR YOU"}
              />
            </View>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Cart')}   style={{padding:20}}>
               <View>
                  <View style={headerStyles.cartTxt}>
                    <LatoText
                      fontName="Lato-Regular"
                      fonSiz={7}
                      col="white"
                      text={this.props.cartData.length}
                    />
                  </View>
                  <MaterialIcons
                    name="shopping-cart"
                    size={26}
                    color={"white"}
                  />
                </View>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row",justifyContent:'center'}}>
            <EvilIcons name="location" size={26} color={"white"} />
            <LatoText
              fontName="Lato-Light"
              fonSiz={17}
              col="white"
              text={"4228 Homestead Rd Cedar Hill, California..."}
              textDec={"underline"}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  store: state.Store.storeData, 
  cartData: state.Cart.cartData, 
  loading: state.Store.storeLoading,
  error: state.Store.storeError
});
const mapDispatchToProps = (dispatch, ownProps) =>
  bindActionCreators(
      {
          storeAsync,
          cartAsync
      },
      dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoreHeader);