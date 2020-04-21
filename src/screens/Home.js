import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, Button, StatusBar,Platform } from "react-native";
import StoreCard from "../Components/StoreCard";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios";
import fb from "../config/Fire";
import firebase from "firebase";
import StoreHeader from "../Helpers/StoreHeader";
import { bindActionCreators } from "redux";
import { userAsync } from "../store/actions";
import { connect } from "react-redux"

class Home extends React.Component {
  static navigationOptions = {
    header: null,
};
  constructor(props) {
    super(props);
    this.state = {
      stores: [],
      img: "",
      images: [],
      cards: [],
      image: ""
    };
  }
  componentDidMount() {
    axios
      .get("https://sheltered-scrubland-52295.herokuapp.com/get/stores/")
      .then(resp => {
        this.setState({
          stores: resp.data
        });
       
      });
  }
  render() {
    console.log("propsssss",this.props.user)
    return (
      <View style={{ justifyContent: "center" }}>
        <StatusBar  translucent={true} barStyle="light-content" backgroundColor='transparent'/>
        <View>

        <ScrollView style={Platform.OS == 'ios' ? {marginTop:70} : {marginTop:100,marginBottom:2}}> 
          {this.state.stores.length > 0 &&
            this.state.stores.slice(0).reverse().map((item,ind) => (
              <StoreCard key={ind}
              key={item._id}
              navigation={this.props.navigation}
              name={item.storeName}
              distance="1 mile away"
              address={item.storeAddress}
              id={item._id}
            />
            ))}
        </ScrollView>
        </View>

      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user, 
  loading: state.user.userLoading,
  error: state.user.userError
});
const mapDispatchToProps = (dispatch, ownProps) =>
  bindActionCreators(
      {
        userAsync
      },
      dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);