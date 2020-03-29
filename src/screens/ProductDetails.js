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
import { AntDesign } from "@expo/vector-icons";
import LatoText from "../Helpers/LatoText";
import { ScrollView } from "react-native-gesture-handler";
import Expandable from "../Helpers/Expandable";
import CourselImage from "../Components/CourselImage";
import { btnStyles,bottomTab } from "../styles/base";
import { Row } from "native-base";
const { width } = Dimensions.get("window");
const { height } = 300;
import firebase from "firebase";
import { bindActionCreators } from "redux";
import { cartAsync } from "../store/actions";
import { connect } from "react-redux";
 
class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heart: false,
        qt: 1
    };
  }

  componentDidMount(){
    // console.log("product details props", this.props.route.params.product)
    // var count =0
    // for(var i=0; i<10; i++){
    //   const ref = firebase
    //   .storage()
    //   .ref("/product_images/"+this.props.route.params.product._id+"_"+parseInt(i+1)+".jpg");
    //     ref.getDownloadURL().then(url => {
    //       console.log(url, "I ma here"+i);
    //       this.setState({ image: url });
    //       if(url){
    //         count++
    //       }
    //     });
    // }

    // console.log("COUNT",count)

  }


  _onLayoutDidChange = e => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  };
  handleChange (num){
    var preNum = this.state.qt
    preNum =num + preNum
    console.log(preNum)
    if(preNum>=1){
      this.setState({qt:preNum})
    }
  }
  render() {
    // console.log("PRODUCT DETAIL PROPS",this.props)

    var product = this.props.route.params.product
    var noOfImg = product.noOfImages
    noOfImg = parseInt(noOfImg)
    var temp=[]
    for(var i=0; i< noOfImg; i++){
      temp.push(i)
    }
    var abc= [1,2,3]
    return (
      <View style={{ flex: 1, backgroundColor: "white"  }}>
        <ScrollView style={{ backgroundColor: "white" }}>
          <View
            onLayout={this._onLayoutDidChange}
            style={{
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center"
            }}
          >
            {/* <Text>asd</Text> */}
            <Carousel
              delay={6000}
              style={{
                width: Dimensions.get("window").width - 40,
                height: 250,
                marginTop: 20,
                borderRadius: 10
              }}
              autoplay={true}
              bullets
              // onAnimateNextPage={p => console.log(p)}
              bulletStyle={{
                padding: 0,
                margin: 3,
                marginTop: 80,
                borderColor: "#89898C"
              }}
              chosenBulletStyle={{
                padding: 0,
                margin: 3,
                marginTop: 80,
                backgroundColor: "#89898C"
              }}
            > 
            {temp.map((item,index) => (
              // <View style={{ borderRadius: 10, overflow: "hidden" }}>
            
                  <CourselImage id={product._id} index={index+1}/>
              // </View>
                ))}
                
            </Carousel>
          </View>

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
              backgroundColor: "rgb(255, 255, 255)",
              margin: 10,
              padding: 7,
              borderRadius: 50,
              position: "relative",
              bottom: 25,
              right: 20,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5
            }}
          >
            {this.state.heart ? (
              <AntDesign
                style={styles.favIcon}
                color="#B50000"
                size={18}
                name="heart"
              />
            ) : (
              <AntDesign
                style={styles.favIcon}
                color="#B50000"
                size={18}
                name="hearto"
              />
            )}
          </TouchableOpacity>
          <View style={{ paddingHorizontal: 20 }}>
            <LatoText
              fontName="Lato-Regular"
              fonSiz={25}
              col="#5C5C5C"
              text={product.productName}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 22,
                  alignItems: "center"
                }}
              >
                <LatoText
                  fontName="Lato-Regular"
                  fonSiz={17}
                  col="#89898C"
                  text={`$${product.price} / lb `}
                />
                <LatoText
                  fontName="Lato-Bold"
                  fonSiz={20}
                  col="#5C5C5C"
                  text={` $${product.price - ((product.price * product.discount)/100)} / lb `}
                />
              </View>
              <View style={{ marginTop: 22 }}>
                <LatoText
                  fontName="Lato-Regular"
                  fonSiz={17}
                  col="#B50000"
                  text={` You will save ${product.discount}% `}
                />
              </View>
            </View>
            <View style={{ marginTop: 22 }}>
              <LatoText
                fontName="Lato-Regular"
                fonSiz={17}
                col="#5C5C5C"
                text={
                  product.productDescription
                }
              />
            </View>
          </View>
          <Expandable product={product}/>
        </ScrollView>
        <View style={bottomTab.cartSheet}>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'50%'}}>
          <TouchableOpacity style={btnStyles.plusBtn} onPress={()=>this.handleChange(-1)}>
                  <AntDesign color="#B50000" size={18} name="minus" />
                </TouchableOpacity>
                <LatoText
                  fontName="Lato-Regular"
                  fonSiz={15}
                  col="#5C5C5C"
                  text={this.state.qt}
                />
                <TouchableOpacity style={btnStyles.plusBtn} onPress={()=>this.handleChange(1)}>
                  <AntDesign color="#B50000" size={18} name="plus" />
                </TouchableOpacity>
          </View>
          <TouchableOpacity
            // onPress={() => this.setState({ cart: true })}
            onPress={() => {
              console.log("props check", this.props.cart)
              var pCart=this.props.cart;
              pCart.push({
                product: product,
                quantity: this.state.qt
              })
              this.props.cartAsync(pCart)
            }}
            style={[btnStyles.cartBtn,{width:'40%'}]}
          >
            <LatoText
              fontName="Lato-Regular"
              fonSiz={15}
              col="white"
              text="Add To Cart"
            ></LatoText>
          </TouchableOpacity>
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
  imgCon: {
    width: Dimensions.get("window").width,
    height: 250
  },
  topRight: {
    alignSelf: "flex-end"
  },
  wrapTop: {
    alignSelf: "flex-end",

    marginTop: 30,
    backgroundColor: "#7cba80",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15
  },
  bottomText: {
    height: 200,
    flexDirection: "row"
  },
  buybBtn: {
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
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
)(ProductDetails);
