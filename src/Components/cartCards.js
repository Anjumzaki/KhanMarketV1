import React from "react";
import {
  AntDesign} from '@expo/vector-icons'
  import firebase from "firebase";
  import { StyleSheet, Image, View, ScrollView,ImageBackground } from 'react-native';
  import { TouchableOpacity } from "react-native-gesture-handler";
  import LatoText from '../Helpers/LatoText'
  import { btnStyles } from "../styles/base";
  import { bindActionCreators } from "redux";
  import { cartAsync } from "../store/actions";
  import { connect } from "react-redux";

class CartCards extends React.Component {
  state = {
    heart:false, 
    image: "",
    qt: 0,
    cart: []
  } 

  async componentWillMount() {
    const ref = firebase
      .storage()
      .ref("/product_images/"+this.props.id+"_1.jpg");
    ref.getDownloadURL().then(url => {
      this.setState({ image: url });
    });
    
    if(this.props.isFeatured){
      this.setState({qt: this.props.product.quantity})

      await this.setState({cart: this.props.cart})
      var temp=this.state.cart[this.props.index]
      temp.price = this.props.product.price.toFixed(3)
      this.state.cart[this.props.index] = temp
      this.props.cartAsync(this.state.cart)
    }else{
      this.setState({qt: this.props.product.quantity})

      await this.setState({cart: this.props.cart})
      var temp=this.state.cart[this.props.index]
      temp.price = ((this.props.product.product.price - ((this.props.product.product.price * this.props.product.product.discount)/100))*parseInt(this.state.qt)).toFixed(3)
      this.state.cart[this.props.index] = temp
      this.props.cartAsync(this.state.cart)
    }
    
}


  render() {
   
    return (
        <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingVertical: 30,
              justifyContent: "space-between"
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Image
                style={{
                  width: 53,
                  height: 61,
                  marginRight: 10,
                  borderRadius: 10
                }}
                source={{uri: this.state.image}}
              />
              <LatoText
                fontName="Lato-Regular"
                fonSiz={15}
                col="#2E2E2E"
                text={this.props.product.product.productName.toUpperCase()}
              />
            </View>
            <View style={{alignItems:'flex-end',justifyContent:'space-between'}}>
              <View
                style={{
                  flexDirection: "row",
                  // alignItems: "center",
                  justifyContent: "space-between",
                  alignContent: "flex-end"
                }}
              >
                <TouchableOpacity
                  style={[btnStyles.plusBtn,{paddingTop:0}]}
                  onPress={() => {
                    //   this.handleChange(-1)
                    if(this.state.qt-1 >= 1){
                      this.setState({qt: this.state.qt-1})
                      var temp=this.state.cart[this.props.index]
                      temp.price = ((this.props.product.product.price - ((this.props.product.product.price * this.props.product.product.discount)/100))*parseInt(this.state.qt-1)).toFixed(3)
                      temp.quantity = parseInt(this.state.qt-1)
                      this.state.cart[this.props.index] = temp
                      this.props.cartAsync(this.state.cart)
                    }
                }}
                >
                  <AntDesign color="#B50000" size={18} name="minus" />
                </TouchableOpacity>
                <LatoText
                  fontName="Lato-Regular"
                  fonSiz={15}
                  col="#5C5C5C"
                  text={this.state.qt}
                />
                <TouchableOpacity
                  style={[btnStyles.plusBtn,{paddingTop:0}]}
                  onPress={() => {
                    //   this.handleChange(1)
                    this.setState({qt: this.state.qt+1})

                    var temp=this.state.cart[this.props.index]
                    temp.price = ((this.props.product.product.price - ((this.props.product.product.price * this.props.product.product.discount)/100))*parseInt(this.state.qt+1)).toFixed(3)
                    temp.quantity = parseInt(this.state.qt+1)
                    this.state.cart[this.props.index] = temp
                    this.props.cartAsync(this.state.cart)
                    }}
                >
                  <AntDesign color="#B50000" size={18} name="plus" />
                </TouchableOpacity> 
              </View>
              <View style={{marginRight:20}}>
                <LatoText
                  fontName="Lato-Regular"
                  fonSiz={15}
                  col="#5C5C5C"
                  text={!this.props.isFeatured ? (`$${((this.props.product.product.price - ((this.props.product.product.price * this.props.product.product.discount)/100))*parseInt(this.state.qt)).toFixed(3)}`) : "$"+this.props.product.product.price}
                />
              </View>
            </View>
          </View>

    );
  }
}
// export default CartCards;
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
  )(CartCards);
