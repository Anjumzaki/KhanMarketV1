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
import { cartAsync, cartSizeAsync } from "../store/actions";
import { connect } from "react-redux";
import axios from "axios";

class ProCards extends React.Component {
  state = {
    heart: false,
    image: "",
    qt: 1,
    favourites: []
  };

  componentDidMount() {
    const ref = firebase
      .storage()
      .ref("/product_images/" + this.props.product._id + "_1.jpg");
    ref.getDownloadURL().then(url => {
      this.setState({ image: url });
    });


    console.log("FAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV",this.props.product._id)
    if(this.props.product.favourites === undefined){
        this.setState({favourites: []})
    }else{
      for(var i=0; i<this.props.product.favourites.length; i++){
        if(this.props.product.favourites[i].userId === this.props.user.user._id){
          this.setState({heart: true})
        }
      }
      this.setState({favourites: this.props.product.favourites})
    }
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

      this.props.cartAsync(pCart)

  }
  render() {
    console.log("PRop CRAD props", this.props.cart.length, "cartSize",this.props.cartSize)
    this.props.cartSizeAsync(this.props.cart.length)
    return (
      <View style={styles.procards}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate("ProductDetails", {
              product: this.props.product
            })
          }
        >
          <ImageBackground
            style={styles.proCardsImage}
            source={{ uri: this.state.image }}
          >
            <TouchableOpacity
              onPress={async() =>{
                console.log("HEARTTTTTTTTT",this.state.heart)
                console.log("FAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV",this.state.favourites)
                if(this.state.heart === false){
                    await this.state.favourites.push({userId: this.props.user.user._id})

                    axios.post('http://192.168.0.108:3000/add/favourite',{
                        userId: this.props.user.user._id,
                        product: this.props.product,
                        storeName: this.props.store.name
                    })
                    .then(resp => console.log(resp))
                    .catch(err => console.log(err))
                }else{
                  console.log("iNCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC")
                  var that=this
                  this.state.favourites = this.state.favourites.filter(function(el){
                    return el.userId !== that.props.user.user._id;
                    // console.log("asd",el.userId,that.props.user.user._id)
                  });

                  axios.delete('http://192.168.0.108:3000/delete/favourite/'+this.props.user.user._id+'/'+this.props.product._id)
                  .then(resp =>console.log(resp))
                  .catch(err => err)
                  console.log("afteeeeeeeeeeeeeeeeeeeeeeee")

                }
                console.log("FAVVVVVVVVVVVVV11111111111111111111111111",this.state.favourites)

                axios.put('http://192.168.0.108:3000/edit/favourites/'+this.props.product._id,{
                  favourites: this.state.favourites
                })
                .then(resp => {
                  this.setState(prevState => {
                    return {
                      heart: !prevState.heart
                    };
                  })
                })
                .catch(err => console.log(err))
              }
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
              this.props.navigation.navigate("ProductDetails", {
                product: this.props.product
              })
            }
          >
            <LatoText
              fontName="Lato-Bold"
              fonSiz={15}
              col="#5C5C5C"
              text={this.props.product.productName.substring(0,15)}
            ></LatoText>
          </TouchableOpacity>

          <View style={{ flex: 1, flexDirection: "row", paddingTop: 5 }}>
          <View style={{marginRight:5}}>
            <LatoText
              fontName="Lato-Regular"
              fonSiz={15}
              lineThrough="line-through"
              col="#89898C"
              text={"$" + parseFloat(this.props.product.price).toFixed(1) + " / kg"}
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
                    100).toFixed(1) +
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
  cartSize: state.CartSize.cartSizeData,
  error: state.Cart.cartError,
  user: state.user.user,
  store: state.Store.storeData

});
const mapDispatchToProps = (dispatch, ownProps) =>
  bindActionCreators(
      {
          cartAsync, 
          cartSizeAsync
      },
      dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProCards);
