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
import { bindActionCreators } from "redux";
import { cartAsync } from "../store/actions";
import { connect } from "react-redux";
import axios from "axios";
import timestamp  from "time-stamp";

class Cart extends Component {
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
    console.log("DATEEEEEEEEE",new Date(), console.log(timestamp()))
    console.log(timestamp('DDMMYYYY'));
    console.log(timestamp('YYYY-MM-DD'));

    console.log("CO props user", this.props.user)
    if(this.props.cart.length >0){
      var sId = this.props.cart[0].product.storeId
    }else{
      var sId = "123"
    }

    var subTotal = 0
    
    for(var i=0; i < this.props.cart.length; i++){
      var temp=this.props.cart[i].price
      subTotal = subTotal + parseFloat(temp) 
    }
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <ScrollView style={{ backgroundColor: "white" }}>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingVertical: 30,
              alignItems: "center"
            }}
          >
            <LatoText
              fontName="Lato-Bold"
              fonSiz={20}
              col="#2E2E2E"
              text="Pickup From"
            ></LatoText>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingBottom: 0,
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
                fontName="Lato-Bold"
                fonSiz={20}
                col="#2E2E2E"
                text={this.props.store.name}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingLeft: 70,
              justifyContent: "space-between"
            }}
          >
            <LatoText
              fontName="Lato-Regular"
              fonSiz={17}
              col="#2E2E2E"
              text={this.props.store.address}
            />
          </View>
          
          <View style={lines.simple} />
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingTop: 30,
              paddingBottom: 20,

              alignItems: "center"
            }}
          >
            <LatoText
              fontName="Lato-Bold"
              fonSiz={20}
              col="#2E2E2E"
              text="Order should be ready till"
            ></LatoText>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingBottom: 20,
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <View
              style={{
                flexDirection: "row",

                alignItems: "center"
              }}
            >
              <LatoText
                fontName="Lato-Regular"
                fonSiz={17}
                col="#2E2E2E"
                text=" Jan 3, 2020 "
              ></LatoText>
              <LatoText
                fontName="Lato-Regular"
                fonSiz={17}
                col="#2E2E2E"
                text=" 5:00 PM - 6:00 PM "
              ></LatoText>
            </View>
            <MaterialCommunityIcons name="pencil" size={20} color={"#2E2E2E"} />
          </View>
          <View style={lines.simple} />
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingTop: 30,
              paddingBottom: 20,
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <LatoText
              fontName="Lato-Bold"
              fonSiz={20}
              col="#2E2E2E"
              text="Contact Details"
            />
            <MaterialCommunityIcons name="pencil" size={20} color={"#2E2E2E"} />
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingBottom: 20,
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <LatoText
              fontName="Lato-Regular"
              fonSiz={17}
              col="#2E2E2E"
              text="Name"
            />
            <LatoText
              fontName="Lato-Regular"
              fonSiz={17}
              col="#2E2E2E"
              text={this.props.user.user.name}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingBottom: 20,
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <LatoText
              fontName="Lato-Regular"
              fonSiz={17}
              col="#2E2E2E"
              text="Phone Number"
            />
            <LatoText
              fontName="Lato-Regular"
              fonSiz={17}
              col="#2E2E2E"
              text={this.props.user.user.mobile}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingBottom: 20,
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <LatoText
              fontName="Lato-Regular"
              fonSiz={17}
              col="#2E2E2E"
              text="Email (optional)"
            />
            <LatoText
              fontName="Lato-Regular"
              fonSiz={17}
              col="#2E2E2E"
              text={this.props.user.user.email}
            />
          </View>
          <View style={{ alignItems: "flex-end", paddingHorizontal: 20 }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Checkout1")}
              style={[btnStyles.cartBtnOutline, { width: "35%" }]}
            >
              <LatoText
                fontName="Lato-Regular"
                fonSiz={18}
                col="#2E2E2E"
                text="VERIFY"
              ></LatoText>
            </TouchableOpacity>
          </View>
          <View style={lines.simple} />
          <View
            style={{
              paddingHorizontal: 20,
              paddingTop: 30,
              paddingBottom: 20,
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <LatoText
              fontName="Lato-Regular"
              fonSiz={20}
              col="#2E2E2E"
              text="Will someone else be picking your order?"
            />
          </View>
          <View
            style={{
              paddingHorizontal: 20,
              paddingTop: 10,
              paddingBottom: 20,
            }}
          >
            <CheckBox
              style={{ flex: 1, }}
              onClick={() => {
                this.setState({
                  isChecked: !this.state.isChecked
                });
              }}
              isChecked={this.state.isChecked}
              rightText={"Yes"}
            />
          </View>
        </ScrollView>
        <View style={bottomTab.cartSheet}>
          <TouchableOpacity
            onPress={() => {
              this.setState({ cart: true })
              axios.post('http://192.168.0.108:3000/add/order',{
                storeId: sId,
                products: this.props.cart,
                totalAmount: subTotal,
                storeName: this.props.store.name, 
                userId: this.props.user.user._id,
                name: this.props.user.user.name,
                phone: this.props.user.user.mobile,
                email: this.props.user.user.email,
                address: "bac Street",
                orderTime: "5:00 PM",
                orderDate: timestamp('DD-MM-YYYY'),
                orderTimeZone: "UST",
                tax: "2.78",
                orderNumber: "zk342"
              }).then(resp =>  {
                this.props.navigation.navigate('QrCode',{
                  orderId: resp.data.order1._id
                })
              })
            }}
            style={[btnStyles.cartBtn, { width: "100%" }]}
          >
            <LatoText
              fontName="Lato-Regular"
              fonSiz={15}
              col="white"
              text="CONFIRM"
            ></LatoText>
          </TouchableOpacity>
        </View>
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


const mapStateToProps = state => ({
  cart: state.Cart.cartData, 
  loading: state.Cart.cartLoading,
  error: state.Cart.cartError,
  user: state.user.user,
  store: state.Store.storeData, 

});
const mapDispatchToProps = (dispatch, ownProps) =>
  bindActionCreators(
      {
          cartAsync,
      },
      dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);