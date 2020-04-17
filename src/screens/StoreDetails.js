import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

import Slider from '../Components/Slider'
import CardsRow from '../Components/CardsRow'
import axios from "axios";
import SingleStoreHeader from "../Helpers/SingleStoreHeader";


class StoreDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      products: [],
      finalProducts: [],
      featuredProducts: []
    };
  }

  componentDidMount() {
    axios.get("https://sheltered-scrubland-52295.herokuapp.com/get/all/products/" + this.props.route.params.storeId)
      .then(resp => {
        console.log("PRODUCTS", resp.data)
        this.setState({ products: resp.data })
      })
      .catch(err => console.log(err))

    axios.get("https://sheltered-scrubland-52295.herokuapp.com/get/all/featured/products/" + this.props.route.params.storeId)
      .then(resp => {
        console.log(resp)
        this.setState({ featuredProducts: resp.data, loading: false })
      })
      .catch(err => console.log(err))



    axios.get("https://sheltered-scrubland-52295.herokuapp.com/get/all/subCategories")
      .then(resp => {
        console.log("Cat", resp.data)
        this.setState({ categories: resp.data })
      })
      .catch(err => console.log(err))

  }
  capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  render() {
    var fp = []
    this.state.categories.map((category, index) => (
      fp.push({
        name: category.subCategory,
        products: this.state.products.filter(function (item) {
          return item.productType == category.subCategory;
        })
      })
    ))
    console.log("FFFFFPPPPPP", fp)
    console.log("stateeeeeeeee", this.state)

    return (
      <View>
        <SingleStoreHeader props={this.props} />
        <ScrollView showsVerticalScrollIndicator={false} >
          {this.state.featuredProducts.length > 0 ? (
            <Slider featuredProducts={this.state.featuredProducts} />
          ) : null}
          {fp.map((cat, index) => (
            cat.products.length > 0 ? (
              <CardsRow navigation={this.props.navigation} key={index} products={cat.products} name={this.capitalize(cat.name)} />
            ) : null
          ))}
          <View style={{ paddingTop: 10 }}>

          </View>
        </ScrollView>
      </View>

    );
  }
}
export default StoreDetails
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
