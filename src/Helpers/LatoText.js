import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";

class LatoText extends React.Component {
  state = {
    fontLoaded: false
  };
  async componentDidMount() {
    await Font.loadAsync({
      "Lato-Light": require("../../assets/fonts/Lato-Light.ttf"),
      "Lato-Bold": require("../../assets/fonts/Lato-Bold.ttf"),
      "Lato-Regular": require("../../assets/fonts/Lato-Regular.ttf"),
      "Sarabun-Regular": require("../../assets/fonts/Sarabun-Regular.ttf"),
      "Sarabun-Medium": require("../../assets/fonts/Sarabun-Medium.ttf"),
      "Sarabun-Light": require("../../assets/fonts/Sarabun-Light.ttf"),
      "Lato-LightItalic": require("../../assets/fonts/Lato-LightItalic.ttf")

    
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <Text
        style={{
          fontFamily: this.state.fontLoaded ? this.props.fontName : null,
          color: this.props.col,
          fontSize: this.props.fonSiz,
          textAlign:this.props.txtAlign && this.props.txtAlign,
          textDecorationLine:this.props.lineThrough && this.props.lineThrough,
          // textDecoration: this.props.lineThrough ? "line-through" : null
        }}
      >
        {this.props.text}
      </Text>
    );
  }
}
export default LatoText;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
