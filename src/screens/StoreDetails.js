import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

import Slider from '../Components/Slider'
import CardsRow from '../Components/CardsRow'
import beef1 from '../../assets/products/beef1.png'
import beef2 from '../../assets/products/beef2.png'
import beef3 from '../../assets/products/beef3.png'
import beef4 from '../../assets/products/beef4.png'
import beef5 from '../../assets/products/beef5.png'
import chicken1 from '../../assets/products/chicken1.png'
import chicken2 from '../../assets/products/chicken2.png'
import chicken3 from '../../assets/products/chicken3.png' 
import chicken4 from '../../assets/products/chicken4.png'
import chicken5 from '../../assets/products/chicken5.png'
import veg1 from '../../assets/products/veg1.png'
import veg2 from '../../assets/products/veg2.png'
import veg3 from '../../assets/products/veg3.png'
import veg4 from '../../assets/products/veg4.png'
import veg5 from '../../assets/products/veg5.png'
import axios from "axios";

class StoreDetails extends React.Component {

  constructor(props) 
  { 
      super(props); 
      this.state = { 
        categories: [],
        products: [],
        finalProducts: [],
        featuredProducts: []
    }; 
  } 

  componentDidMount(){
    axios.get("http://192.168.0.108:3000/get/all/products/"+this.props.route.params.storeId)
    .then(resp => {
      console.log("PRODUCTS", resp.data)
        this.setState({products: resp.data})
    })
    .catch(err => console.log(err))

    axios.get("https://mysterious-temple-58549.herokuapp.com/get/all/featured/products/"+this.props.route.params.storeId)
    .then(resp => {
        console.log(resp)
        this.setState({featuredProducts: resp.data, loading: false})
    })
    .catch(err => console.log(err))


    
    axios.get("https://mysterious-temple-58549.herokuapp.com/get/all/subCategories")
    .then(resp => {
      console.log("Cat", resp.data)
      this.setState({categories: resp.data})})
    .catch(err => console.log(err))

  }
   capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  render() {
    var fp=[]
    this.state.categories.map((category,index) => (
      fp.push({
          name: category.subCategory,
          products: this.state.products.filter(function(item){
            return item.productType == category.subCategory;
          })
        })
    ))
      console.log("FFFFFPPPPPP",fp)
      console.log("stateeeeeeeee",this.state)

    return (
      <ScrollView showsVerticalScrollIndicator={false} >
        {this.state.featuredProducts.length > 0 ? (
          <Slider navigation={this.props.navigation} featuredProducts={this.state.featuredProducts}/>
        ): null}
        {fp.map((cat,index) => (
          cat.products.length > 0 ? (
          <CardsRow navigation={this.props.navigation} key={index} products={cat.products} name={this.capitalize(cat.name)}/>
          ) : null
        ))}
       
       {/* <CardsRow navigation={this.props.navigation} products={chicken} name={'Chicken'}/>
       <CardsRow navigation={this.props.navigation} products={veg} name={'Vegetables'}/> */}
     <View style={{paddingTop:10}}>

     </View>
      </ScrollView>
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
