import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, Button, StatusBar } from "react-native";
import StoreCard from "../Components/StoreCard";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import axios from 'axios'
import fb from '../config/Fire'
import firebase from 'firebase'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        stores: [],
        img: "",
        images:[]
    };
}

componentWillMount(){
    axios.get("http://192.168.0.103:3000/get/stores/")
    .then(resp => {
      // console.log("resp",resp.data) 

        for(var i=0; i<resp.data.length; i++){
          const storageRef = firebase.storage().ref('/store_images/'+resp.data[i]._id+".jpg");
          var that = this;
          var newImg='https://firebasestorage.googleapis.com/v0/b/khanmarket-75d3e.appspot.com/o/store_images%2F5e658fe1cead2c04281c9f86.jpg?alt=media&token=933829e6-bb7d-49c8-9d6f-cb387d090c38'
          storageRef.getDownloadURL().then(async function(url) {
            console.log("url unde wala",url);
            await that.state.images.push(url)
            console.log("after save")
            newImg=url
            //  that.setState({img: url})
          }, function(error){
              console.log(error);
          });
          console.log("url1111",newImg)
          this.state.images.push(newImg)
        }

        console.log("Images",this.state)
       

        
      this.setState({stores: resp.data})
    })
    .catch(err => console.log(err))
}


  render() {
    console.log("state home",this.state)

    // fb.storage().refFromURL('/store_images/5e658f62cead2c04281c9f85.jpg').getDownloadURL().then((url) => {
    //   this.setState({img: {uri: url}});
    // })
    // const url = await ref.getDownloadUrl();

    return (
      <View style={{ marginTop: 100, justifyContent: "center" }}>
        <ScrollView>
          {this.state.stores.map((store,index) => (
              <StoreCard key={index}
              navigation={this.props.navigation}
              name={store.storeName}
              distance="1 mile away"
              address={store.storeAddress}
              // img={require("../../assets/Store_Locator03.jpg")}
              img={{uri: this.state.images[index]}}
              />
          ))}
         

          {/* <StoreCard
            navigation={this.props.navigation} 
            name="Metro"
            distance="4 mile away"
            address="6493 Miller Ave undefined 40322 Minna... "
            img={require("../../assets/Store_Locator03.jpg")}
          />
          <StoreCard
            navigation={this.props.navigation}
            name="SB Market"
            distance="4 mile away"
            address="6493 Miller Ave undefined 40322 Minna... "
            img={require("../../assets/Store_Locator03.jpg")}
          />
          <StoreCard
            navigation={this.props.navigation}
            name="Khan Market"
            distance="1 mile away"
            address="6493 Miller Ave undefined 40322 Minna... "
            img={require("../../assets/Store_Locator03.jpg")}
          />
          <StoreCard
            navigation={this.props.navigation}
            name="Metro"
            distance="4 mile away"
            address="6493 Miller Ave undefined 40322 Minna... "
            img={require("../../assets/Store_Locator03.jpg")}
          />
          <StoreCard
            navigation={this.props.navigation}
            name="SB Market"
            distance="4 mile away"
            address="6493 Miller Ave undefined 40322 Minna... "
            img={require("../../assets/Store_Locator03.jpg")}
          /> */}
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
