import React from "react";
import { AntDesign } from "@expo/vector-icons";
import firebase from "firebase";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import LatoText from "./LatoText";
import { btnStyles } from "../styles/base";
import { bindActionCreators } from "redux";
import { cartAsync } from "../store/actions";
import { connect } from "react-redux";

class ProCards extends React.Component {
  state = {
    heart: false,
    image: "",
    qt: 1
  };

  componentDidMount() {
    const ref = firebase
      .storage()
      .ref("/product_images/" + this.props.product._id + "_1.jpg");
    ref.getDownloadURL().then(url => {
      this.setState({ image: url });
    });
  }
  handleChange(num) {
    var preNum = this.state.qt;
    preNum = num + preNum;
    if (preNum >= 1) {
      this.setState({ qt: preNum });
    }


    var pCart=this.props.cart;
    console.log("pcartttttt",pCart)
    var that =this
      pCart.map(function(pro,ind) {
       console.log("cehck",pro.product.productName ,that.props.product.productName)
       if(pro.product.productName === that.props.product.productName){
          pro.quantity = that.state.qt+num
       }

    });

    console.log("pacart 11111",pCart)


      // pCart.push(pCart1)
      this.props.cartAsync(pCart)
      // this.setState({cart: true})
      
  
      //   this.handleChange(1)
      // this.setState({qt: this.state.qt+1})

      // var temp=this.state.cart[this.props.index]
      // temp.price = ((this.props.product.product.price - ((this.props.product.product.price * this.props.product.product.discount)/100))*parseInt(this.state.qt+1)).toFixed(3)
      // temp.quantity = parseInt(this.state.qt+1)
      // this.state.cart[this.props.index] = temp
      // this.props.cartAsync(this.state.cart)
      

  }
  render() {
    return (
      <View style={styles.procards}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.push("ProductDetails", {
              product: this.props.product
            })
          }
        >
          <ImageBackground
            style={styles.proCardsImage}
            source={{ uri: this.state.image }}
          >
            <TouchableOpacity
              onPress={() =>
                this.setState(prevState => {
                  return {
                    heart: !prevState.heart
                  };
                })
              }
              style={{
                alignSelf: "flex-end",
                backgroundColor: "rgba(255, 255, 255,0.5)",
                margin: 10,
                padding: 7,
                borderRadius: 50
              }}
            >
              {this.state.heart ? (
                <AntDesign color="#B50000" size={18} name="heart" />
              ) : (
                <AntDesign color="#B50000" size={18} name="hearto" />
              )}
            </TouchableOpacity>
          </ImageBackground>
        </TouchableOpacity>
        <View style={styles.underCard}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.push("ProductDetails", {
                product: this.props.product
              })
            }
          >
            <LatoText
              fontName="Lato-Regular"
              fonSiz={20}
              col="#5C5C5C"
              text={this.props.product.productName}
            ></LatoText>
          </TouchableOpacity>

          <View style={{ flex: 1, flexDirection: "row", paddingTop: 5 }}>
          <View style={{marginRight:5}}>
            <LatoText
              fontName="Lato-Regular"
              fonSiz={15}
              lineThrough="line-through"
              col="#89898C"
              text={"$" + this.props.product.price + " / kg"}
            ></LatoText>
            </View>

            <View style={{marginLeft:5}}>
            <LatoText
              fontName="Lato-Regular"
              fonSiz={17}
              col="#2E2E2E"
              text={
                "$" +
                (this.props.product.price -
                  (this.props.product.price * this.props.product.discount) /
                    100) +
                " / kg"
              }
            ></LatoText>
            </View>
     
          </View>
          <View>
            <LatoText
              fontName="Lato-Regular"
              fonSiz={15}
              col="#B50000"
              text={"You will save " + this.props.product.discount + "%"}
            ></LatoText>
          </View>
          <View style={{ marginTop: 20 }}>
            {this.state.cart ? (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <TouchableOpacity
                  style={btnStyles.plusBtn}
                  onPress={() => this.handleChange(-1)}
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
                  style={btnStyles.plusBtn}
                  onPress={() => this.handleChange(1)}
                >
                  <AntDesign color="#B50000" size={18} name="plus" />
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  var pCart=this.props.cart;
                  pCart.push({
                    product: this.props.product,
                    quantity: this.state.qt
                  })
                  this.props.cartAsync(pCart)
                  this.setState({cart: true})
                }}
                style={btnStyles.cartBtn}
              >
                <LatoText
                  fontName="Lato-Regular"
                  fonSiz={15}
                  col="white"
                  text="Add To Cart"
                ></LatoText>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    );
  }
}
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
)(ProCards);
