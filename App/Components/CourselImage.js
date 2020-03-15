import React from "react";
import {
  AntDesign} from '@expo/vector-icons'
  import firebase from "firebase";
  import { StyleSheet, Image, Dimensions, ScrollView,ImageBackground } from 'react-native';
  import { TouchableOpacity } from "react-native-gesture-handler";
  import LatoText from '../Helpers/LatoText'
  import { btnStyles } from "../styles/base";

class CourseImage extends React.Component {
  state = {
    heart:false,
    image: ""
  } 

  componentWillMount() {
    const ref = firebase
      .storage()
      .ref("/product_images/"+this.props.id+"_"+this.props.index+".jpg");
    ref.getDownloadURL().then(url => {
      console.log(url, "I ma here in coursel");
      this.setState({ image: url });
    });
}


  render() {
    //   console.log("COURSEL STATE", this.state, this.props.index)
      // var url= "../../assets/products/beef"+this.props.index+".png"
      // console.log("URL",url)
    return (
        <Image
            style={{ width: Dimensions.get("window").width - 40 }}
            source={{uri: this.state.image}}
      />
    );
  }
}
export default CourseImage;
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
