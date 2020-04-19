import React from 'react';
import { StyleSheet, Text, View,Dimensions,ImageBackground,TouchableOpacity } from 'react-native';
import firebase from "firebase";
import { bindActionCreators } from "redux";
import { cartAsync } from "../store/actions";
import { connect } from "react-redux";

import LatoText from '../Helpers/LatoText'
class SliderItem extends React.Component {

    state = {
        image: ""
      };

      
    componentDidMount(){
        const ref = firebase
      .storage()
      .ref("/product_images/" + this.props.data._id + "_1.jpg");
        ref.getDownloadURL().then(url => {
        this.setState({ image: url });
        }); 
    }
  render(){
    //   console.log("CCCCC",this.props.data)
    return (
        <View>
        <ImageBackground style={styles.imgCon} source={{uri: this.state.image}} >
            <View style={[styles.wrapTop,{backgroundColor: "#7cba80"}]}>
                <View style={styles.topRight}>
                    <LatoText fontName="Lato-Bold" fonSiz={16} col='white' text={"You will get "+this.props.data.discount+"% off"} />
                    <View style={{ marginTop: 5 }}>
                        <LatoText fontName="Lato-Light" fonSiz={13} col='white' text={"Save $"+(parseFloat(this.props.data.discount/100) * parseFloat(this.props.data.price)).toFixed(2)} />
                    </View>
                </View>
            </View>
            <View style={styles.bottomText}>
                <ImageBackground style={{ width: Dimensions.get('window').width, height: 170 }} source={require('../../assets/bgSlider.png')} >
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ paddingTop: 105, paddingHorizontal: 10, width: '73%' }}>
                            <LatoText fontName="Lato-Regular" fonSiz={17} col='white' text={this.props.data.featuredDetails} />
                        </View>
                        <View style={{ paddingTop: 105, paddingHorizontal: 10, width: '30%', justifyContent: 'flex-end' }}>
                            <TouchableOpacity style={styles.buybBtn} 
                            
                            onPress={() =>
                                this.props.navigation.push("ProductDetails", {
                                  product: this.props.data
                                })
                              }
                            
                            // onPress={() => {
                            //     var pCart=this.props.cart;
                            //     pCart.push({
                            //         product: this.props.data,
                            //         quantity: parseInt(this.props.data.featuredQuantity),
                            //         isFeatured: true
                            //     })
                            //     this.props.cartAsync(pCart)
                            //     this.setState({cart: true})
                            //     }}
                                >
                                <LatoText fontName="Lato-Regular" fonSiz={16} col='gray' text="BUY" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </ImageBackground>
    </View>
    );
  }
}
// export default SliderItem
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgCon: {
        width: Dimensions.get('window').width,
        height: 250
    },
    topRight: {
        alignSelf: 'flex-end',

    },
    wrapTop: {
        alignSelf: 'flex-end',

        marginTop: 30,
        backgroundColor: '#7cba80',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    },
    bottomText: {
        height: 200,
        flexDirection: "row",
    },
    buybBtn: {
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
});

const mapStateToProps = state => ({
    cart: state.Cart.cartData, 
    loading: state.Cart.cartLoading,
    error: state.Cart.cartError
  });
  const mapDispatchToProps = (dispatch, ownProps) =>
    bindActionCreators(
        {
            cartAsync
        },
        dispatch
    );
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SliderItem);
  