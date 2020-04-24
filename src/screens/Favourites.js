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
import FavCards from "../Helpers/FavCards";
import { bindActionCreators } from "redux";
import { cartAsync, cartSizeAsync } from "../store/actions";
import { connect } from "react-redux";
import axios from "axios";
import { NavigationEvents } from '@react-navigation/native';

const { width } = Dimensions.get("window");
const { height } = 300;

class Favourites extends Component {
  constructor(props) {
    super(props); 

    this.state = {
      heart: false,
      qt: 1,
      favourites: []
    };
  }

  componentWillMount(){
      axios.get('http://192.168.0.108:3000/get/all/favourites/'+this.props.user.user._id)
      .then(resp => this.setState({favourites: resp.data}))
      .catch(err => console.log(err))
  }

  componentDidMount(){
    axios.get('http://192.168.0.108:3000/get/all/favourites/'+this.props.user.user._id)
    .then(resp => this.setState({favourites: resp.data}))
    .catch(err => console.log(err))
}

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
             
             <NavigationEvents
                onDidFocus={() => Alert.alert('Refreshed')}
              />


        <ScrollView style={{ backgroundColor: "white" }}>
          <View style={{ marginVertical: 10, flexDirection: "row",width:'100%',flexWrap: 'wrap' }}>
            {this.state.favourites.length > 0 ? this.state.favourites.map((item,ind) => (
                  <FavCards
                  navigation={this.props.navigation}
                  key={1}
                  product={item}
                  />
            )): null}
           
           
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

const mapStateToProps = state => ({
  cart: state.Cart.cartData, 
  loading: state.Cart.cartLoading,
  cartSize: state.CartSize.cartSizeData,
  error: state.Cart.cartError,
  user: state.user.user,
  store: state.Store.storeData, 

});
const mapDispatchToProps = (dispatch, ownProps) =>
  bindActionCreators(
      {
          cartAsync, 
          cartSizeAsync
      },
      dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favourites);
