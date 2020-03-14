import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { cardStyles } from "../styles/base";
import LatoText from "../Helpers/LatoText";
import { TouchableOpacity } from "react-native-gesture-handler";
import firebase from "firebase";

export default class StoreCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     image:""
    };
  }
  componentDidMount() {
        const ref = firebase
          .storage()
          .ref("/store_images/"+this.props.id+".jpg");
        ref.getDownloadURL().then(url => {
          console.log(url, "I ma here");
          this.setState({ image: url });
        });
  }
  render() {
    const { name, distance, address, id } = this.props;
    console.log("props data", name, distance, address)
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.push("StoreDetails",{
          storeId: id
        })}
        style={cardStyles.storeCard}
      >
        <View style={cardStyles.cImgWrap}> 
          <Image
            style={{ width: "100%", height: 200 }}
            source={{uri:this.state.image}}
          />
        </View>
        <View style={cardStyles.cTextWrap}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <LatoText
              fontName="Lato-Bold"
              fonSiz={20}
              col="#5C5C5C"
              text={name}
            />
            <LatoText
              fontName="Lato-Regular"
              fonSiz={17}
              col="#B50000"
              text={distance}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 10
            }}
          >
            <LatoText
              fontName="Lato-Bold"
              fonSiz={17}
              col="#89898C"
              text={address}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
