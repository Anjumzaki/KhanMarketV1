import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, Button, StatusBar } from "react-native";
import StoreCard from "../Components/StoreCard";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios";
import fb from "../config/Fire";
import firebase from "firebase";
import {Platform} from 'react-native';
import StoreHeader from "../Helpers/StoreHeader";

export default class Home extends React.Component {
  static navigationOptions = {
    header: null,
};
  constructor(props) {
    super(props);
    this.state = {
      stores: [],
      img: "",
      images: [],
      cards: [],
      image: ""
    };
  }
  componentDidMount() {
    axios
      .get("https://sheltered-scrubland-52295.herokuapp.com/get/stores/")
      .then(resp => {
        this.setState({
          stores: resp.data
        });
       
      });
  }
  render() {
    return (
      <View style={{ justifyContent: "center" }}>
        <StatusBar  translucent={true} barStyle="light-content" backgroundColor='transparent'/>
        <View>

        <ScrollView> 
          {this.state.stores.length > 0 &&
            this.state.stores.slice(0).reverse().map((item,ind) => (
              <StoreCard key={ind}
              key={item._id}
              navigation={this.props.navigation}
              name={item.storeName}
              distance="1 mile away"
              address={item.storeAddress}
              id={item._id}
            />
            ))}
        </ScrollView>
        </View>

      </View>
    );
  }
}
