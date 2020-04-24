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
import { MaterialCommunityIcons, } from "@expo/vector-icons";
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
import QRCode from 'react-native-qrcode-generator';

import timestamp from "time-stamp";

class OrderDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            heart: false,
            qt: 1,
            showNum: false,
            step: 0,
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
        console.log("DATEEEEEEEEE", new Date(), console.log(timestamp()))
        console.log(timestamp('DDMMYYYY'));
        console.log(timestamp('YYYY-MM-DD'));

        console.log("CO props user", this.props.user)
        if (this.props.cart.length > 0) {
            var sId = this.props.cart[0].product.storeId
        } else {
            var sId = "123"
        }

        var subTotal = 0

        for (var i = 0; i < this.props.cart.length; i++) {
            var temp = this.props.cart[i].price
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
                            alignItems: "center",
                            justifyContent: 'space-between'
                        }}
                    >
                        <LatoText
                            fontName="Lato-Regular"
                            fonSiz={20}
                            col="#2E2E2E"
                            text="Order DBz"
                        ></LatoText>
                        {this.state.showNum ?
                            <TouchableOpacity onPress={() => this.setState({ showNum: false })} style={{ flexDirection: 'row', alignItems: 'flex-end' }}>

                                <MaterialCommunityIcons style={{ marginRight: 5 }} name="chevron-up" color="#2E2E2E" size={20} />
                                <LatoText
                                    fontName="Lato-Regular"
                                    fonSiz={20}
                                    col="#2E2E2E"
                                    text="Less"
                                ></LatoText>
                            </TouchableOpacity> :
                            <TouchableOpacity onPress={() => this.setState({ showNum: true })} style={{ flexDirection: 'row', alignItems: 'flex-end' }}>

                                <MaterialCommunityIcons style={{ marginRight: 5 }} name="chevron-down" color="#2E2E2E" size={20} />
                                <LatoText
                                    fontName="Lato-Regular"
                                    fonSiz={20}
                                    col="#2E2E2E"
                                    text="Expand"
                                ></LatoText>
                            </TouchableOpacity>

                        }


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
                    {this.state.showNum &&
                        <View
                            style={{
                                flexDirection: "row",
                                paddingHorizontal: 20,
                                paddingLeft: 70,
                                justifyContent: "space-between",
                                paddingTop: 10
                            }}
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <MaterialCommunityIcons name="phone" size={20} color={"#2E2E2E"} style={{ paddingRight: 10 }} />
                                <LatoText
                                    fontName="Lato-Regular"
                                    fonSiz={17}
                                    col="#2E2E2E"
                                    text={'+923137669965'}
                                />
                            </View>

                            <TouchableOpacity>
                                <LatoText
                                    fontName="Lato-Regular"
                                    fonSiz={17}
                                    col="#B50000"
                                    text={'Call'}
                                />
                            </TouchableOpacity>

                        </View>
                    }


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
                    </View>
                    <View style={lines.simple} />
                    <View style={{ marginHorizontal: 30, marginVertical: 10 }}>


                        {this.state.step == 0 &&
                            <Image style={{ width: '100%' }} resizeMode="contain" source={require('../../assets/order1.png')} />
                        }
                        {this.state.step == 1 &&
                            <Image style={{ width: '100%' }} resizeMode="contain" source={require('../../assets/order2.png')} />
                        }
                        {this.state.step == 2 &&
                            <Image style={{ width: '100%' }} resizeMode="contain" source={require('../../assets/order3.png')} />
                        }
                        {this.state.step == 3 &&
                            <Image style={{ width: '100%' }} resizeMode="contain" source={require('../../assets/order4.png')} />
                        }
                    </View>
                    <View style={lines.simple} />
                    <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 20 }}>
                        <View style={{paddingBottom:20}}>
                            <LatoText
                                fontName="Lato-Regular"
                                fonSiz={15}
                                col="#2E2E2E"
                                text=" Use the below QR code while recieving the order "
                            ></LatoText>
                        </View>

                        <QRCode
                            value={this.props.orderId}
                            size={200}
                            bgColor='black'
                            fgColor='white' />
                    </View>

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
                            col="#5C5C5C"
                            text="Items In Cart"
                        />
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            paddingHorizontal: 20,
                            paddingBottom: 20,
                            alignItems: "center",
                        }}
                    >
                        <View style={{width:'55%'}}>
                        <LatoText
                            fontName="Lato-Regular"
                            fonSiz={17}
                            col="#2E2E2E"
                            text="Name"
                        />
                        </View>
                       <View style={{width:'45%',flexDirection:'row',justifyContent:'space-between'}}>
                       <LatoText
                            fontName="Lato-Regular"
                            fonSiz={15}
                            col="#2E2E2E"
                            text={'$4.50'}
                        />
                       <LatoText
                            fontName="Lato-Regular"
                            fonSiz={15}
                            col="#2E2E2E"
                            text={'2'}
                        />
                       </View>
                        
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            paddingHorizontal: 20,
                            paddingBottom: 20,
                            alignItems: "center",
                        }}
                    >
                        <View style={{width:'55%'}}>
                        <LatoText
                            fontName="Lato-Regular"
                            fonSiz={17}
                            col="#2E2E2E"
                            text="Name"
                        />
                        </View>
                       <View style={{width:'45%',flexDirection:'row',justifyContent:'space-between'}}>
                       <LatoText
                            fontName="Lato-Regular"
                            fonSiz={15}
                            col="#2E2E2E"
                            text={'$4.50'}
                        />
                       <LatoText
                            fontName="Lato-Regular"
                            fonSiz={15}
                            col="#2E2E2E"
                            text={'2'}
                        />
                       </View>
                        
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            paddingHorizontal: 20,
                            paddingBottom: 20,
                            alignItems: "center",
                        }}
                    >
                        <View style={{width:'55%'}}>
                        <LatoText
                            fontName="Lato-Regular"
                            fonSiz={17}
                            col="#2E2E2E"
                            text="Name"
                        />
                        </View>
                       <View style={{width:'45%',flexDirection:'row',justifyContent:'space-between'}}>
                       <LatoText
                            fontName="Lato-Regular"
                            fonSiz={15}
                            col="#2E2E2E"
                            text={'$4.50'}
                        />
                       <LatoText
                            fontName="Lato-Regular"
                            fonSiz={15}
                            col="#2E2E2E"
                            text={'2'}
                        />
                       </View>
                        
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            paddingHorizontal: 20,
                            paddingBottom: 20,
                            alignItems: "center",
                        }}
                    >
                        <View style={{width:'55%'}}>
                        <LatoText
                            fontName="Lato-Regular"
                            fonSiz={17}
                            col="#2E2E2E"
                            text="Name"
                        />
                        </View>
                       <View style={{width:'45%',flexDirection:'row',justifyContent:'space-between'}}>
                       <LatoText
                            fontName="Lato-Regular"
                            fonSiz={15}
                            col="#2E2E2E"
                            text={'$4.50'}
                        />
                       <LatoText
                            fontName="Lato-Regular"
                            fonSiz={15}
                            col="#2E2E2E"
                            text={'2'}
                        />
                       </View>
                        
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            paddingHorizontal: 20,
                            paddingBottom: 20,
                            alignItems: "center",
                        }}
                    >
                        <View style={{width:'55%'}}>
                        <LatoText
                            fontName="Lato-Regular"
                            fonSiz={17}
                            col="#2E2E2E"
                            text="Name"
                        />
                        </View>
                       <View style={{width:'45%',flexDirection:'row',justifyContent:'space-between'}}>
                       <LatoText
                            fontName="Lato-Regular"
                            fonSiz={15}
                            col="#2E2E2E"
                            text={'$4.50'}
                        />
                       <LatoText
                            fontName="Lato-Regular"
                            fonSiz={15}
                            col="#2E2E2E"
                            text={'2'}
                        />
                       </View>
                        
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            paddingHorizontal: 20,
                            paddingBottom: 20,
                            alignItems: "center",
                        }}
                    >
                        <View style={{width:'55%'}}>
                        <LatoText
                            fontName="Lato-Regular"
                            fonSiz={17}
                            col="#2E2E2E"
                            text="Name"
                        />
                        </View>
                       <View style={{width:'45%',flexDirection:'row',justifyContent:'space-between'}}>
                       <LatoText
                            fontName="Lato-Regular"
                            fonSiz={15}
                            col="#2E2E2E"
                            text={'$4.50'}
                        />
                       <LatoText
                            fontName="Lato-Regular"
                            fonSiz={15}
                            col="#2E2E2E"
                            text={'2'}
                        />
                       </View>
                        
                    </View>
                    <View style={lines.simple} />
                    <View style={{flexDirection:'row',justifyContent:'space-between',padding:20}}>
                    <LatoText
                            fontName='Sarabun-Medium'
                            fonSiz={25}
                            col="#2E2E2E"
                            text={'Total Price'}
                        />
                        <LatoText
                            fontName='Sarabun-Medium'
                            fonSiz={25}
                            col="#2E2E2E"
                            text={'$1.50'}
                        />
                    </View>
                    <View style={lines.simple} />
                    <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingBottom: 20,
              paddingTop:10,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <LatoText
              fontName="Lato-Bold"
              fonSiz={17}
              col="#2E2E2E"
              text="Cancel Order"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingBottom: 20,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <LatoText
              fontName="Lato-Regular"
              fonSiz={15}
              col="#2E2E2E"
              text="(Only possible before the order is 'being prepared)"
            />
          </View>
                    
                 
                    
                </ScrollView>
               
            </View>
        );
    }
}


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
)(OrderDetails);