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
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from "react-native-responsive-screen";
import { conStyles, textStyles, textIn, btnStyles } from "../styles/base";
import LatoText from "../Helpers/LatoText";

export default class SignUp1 extends React.Component {
    static navigationOptions = { header: null };

    constructor(props) {
        super(props);

        this.state = {
            icEye: "visibility-off",
            isPassword: true,
            fontLoaded: false
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
        return (
            <SafeAreaView style={[conStyles.safeAreaMy, { backgroundColor: 'white' }]}>
                <StatusBar translucent={true} barStyle="dark-content"  />
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ paddingLeft: 30, paddingTop: 30, paddingBottom: 10 }}>
                    <Image source={require('../../assets/back.png')} />
                </TouchableOpacity>
                <ScrollView
                    style={{ flex: 1 }}
                    contentContainerStyle={[conStyles.scroll, { justifyContent: 'space-around' }]}
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
                        <View style={{paddingTop:40}}>
                            <View style={textIn.label}>
                                <LatoText
                                    fontName="Lato-Regular"
                                    fonSiz={17}
                                    col="#5C5C5C"
                                    text={"Password"}
                                />
                            </View>
                            <View>
                                <TextInput style={textIn.input} secureTextEntry={isPassword} />
                                <Icon
                                    style={styles.icon}
                                    name={icEye}
                                    size={20}
                                    color={"#000000"}
                                    onPress={this.changePwdType}
                                />
                            </View>
                            <TouchableOpacity
                                style={{
                                    justifyContent: "flex-end",
                                    alignItems: "flex-end",
                                    marginTop: 10
                                }}
                            >
                                <LatoText
                                    fontName="Lato-Regular"
                                    fonSiz={15}
                                    col="#89898C"
                                    text={"At least 6 charachters"}
                                />
                            </TouchableOpacity>
                        </View>
                        <View>
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
                            onPress={() => this.props.navigation.push("App")}
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
                            onPress={() => this.props.navigation.push("SignUp1")}
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
