import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, Button, StatusBar } from "react-native";
import StoreCard from "../Components/StoreCard";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios";
import fb from "../config/Fire";
import firebase from "firebase";

export default class Home extends React.Component {
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
      .get("http://192.168.0.103:3000/get/stores/")
      .then(resp => {
        this.setState({
          stores: resp.data
        });
        // const ref = firebase
        //   .storage()
        //   .ref("/store_images/5e6b45971ccdc7e0d1210ed5.jpg");
        // ref.getDownloadURL().then(url => {
        //   console.log(url, "I ma here");
        //   this.setState({ image: url });
        // });
      });
  }
  render() {
    console.log(this.state.stores);
    return (
      <View style={{ marginTop: 100, justifyContent: "center" }}>
        <ScrollView>
          {this.state.stores.length > 0 &&
            this.state.stores.map((item,ind) => (
              <StoreCard key={ind}
              key={item._id}
              navigation={this.props.navigation}
              name={item.storeName}
              distance="1 mile away"
              address={item.storeAddress}
              id={item._id}
            />
            ))}


          <Button
            title="React Native by Example"
            onPress={() =>
              this.props.navigation.push("Details", {
                name: "React Native by Example "
              })
            }
          />
          <Button
            title="React Native School"
            onPress={() =>
              this.props.navigation.push("Details", {
                name: "React Native School"
              })
            }
          />
          <Button
            title="Drawer"
            onPress={() => this.props.navigation.toggleDrawer()}
          />
        </ScrollView>
      </View>
    );
  }
}
