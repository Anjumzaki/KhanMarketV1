import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Dimensions
} from "react-native";
import { BackStack } from "../Helpers/BackStack";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import * as Font from "expo-font";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChangeText as lor,
  removeOrientationListener as rol
} from "react-native-responsive-screen";
import { conStyles, textStyles, textIn, btnStyles } from "../styles/base";
import LatoText from "../Helpers/LatoText";
import Axios from "axios";

export default class SignUp1 extends React.Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);

    this.state = {
      icEye: "visibility-off",
      isPassword: true,
      fontLoaded: false,
      name: "",
      email: "",
      mobile: "",
      zipCode: "",
      password: ""
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      "Lato-Light": require("../../assets/fonts/Lato-Light.ttf"),
      "Lato-Bold": require("../../assets/fonts/Lato-Bold.ttf"),
      "Lato-Regular": require("../../assets/fonts/Lato-Regular.ttf"),
      "Sarabun-Regular": require("../../assets/fonts/Sarabun-Regular.ttf"),
      "Sarabun-Medium": require("../../assets/fonts/Sarabun-Medium.ttf"),
      "Sarabun-Light": require("../../assets/fonts/Sarabun-Light.ttf")
    });

    this.setState({ fontLoaded: true });
  }
  getRef = ref => {
    if (this.props.getRef) this.props.getRef(ref);
  };
  changePwdType = () => {
    const { isPassword } = this.state;
    // set new state value
    this.setState({
      icEye: isPassword ? "visibility" : "visibility-off",
      isPassword: !isPassword
    });
  };
  render() {
    const { icEye, isPassword } = this.state;
    const styles = StyleSheet.create({
      logo: {
        width: wp("30%"),
        alignSelf: "center"
      },
      icon: {
        position: "absolute",
        right: 10,
        paddingTop: 8
      },
      myText: { fontSize: hp("5%") }
    });
    console.log("this", this.state)
    return (
      <SafeAreaView style={[conStyles.safeAreaMy, { backgroundColor: 'white' }]}>
        <StatusBar translucent={true} barStyle="dark-content"  />
        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ paddingLeft: 30, paddingTop: 30, paddingBottom: 10 }}>
          <Image source={require('../../assets/back.png')} />
        </TouchableOpacity>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={[conStyles.scroll,{justifyContent:'space-around'}]}
        >

          <Image
            style={styles.logo}
            source={require(".././../assets/logo.png")}
            resizeMode="contain"
          />
          <View
            style={{
              justifyContent: "flex-start",
              paddingHorizontal: wp("10%"),
            }}
          >
            <LatoText
              fontName="Lato-Regular"
              fonSiz={20}
              col="#000000"
              text={"SIGN UP"}
            />
            <View style={textIn.Flabel}>
              <View>
                <LatoText
                  fontName="Lato-Regular"
                  fonSiz={17}
                  col="#5C5C5C"
                  text={"Name"}
                />
              </View>
              <View>
                <TextInput style={textIn.input} 
                onChangeText={ (name) => this.setState({
                  name
                })}
                value={this.state.name}  />
              </View>
            </View>
            <View>
              <View style={textIn.label}>
                <LatoText
                  fontName="Lato-Regular"
                  fonSiz={17}
                  col="#5C5C5C"
                  text={"Email Address"}
                />
              </View>
              <View>

                <TextInput style={textIn.input} 
                onChangeText={ (email) => this.setState({
                  email
                })}
                value={this.state.email}/>

              </View>

            </View>
            <View>
              <View style={textIn.label}>
                <LatoText
                  fontName="Lato-Regular"
                  fonSiz={17}
                  col="#5C5C5C"
                  text={"Phone Number"}
                />
              </View>
              <View style={{ marginBottom: 10, flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}>
                <Image
                  style={{ width: wp('8%') }}
                  source={require('../../assets/america.png')}
                />
                <View
                  style={{ width: wp('8%'), justifyContent: 'center', alignContent: 'center', paddingLeft: 5 }}
                >
                  <LatoText
                    fontName="Lato-Regular"
                    fonSiz={17}
                    col="#5C5C5C"
                    text={"+1"}
                  />

                </View>
                <TextInput placeholder={'(555) 555-5678'} 
                keyboardType={'numeric'}
                onChangeText={ (mobile) => this.setState({
                  mobile
                })}
                value={this.state.mobile}
                style={[textIn.input, { width: wp('64%') }]} />

              </View>
              
              <View
                style={{
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                <TouchableOpacity
                  style={{
                    paddingHorizontal:20,
                    paddingVertical:10,
                    borderColor: '#C9C9C9',
                    borderWidth: 1,
                    borderRadius:5
                  }}
                
                >
                  <LatoText
                    fontName="Lato-Regular"
                    fonSiz={17}
                    col="#C9C9C9"
                    text={"Verify"}
                  />
                </TouchableOpacity>
              </View>
              <View>
              <View style={textIn.label}>
                <LatoText
                  fontName="Lato-Regular"
                  fonSiz={17}
                  col="#5C5C5C"
                  text={"Zip Code"}
                />
              </View>
              <View>

                <TextInput placeholder={'00000'} style={textIn.input} 
                onChangeText={ (zipCode) => this.setState({
                  zipCode
                })} 
                value={this.state.zipCode}/>

              </View>

            </View>
            </View>
          </View>
          <View
            style={{
              justifyContent: "space-evenly",

              paddingHorizontal: wp("10%")
            }}
          >
            <TouchableOpacity
              style={btnStyles.basic}
              onPress={() => this.props.navigation.navigate("ChoosePass",{
                name: this.state.name,
                email: this.state.email,
                mobile: this.state.mobile,
                zipCode: this.state.zipCode,
                password: this.state.password,
              })}
            >
              <LatoText
                fontName="Lato-Regular"
                fonSiz={17}
                col="white"
                text={"Verify"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ alignItems: "center", marginTop: 20 }}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <LatoText
                fontName="Lato-Regular"
                fonSiz={17}
                col="#B50000"
                text={"Already a member Sign In "}
              />
            </TouchableOpacity>

          </View>

        </ScrollView>
      </SafeAreaView>
    );
  }
}
